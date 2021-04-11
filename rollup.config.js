import cssPlugin from 'rollup-plugin-scss'
import vuePlugin from 'rollup-plugin-vue'
import CleanCSS from 'clean-css'
import { writeFileSync } from 'fs'
import path from 'path'

export default {
  input: 'src/index.js',
  output: {
    name: 'ZooUI',
    file: 'dist/zoo-ui.js',
    format: 'esm'
  },
  plugins: [
    cssPlugin({
      output: function (styles, styleNodes) {
        writeFileSync(path.resolve('dist/zoo-ui.css'), new CleanCSS().minify(styles).styles)
      },
    }),
    vuePlugin(),
  ]
}
