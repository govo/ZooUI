import cssPlugin from 'rollup-plugin-scss'
import vuePlugin from 'rollup-plugin-vue'
import CleanCSS from 'clean-css'
import { writeFileSync } from 'fs'
import path from 'path'
import glob from 'glob'

// 打包packages目录
const rollupFn = function ({ input, name, dist, format, vueOptions = { css: false } }) {
  return {
    input,
    output: {
      name,
      file: dist,
      format: format || 'umd'
    },
    plugins: [
      vuePlugin({
        css: false,
        ...vueOptions
      }),
      cssPlugin({
        output: function (styles, styleNodes) {
          let file = ''
          for (let key in styleNodes) {
            file = path.basename(key)
            file = file.split('?')[0]
            file = file.replace(path.extname(file), '')
          }
          console.log('cssPlugin:', file)
          writeFileSync(path.resolve('lib/styles/' + file + '.css'), new CleanCSS().minify(styles).styles)
        },
      }),
    ]
  }
}
const pksList = glob
  .sync(path.resolve('./packages/*/index.js'))
  .map(item => {
    let temp = path.dirname(item).split('packages')
    return temp[temp.length - 1]
  })
  .reduce((acc, cur) => {
    acc.push(rollupFn({
      name: cur,
      input: path.resolve('./packages/' + cur + '/index.js'),
      dist: path.resolve('./lib/' + cur + '.js'),
      format: 'umd'
    }))
    return acc
  }, [])



//打包主目录
const assignBaseConfig = function ({ format, vueOptions = {} }) {
  return {
    input: 'packages/index.js',
    output: {
      name: 'ZooUI',
      file: path.resolve(`lib/index${format ? '.' + format : ''}.js`),
      format: format || 'umd'
    },
    plugins: [
      cssPlugin({
        output: function (styles, styleNodes) {

          writeFileSync(path.resolve('lib/styles/styles.css'), new CleanCSS().minify(styles).styles)
        },
      }),
      vuePlugin({
        css: false,
        ...vueOptions
      }),
    ]
  }
}

let buildList = [
  assignBaseConfig({}),
  assignBaseConfig({ format: 'cjs', vueOptions: { template: { optimizeSSR: true } } }),
  assignBaseConfig({ format: 'iife' }),
  assignBaseConfig({ format: 'esm' }),
]
buildList = buildList.concat(pksList)
export default buildList