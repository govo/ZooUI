import cssPlugin from 'rollup-plugin-scss'
import vuePlugin from 'rollup-plugin-vue'
import CleanCSS from 'clean-css'
import { writeFileSync } from 'fs'
import path from 'path'
// todo:对不同库想进行分散打包，需要用多个配置
const rollupFn = function ({ input, name, dist, format = 'esm', vueOptions = { css: false } }) {
  return {
    input,
    output: {
      name,
      file: dist,
      format: format || 'esm'
    },
    plugins: [
      vuePlugin({
        css: false,
        ...vueOptions
      }),
      cssPlugin(),
    ]
  }
}
const assignBaseConfig = function ({ format, vueOptions = {} }) {
  return {
    input: 'src/index.js',
    output: {
      name: 'ZooUI',
      file: path.resolve(`lib/index${format ? '.' + format : ''}.js`),
      format: format || 'esm'
    },
    plugins: [
      cssPlugin({
        output: function (styles, styleNodes) {
          writeFileSync(path.resolve('lib/zoo-ui.css'), new CleanCSS().minify(styles).styles)
        },
      }),
      vuePlugin({
        css: false,
        ...vueOptions
      }),
    ]
  }
}

export default [
  assignBaseConfig({}),
  assignBaseConfig({ format: 'cjs', vueOptions: { template: { optimizeSSR: true } } }),
  assignBaseConfig({ format: 'iife' }),
  assignBaseConfig({ format: 'umd' }),
  rollupFn({
    name: 'GameSelector',
    input: path.resolve('./src/GameSelector/index.js'),
    dist: path.resolve('./lib/GameSelector.js'),
    format: 'esm'
  }),
  rollupFn({
    name: 'ChannelSelector',
    input: path.resolve('./src/ChannelSelector/index.js'),
    dist: path.resolve('./lib/ChannelSelector.js'),
    format: 'esm'
  }),
]