(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStrap"] = factory();
	else
		root["VueStrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _Pager = __webpack_require__(/*! component/Pager */ 1);\n\nvar _Pager2 = _interopRequireDefault(_Pager);\n\nvar _Select = __webpack_require__(/*! component/Select */ 4);\n\nvar _Select2 = _interopRequireDefault(_Select);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar VueStrap = function VueStrap(Vue) {\n  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n  Vue.component(genName(options, 'pager'), _Pager2['default']);\n  Vue.component(genName(options, 'select'), _Select2['default']);\n};\n\nfunction genName(_ref, names) {\n  var prefix = _ref.prefix;\n  var caseType = _ref.caseType;\n\n  var name = '';\n  if (!Array.isArray(names)) {\n    names = [names];\n  }\n  switch (caseType) {\n    case 'kebab-case':\n      name = names.join('-');\n      if (prefix) {\n        name = prefix + '-' + name;\n      }\n      break;\n    case 'camelCase':\n      if (prefix) {\n        name = prefix + capitalizeArray(names);\n      } else {\n        name = names[0] + capitalizeArray(names.slice(1));\n      }\n      break;\n    case 'TitleCase':\n    default:\n      name = capitalizeArray(names);\n      if (prefix) {\n        name = prefix + name;\n      }\n      break;\n  }\n  return name;\n}\n\nfunction capitalizeArray(arr) {\n  return arr.map(function (str) {\n    return str.charAt(0).toUpperCase() + str.slice(1);\n  }).join('');\n}\n\nexports['default'] = VueStrap;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./src/component/Pager.vue ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var __vue_exports__, __vue_options__\n\n/* script */\n__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Pager.vue */ 2)\n\n/* template */\nvar __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-1!vue-loader/lib/selector?type=template&index=0!./Pager.vue */ 3)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-1\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-1\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] Pager.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/component/Pager.vue\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Pager.vue?");

/***/ },
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/Pager.vue ***!
  \*****************************************************************************************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar counter = 1;\nvar notNumReg = /[^0-9]/g;\n\nexports['default'] = {\n  name: 'Pager',\n  props: {\n    id: {\n      type: String,\n      'default': 'Pager-' + counter++\n    },\n    total: {\n      type: Number,\n      'default': 0\n    },\n    limit: {\n      type: Number,\n      'default': 5\n    },\n    padding: {\n      type: Number,\n      'default': 2\n    },\n    sizeLimit: {\n      type: Number,\n      'default': 9\n    },\n    prevText: {\n      type: String,\n      'default': '前一页'\n    },\n    nextText: {\n      type: String,\n      'default': '后一页'\n    }\n  },\n  data: function data() {\n    return {\n      current: 1,\n      begin: 1,\n      end: 1\n    };\n  },\n\n  computed: {\n    size: function size() {\n      return Math.ceil(this.total / this.limit);\n    },\n    validJump: function validJump() {\n      var jump = this.jump;\n      return typeof jump === 'number' && jump > 0 && jump <= this.size && jump !== this.current;\n    }\n  },\n  watch: {\n    jump: function jump(newValue, oldValue) {\n      if (typeof newValue === 'string') {\n        newValue = newValue.replace(notNumReg, '');\n        if (newValue !== '') {\n          newValue = parseInt(newValue);\n        }\n        this.jump = newValue;\n      }\n    },\n    total: function total() {\n      this.calcSize();\n    },\n    limit: function limit() {\n      this.calcSize();\n    },\n    current: function current() {\n      this.calcSize();\n    }\n  },\n  methods: {\n    calcSize: function calcSize() {\n      if (this.current > this.size) {\n        this.current = 1;\n      }\n      this.begin = this.current - this.padding;\n      this.end = this.current + this.padding;\n      if (this.begin < 2) {\n        this.begin = 2;\n      }\n      if (this.end > this.size - 1) {\n        this.end = this.size - 1;\n      }\n      if (this.current - this.begin <= 1) {\n        this.end = this.begin + this.padding * 2;\n      }\n      if (this.end - this.current <= 1) {\n        this.begin = this.end - this.padding * 2;\n      }\n    },\n    jump: function jump() {\n      var jump = this.jump;\n      if (typeof jump === 'number') {\n        this.nav(jump);\n      }\n      this.jump = '';\n      this.$refs.jump.focus();\n    },\n    nav: function nav(page) {\n      if (page < 1 || page > this.total || page === this.current) {\n        return;\n      }\n      this.current = page;\n      this.$emit('nav', {\n        total: this.total,\n        current: this.current,\n        limit: this.limit,\n        offset: this.limit * (this.current - 1)\n      });\n    }\n  },\n  created: function created() {\n    this.calcSize();\n  }\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/Pager.vue\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Pager.vue?./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0");

/***/ },
/* 3 */
/*!******************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-1!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/Pager.vue ***!
  \******************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports={render:function (){with(this) {\n  return _h('div', {\n    directives: [{\n      name: \"show\",\n      value: (size > 1),\n      expression: \"size>1\"\n    }],\n    staticClass: \"pager\"\n  }, [_h('div', {\n    staticClass: \"wrap clearfix\",\n    attrs: {\n      \"style\": \"display:inline-block;\"\n    }\n  }, [_h('ul', {\n    staticClass: \"pagination m-y-0\"\n  }, [_h('li', {\n    staticClass: \"page-item\",\n    class: {\n      disabled: current === 1\n    }\n  }, [(current !== 1) ? _h('a', {\n    staticClass: \"page-link\",\n    attrs: {\n      \"href\": \"javascript:void(0)\"\n    },\n    on: {\n      \"click\": function($event) {\n        nav(current - 1)\n      }\n    }\n  }, [_s(prevText)]) : _h('span', {\n    staticClass: \"page-link\"\n  }, [_s(prevText)]), \" \"]), \" \", \" \", (size > sizeLimit) ? [_h('li', {\n    staticClass: \"page-item\",\n    class: {\n      active: current === 1\n    }\n  }, [_h('a', {\n    staticClass: \"page-link\",\n    attrs: {\n      \"href\": \"javascript:void(0)\"\n    },\n    on: {\n      \"click\": function($event) {\n        nav(1)\n      }\n    }\n  }, [\"1\"])]), \" \", (begin > 2) ? _h('li', {\n    staticClass: \"page-item disabled\"\n  }, [_m(0)]) : _e(), \" \", ((end - begin + 1)) && _l(((end - begin + 1)), function(i) {\n    return _h('li', {\n      staticClass: \"page-item\",\n      class: {\n        active: current === (i - 1 + begin)\n      }\n    }, [_h('a', {\n      staticClass: \"page-link\",\n      attrs: {\n        \"href\": \"javascript:void(0)\"\n      },\n      on: {\n        \"click\": function($event) {\n          nav(i - 1 + begin)\n        }\n      }\n    }, [_s(i - 1 + begin)])])\n  }), \" \", (end < size - 1) ? _h('li', {\n    staticClass: \"page-item disabled\"\n  }, [_m(1)]) : _e(), \" \", _h('li', {\n    staticClass: \"page-item\",\n    class: {\n      active: current === size\n    }\n  }, [_h('a', {\n    staticClass: \"page-link\",\n    attrs: {\n      \"href\": \"javascript:void(0)\"\n    },\n    on: {\n      \"click\": function($event) {\n        nav(size)\n      }\n    }\n  }, [_s(size)])])] : [(size) && _l((size), function(i) {\n    return _h('li', {\n      staticClass: \"page-item\",\n      class: {\n        active: current === i\n      }\n    }, [_h('a', {\n      staticClass: \"page-link\",\n      attrs: {\n        \"href\": \"javascript:void(0)\"\n      },\n      on: {\n        \"click\": function($event) {\n          nav(i)\n        }\n      }\n    }, [_s(i)])])\n  })], \" \", \" \", \" \", _h('li', {\n    staticClass: \"page-item\",\n    class: {\n      disabled: current === size\n    }\n  }, [(current !== size) ? _h('a', {\n    staticClass: \"page-link\",\n    attrs: {\n      \"href\": \"javascript:void(0)\"\n    },\n    on: {\n      \"click\": function($event) {\n        nav(current + 1)\n      }\n    }\n  }, [_s(nextText)]) : _h('span', {\n    staticClass: \"page-link\"\n  }, [_s(nextText)]), \" \"])])])])\n}},staticRenderFns: [function (){with(this) {\n  return _h('span', {\n    staticClass: \"page-link\"\n  }, [\"...\"])\n}},function (){with(this) {\n  return _h('span', {\n    staticClass: \"page-link\"\n  }, [\"...\"])\n}}]}\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-1\", module.exports)\n  }\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/vue-loader/lib/template-compiler.js?id=data-v-1!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/Pager.vue\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Pager.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-1!./~/vue-loader/lib/selector.js?type=template&index=0");

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./src/component/Select.vue ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var __vue_exports__, __vue_options__\n\n/* script */\n__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Select.vue */ 5)\n\n/* template */\nvar __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-2!vue-loader/lib/selector?type=template&index=0!./Select.vue */ 6)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2\", __vue_options__)\n  } else {\n    hotAPI.reload(\"data-v-2\", __vue_options__)\n  }\n})()}\nif (__vue_options__.functional) {console.error(\"[vue-loader] Select.vue: functional components are not supported and should be defined in plain js files using render functions.\")}\n\nmodule.exports = __vue_exports__\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/component/Select.vue\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Select.vue?");

/***/ },
/* 5 */
/*!******************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/Select.vue ***!
  \******************************************************************************************************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports['default'] = {\n  props: {\n    value: null,\n    multiple: {\n      type: Boolean,\n      'default': false\n    },\n    options: {\n      type: Array,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      selected: null\n    };\n  },\n\n  watch: {\n    value: function value() {},\n    selected: function selected() {\n      this.$emit('input', this.selected);\n    }\n  },\n  created: function created() {\n    if (this.multiple) {\n      this.selected = this.options.filter(function (option) {\n        return option.selected;\n      });\n    } else {\n      this.selected = this.options.find(function (option) {\n        return option.selected;\n      }) || this.options[0];\n    }\n  }\n};\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/component/Select.vue\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Select.vue?./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0");

/***/ },
/* 6 */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-2!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/Select.vue ***!
  \*******************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports={render:function (){with(this) {\n  return _h('select', {\n    directives: [{\n      name: \"model\",\n      value: (selected),\n      expression: \"selected\"\n    }],\n    staticClass: \"custom-select\",\n    attrs: {\n      \"multiple\": multiple\n    },\n    on: {\n      \"change\": function($event) {\n        selected = Array.prototype.filter.call($event.target.options, function(o) {\n          return o.selected\n        }).map(function(o) {\n          return \"_value\" in o ? o._value : o.value\n        })[0]\n      }\n    }\n  }, [(options) && _l((options), function(option, index) {\n    return _h('option', {\n      domProps: {\n        \"value\": option\n      }\n    }, [\"\\n    \" + _s(option.text) + \"\\n  \"])\n  })])\n}},staticRenderFns: []}\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-2\", module.exports)\n  }\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/vue-loader/lib/template-compiler.js?id=data-v-2!./~/vue-loader/lib/selector.js?type=template&index=0!./src/component/Select.vue\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/component/Select.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-2!./~/vue-loader/lib/selector.js?type=template&index=0");

/***/ }
/******/ ])
});
;