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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Pager = __webpack_require__(1);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	var _Select = __webpack_require__(4);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var VueStrap = function VueStrap(Vue) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Vue.component(genName(options, 'pager'), _Pager2['default']);
	  Vue.component(genName(options, 'select'), _Select2['default']);
	};
	
	function genName(_ref, names) {
	  var prefix = _ref.prefix;
	  var caseType = _ref.caseType;
	
	  var name = '';
	  if (!Array.isArray(names)) {
	    names = [names];
	  }
	  switch (caseType) {
	    case 'kebab-case':
	      name = names.join('-');
	      if (prefix) {
	        name = prefix + '-' + name;
	      }
	      break;
	    case 'camelCase':
	      if (prefix) {
	        name = prefix + capitalizeArray(names);
	      } else {
	        name = names[0] + capitalizeArray(names.slice(1));
	      }
	      break;
	    case 'TitleCase':
	    default:
	      name = capitalizeArray(names);
	      if (prefix) {
	        name = prefix + name;
	      }
	      break;
	  }
	  return name;
	}
	
	function capitalizeArray(arr) {
	  return arr.map(function (str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  }).join('');
	}
	
	exports['default'] = VueStrap;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var counter = 1;
	var notNumReg = /[^0-9]/g;
	
	exports['default'] = {
	  name: 'Pager',
	  props: {
	    id: {
	      type: String,
	      'default': 'Pager-' + counter++
	    },
	    total: {
	      type: Number,
	      'default': 0
	    },
	    limit: {
	      type: Number,
	      'default': 5
	    },
	    padding: {
	      type: Number,
	      'default': 2
	    },
	    sizeLimit: {
	      type: Number,
	      'default': 9
	    },
	    prevText: {
	      type: String,
	      'default': '前一页'
	    },
	    nextText: {
	      type: String,
	      'default': '后一页'
	    }
	  },
	  data: function data() {
	    return {
	      current: 1,
	      begin: 1,
	      end: 1
	    };
	  },
	
	  computed: {
	    size: function size() {
	      return Math.ceil(this.total / this.limit);
	    },
	    validJump: function validJump() {
	      var jump = this.jump;
	      return typeof jump === 'number' && jump > 0 && jump <= this.size && jump !== this.current;
	    }
	  },
	  watch: {
	    jump: function jump(newValue, oldValue) {
	      if (typeof newValue === 'string') {
	        newValue = newValue.replace(notNumReg, '');
	        if (newValue !== '') {
	          newValue = parseInt(newValue);
	        }
	        this.jump = newValue;
	      }
	    },
	    total: function total() {
	      this.calcSize();
	    },
	    limit: function limit() {
	      this.calcSize();
	    },
	    current: function current() {
	      this.calcSize();
	    }
	  },
	  methods: {
	    calcSize: function calcSize() {
	      if (this.current > this.size) {
	        this.current = 1;
	      }
	      this.begin = this.current - this.padding;
	      this.end = this.current + this.padding;
	      if (this.begin < 2) {
	        this.begin = 2;
	      }
	      if (this.end > this.size - 1) {
	        this.end = this.size - 1;
	      }
	      if (this.current - this.begin <= 1) {
	        this.end = this.begin + this.padding * 2;
	      }
	      if (this.end - this.current <= 1) {
	        this.begin = this.end - this.padding * 2;
	      }
	    },
	    jump: function jump() {
	      var jump = this.jump;
	      if (typeof jump === 'number') {
	        this.nav(jump);
	      }
	      this.jump = '';
	      this.$refs.jump.focus();
	    },
	    nav: function nav(page) {
	      if (page < 1 || page > this.total || page === this.current) {
	        return;
	      }
	      this.current = page;
	      this.$emit('nav', {
	        total: this.total,
	        current: this.current,
	        limit: this.limit,
	        offset: this.limit * (this.current - 1)
	      });
	    }
	  },
	  created: function created() {
	    this.calcSize();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      value: (size > 1),
	      expression: "size>1"
	    }],
	    staticClass: "pager"
	  }, [_h('div', {
	    staticClass: "wrap clearfix",
	    attrs: {
	      "style": "display:inline-block;"
	    }
	  }, [_h('ul', {
	    staticClass: "pagination m-y-0"
	  }, [_h('li', {
	    staticClass: "page-item",
	    class: {
	      disabled: current === 1
	    }
	  }, [(current !== 1) ? _h('a', {
	    staticClass: "page-link",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": function($event) {
	        nav(current - 1)
	      }
	    }
	  }, [_s(prevText)]) : _h('span', {
	    staticClass: "page-link"
	  }, [_s(prevText)]), " "]), " ", " ", (size > sizeLimit) ? [_h('li', {
	    staticClass: "page-item",
	    class: {
	      active: current === 1
	    }
	  }, [_h('a', {
	    staticClass: "page-link",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": function($event) {
	        nav(1)
	      }
	    }
	  }, ["1"])]), " ", (begin > 2) ? _h('li', {
	    staticClass: "page-item disabled"
	  }, [_m(0)]) : _e(), " ", ((end - begin + 1)) && _l(((end - begin + 1)), function(i) {
	    return _h('li', {
	      staticClass: "page-item",
	      class: {
	        active: current === (i - 1 + begin)
	      }
	    }, [_h('a', {
	      staticClass: "page-link",
	      attrs: {
	        "href": "javascript:void(0)"
	      },
	      on: {
	        "click": function($event) {
	          nav(i - 1 + begin)
	        }
	      }
	    }, [_s(i - 1 + begin)])])
	  }), " ", (end < size - 1) ? _h('li', {
	    staticClass: "page-item disabled"
	  }, [_m(1)]) : _e(), " ", _h('li', {
	    staticClass: "page-item",
	    class: {
	      active: current === size
	    }
	  }, [_h('a', {
	    staticClass: "page-link",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": function($event) {
	        nav(size)
	      }
	    }
	  }, [_s(size)])])] : [(size) && _l((size), function(i) {
	    return _h('li', {
	      staticClass: "page-item",
	      class: {
	        active: current === i
	      }
	    }, [_h('a', {
	      staticClass: "page-link",
	      attrs: {
	        "href": "javascript:void(0)"
	      },
	      on: {
	        "click": function($event) {
	          nav(i)
	        }
	      }
	    }, [_s(i)])])
	  })], " ", " ", " ", _h('li', {
	    staticClass: "page-item",
	    class: {
	      disabled: current === size
	    }
	  }, [(current !== size) ? _h('a', {
	    staticClass: "page-link",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": function($event) {
	        nav(current + 1)
	      }
	    }
	  }, [_s(nextText)]) : _h('span', {
	    staticClass: "page-link"
	  }, [_s(nextText)]), " "])])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', {
	    staticClass: "page-link"
	  }, ["..."])
	}},function (){with(this) {
	  return _h('span', {
	    staticClass: "page-link"
	  }, ["..."])
	}}]}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  props: {
	    value: null,
	    options: {
	      type: Array,
	      required: true
	    },
	    valuePath: {
	      type: String,
	      'default': 'value'
	    },
	    textPath: {
	      type: String,
	      'default': 'text'
	    }
	  },
	  data: function data() {
	    return {
	      selected: null
	    };
	  },
	
	  watch: {
	    value: function value() {},
	    selected: function selected() {
	      this.$emit('input', this.selected);
	    }
	  },
	  created: function created() {
	    var option = this.options.find(function (option) {
	      return option.selected;
	    }) || this.options[0];
	    this.selected = option[this.valuePath];
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('select', {
	    directives: [{
	      name: "model",
	      value: (selected),
	      expression: "selected"
	    }],
	    staticClass: "custom-select",
	    on: {
	      "change": function($event) {
	        selected = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          return "_value" in o ? o._value : o.value
	        })[0]
	      }
	    }
	  }, [(options) && _l((options), function(option) {
	    return _h('option', {
	      domProps: {
	        "value": option[valuePath]
	      }
	    }, ["\n    " + _s(option[textPath]) + "\n  "])
	  })])
	}},staticRenderFns: []}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-strap.js.map