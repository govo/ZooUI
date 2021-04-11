'use strict';

var vue = require('vue');

// @ is an alias to /src
var script$1 = {
  name: 'ChannelSelector',
  props: {
    gameList: {
      type: Array,
      default () { return [] }
    },
    gameId: {
      type: Number
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      selectedGameId: 0
    }
  },
  created () {
  },
  computed: {
    _maxHeight () {
      return this.maxHeight || Math.max(window.innerHeight - 150, 200)
    },
    gameName () {
      return this.findGamebyId(this.selectedGameId).name
    }
  },
  mounted () { },
  methods: {
    findGamebyId (gameId) {
      gameId = +gameId;
      let game = {};
      this.gameList.forEach(item => {
        if (item._id === gameId) {
          game = item;
        }
      });
      return game
    },
    gameSelect (gameId) {
      let game = this.findGamebyId(gameId);
      this.selectedGameId = gameId;
      this.$emit('change', game);
    }
  },
  components: {}
};

const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-c7f02774");

vue.pushScopeId("data-v-c7f02774");
const _hoisted_1$1 = {
  key: 0,
  class: "zoo__game__game-id"
};
const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("i", { class: "el-icon-arrow-down el-icon--right" }, null, -1 /* HOISTED */);
const _hoisted_3$1 = { class: "game-id" };
vue.popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_el_dropdown_item = vue.resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = vue.resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = vue.resolveComponent("el-dropdown");

  return (vue.openBlock(), vue.createBlock(_component_el_dropdown, {
    trigger: "click",
    onCommand: $options.gameSelect
  }, {
    default: _withId$1(() => [
      vue.createVNode(_component_el_button, {
        type: "text",
        class: "nav-drop-btn"
      }, {
        default: _withId$1(() => [
          vue.createTextVNode(vue.toDisplayString($options.gameName || '请选择游戏') + " ", 1 /* TEXT */),
          (_ctx.selectedGameId)
            ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$1, "[" + vue.toDisplayString(_ctx.selectedGameId) + "]", 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true),
          _hoisted_2$1
        ]),
        _: 1 /* STABLE */
      }),
      vue.createVNode(_component_el_dropdown_menu, {
        slot: "dropdown",
        class: "zoo__game___selector",
        style: 'max-height:' + $options._maxHeight + 'px'
      }, {
        default: _withId$1(() => [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.gameList, (item) => {
            return (vue.openBlock(), vue.createBlock(_component_el_dropdown_item, {
              command: item._id,
              key: item._id
            }, {
              default: _withId$1(() => [
                vue.createTextVNode(vue.toDisplayString(item.name) + " ", 1 /* TEXT */),
                vue.createVNode("span", _hoisted_3$1, "- " + vue.toDisplayString(item._id), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["command"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["style"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCommand"]))
});

script$1.render = render$1;
script$1.__scopeId = "data-v-c7f02774";
script$1.__file = "src/GameSelector/GameSelector.vue";

/* istanbul ignore next */
script$1.install = function(Vue) {
  Vue.component(script$1.name, script$1);
};

// @ is an alias to /src
var script = {
  name: 'GameSelector',
  props: {
    gameList: {
      type: Array,
      default () { return [] }
    },
    gameId: {
      type: Number
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      selectedGameId: 0
    }
  },
  created () {
  },
  computed: {
    _maxHeight () {
      return this.maxHeight || Math.max(window.innerHeight - 150, 200)
    },
    gameName () {
      return this.findGamebyId(this.selectedGameId).name
    }
  },
  mounted () { },
  methods: {
    findGamebyId (gameId) {
      gameId = +gameId;
      let game = {};
      this.gameList.forEach(item => {
        if (item._id === gameId) {
          game = item;
        }
      });
      return game
    },
    gameSelect (gameId) {
      let game = this.findGamebyId(gameId);
      this.selectedGameId = gameId;
      this.$emit('change', game);
    }
  },
  components: {}
};

const _withId = /*#__PURE__*/vue.withScopeId("data-v-b9a68728");

vue.pushScopeId("data-v-b9a68728");
const _hoisted_1 = {
  key: 0,
  class: "zoo__game__game-id"
};
const _hoisted_2 = /*#__PURE__*/vue.createVNode("i", { class: "el-icon-arrow-down el-icon--right" }, null, -1 /* HOISTED */);
const _hoisted_3 = { class: "game-id" };
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_el_dropdown_item = vue.resolveComponent("el-dropdown-item");
  const _component_el_dropdown_menu = vue.resolveComponent("el-dropdown-menu");
  const _component_el_dropdown = vue.resolveComponent("el-dropdown");

  return (vue.openBlock(), vue.createBlock(_component_el_dropdown, {
    trigger: "click",
    onCommand: $options.gameSelect
  }, {
    default: _withId(() => [
      vue.createVNode(_component_el_button, {
        type: "text",
        class: "nav-drop-btn"
      }, {
        default: _withId(() => [
          vue.createTextVNode(vue.toDisplayString($options.gameName || '请选择游戏') + " ", 1 /* TEXT */),
          (_ctx.selectedGameId)
            ? (vue.openBlock(), vue.createBlock("span", _hoisted_1, "[" + vue.toDisplayString(_ctx.selectedGameId) + "]", 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true),
          _hoisted_2
        ]),
        _: 1 /* STABLE */
      }),
      vue.createVNode(_component_el_dropdown_menu, {
        slot: "dropdown",
        class: "zoo__game___selector",
        style: 'max-height:' + $options._maxHeight + 'px'
      }, {
        default: _withId(() => [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.gameList, (item) => {
            return (vue.openBlock(), vue.createBlock(_component_el_dropdown_item, {
              command: item._id,
              key: item._id
            }, {
              default: _withId(() => [
                vue.createTextVNode(vue.toDisplayString(item.name) + " ", 1 /* TEXT */),
                vue.createVNode("span", _hoisted_3, "- " + vue.toDisplayString(item._id), 1 /* TEXT */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["command"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["style"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onCommand"]))
});

script.render = render;
script.__scopeId = "data-v-b9a68728";
script.__file = "src/ChannelSelector/ChannelSelector.vue";

/* istanbul ignore next */
script.install = function(Vue) {
  Vue.component(script.name, script);
};

const components = [script$1, script];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  ChannelSelector: script,
  GameSelector: script$1,
  install
};

module.exports = index;
