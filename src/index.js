import GameSelector from './GameSelector/index'
import ChannelSelector from './ChannelSelector/index'

const components = [GameSelector, ChannelSelector]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  ChannelSelector,
  GameSelector,
  install
}