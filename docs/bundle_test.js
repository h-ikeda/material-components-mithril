/******/ (function(modules) { // webpackBootstrap
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Mathsqrt = Math.sqrt,
    _Mathpow = Math.pow,
    _Mathmax = Math.max,
    _Mathmin = Math.min,
    _Mathabs = Math.abs,
    _Mathround = Math.round;(function (n, a) {
  'object' == ( false ? 'undefined' : _typeof(exports)) && 'object' == ( false ? 'undefined' : _typeof(module)) ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 'object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports.materialComponentsMithril = a() : n.materialComponentsMithril = a();
})(undefined, function () {
  return function (t) {
    function n(d) {
      if (a[d]) return a[d].exports;var r = a[d] = { i: d, l: !1, exports: {} };return t[d].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }var a = {};return n.m = t, n.c = a, n.i = function (d) {
      return d;
    }, n.d = function (d, r, l) {
      n.o(d, r) || Object.defineProperty(d, r, { configurable: !1, enumerable: !0, get: l });
    }, n.n = function (d) {
      var r = d && d.__esModule ? function () {
        return d['default'];
      } : function () {
        return d;
      };return n.d(r, 'a', r), r;
    }, n.o = function (d, r) {
      return Object.prototype.hasOwnProperty.call(d, r);
    }, n.p = '', n(n.s = 16);
  }([function (t, n, a) {
    'use strict';
    function r(f, _) {
      return Object.keys(f).forEach(function (h) {
        _(h, f) || delete f[h];
      }), f;
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = a(5),
        u = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(l);n.default = function (f, _, h, b) {
      return (0, u.default)(f.attrs.tagName || _, r(r(Object.assign({}, f.attrs, { class: (f.attrs.class || '').split(' ').filter(function (C) {
          return C;
        }).concat(Object.keys(Object.assign(h, f.attrs.classNames || {})).filter(b || function () {
          return 1;
        })).filter(function (C, A, T) {
          return T.indexOf(C) === A;
        }).map(function (C) {
          return (f.attrs.classNames ? f.attrs.classNames[C] : '') || h[C];
        }).join(' ') }), function (C, A) {
        return (A.classNames ? !(A.classNames[C] || h[C]) : !h[C]) && 'tagName' !== C;
      }), function (C) {
        return 'classNames' !== C;
      }), f.children);
    };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(r),
        u = a(21);n.default = { oncreate: function oncreate(_) {
        u.MDCRipple.attachTo(_.dom);
      }, view: function view(_) {
        return (0, l.default)(_, 'button', { mdcButton: 'mdc-button', mdcButtonAccent: 'mdc-button--accent', mdcButtonPrimary: 'mdc-button--primary', mdcButtonRaised: 'mdc-button--raised', mdcButtonDense: 'mdc-button--dense', mdcButtonCompact: 'mdc-button--compact', mdcButtonThemeDark: 'mdc-button--theme-dark' }, function (h) {
          return 'mdcButton' === h || _.attrs[h];
        });
      } };
  }, function (t, n) {
    'use strict';
    function d(u, f) {
      if (!(u instanceof f)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = function () {
      function u(f, _) {
        for (var b, h = 0; h < _.length; h++) {
          b = _[h], b.enumerable = b.enumerable || !1, b.configurable = !0, 'value' in b && (b.writable = !0), Object.defineProperty(f, b.key, b);
        }
      }return function (f, _, h) {
        return _ && u(f.prototype, _), h && u(f, h), f;
      };
    }(),
        l = function () {
      function u() {
        var f = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};d(this, u), this.adapter_ = f;
      }return r(u, null, [{ key: 'cssClasses', get: function get() {
          return {};
        } }, { key: 'strings', get: function get() {
          return {};
        } }, { key: 'numbers', get: function get() {
          return {};
        } }, { key: 'defaultAdapter', get: function get() {
          return {};
        } }]), r(u, [{ key: 'init', value: function value() {} }, { key: 'destroy', value: function value() {} }]), u;
    }();n.default = l;
  }, function (t, n, a) {
    'use strict';
    function d(u) {
      return u && u.__esModule ? u : { default: u };
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = a(2);Object.defineProperty(n, 'MDCFoundation', { enumerable: !0, get: function get() {
        return d(r).default;
      } });var l = a(18);Object.defineProperty(n, 'MDCComponent', { enumerable: !0, get: function get() {
        return d(l).default;
      } });
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 }), n.supportsCssVariables = function (f) {
      var _ = f.CSS && 'function' == typeof f.CSS.supports;if (_) {
        var h = f.CSS.supports('--css-vars', 'yes'),
            b = f.CSS.supports('(--css-vars: yes)') && f.CSS.supports('color', '#00000000');return h || b;
      }
    }, n.getMatchesProperty = function (f) {
      return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (_) {
        return _ in f;
      }).pop();
    }, n.animateWithClass = function (f, _, h) {
      var b = !1,
          C = function A() {
        b || (b = !0, f.removeClass(_), f.deregisterInteractionHandler(h, A));
      };return f.registerInteractionHandler(h, C), f.addClass(_), C;
    }, n.getNormalizedEventCoords = function (f, _, h) {
      var S,
          E,
          b = _.x,
          C = _.y,
          A = b + h.left,
          T = C + h.top;return 'touchend' === f.type ? (S = f.changedTouches[0].pageX - A, E = f.changedTouches[0].pageY - T) : (S = f.pageX - A, E = f.pageY - T), { x: S, y: E };
    };
  }, function (t, n, a) {
    'use strict';
    (function (d, r) {
      var l = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (u) {
        return typeof u === 'undefined' ? 'undefined' : _typeof(u);
      } : function (u) {
        return u && 'function' == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? 'symbol' : typeof u === 'undefined' ? 'undefined' : _typeof(u);
      };(function () {
        'use strict';
        function u(L, G, H, $, Y, q) {
          return { tag: L, key: G, attrs: H, children: $, text: Y, dom: q, domSize: void 0, state: void 0, _state: void 0, events: void 0, instance: void 0, skip: !1 };
        }function f(L) {
          for (var G, H = 'div', $ = [], Y = {}; G = C.exec(L);) {
            var q = G[1],
                W = G[2];if ('' === q && '' !== W) H = W;else if ('#' === q) Y.id = W;else if ('.' === q) $.push(W);else if ('[' === G[3][0]) {
              var X = G[6];X && (X = X.replace(/\\(["'])/g, '$1').replace(/\\\\/g, '\\')), 'class' === G[4] ? $.push(X) : Y[G[4]] = X || !0;
            }
          }return 0 < $.length && (Y.className = $.join(' ')), A[L] = { tag: H, attrs: Y };
        }function _(L, G, H) {
          var Y,
              q,
              $ = !1,
              W = G.className || G.class;for (var X in L.attrs) {
            T.call(L.attrs, X) && (G[X] = L.attrs[X]);
          }for (var X in null != W && (null != G.class && (G.class = void 0, G.className = W), null != L.attrs.className && (G.className = L.attrs.className + ' ' + W)), G) {
            if (T.call(G, X) && 'key' != X) {
              $ = !0;break;
            }
          }return Array.isArray(H) && 1 === H.length && null != H[0] && '#' === H[0].tag ? q = H[0].children : Y = H, u(L.tag, G.key, $ ? G : void 0, Y, q);
        }function h(L) {
          var $,
              G = arguments[1],
              H = 2;if (null == L || 'string' != typeof L && 'function' != typeof L && 'function' != typeof L.view) throw Error('The selector must be either a string or a component.');if ('string' == typeof L) var Y = A[L] || f(L);if (G ? ('object' !== ('undefined' == typeof G ? 'undefined' : l(G)) || null != G.tag || Array.isArray(G)) && (G = {}, H = 1) : G = {}, arguments.length === H + 1) $ = arguments[H], Array.isArray($) || ($ = [$]);else for ($ = []; H < arguments.length;) {
            $.push(arguments[H++]);
          }var q = u.normalizeChildren($);return 'string' == typeof L ? _(Y, G, q) : u(L, G.key, G, q);
        }function b(L) {
          var G = 16,
              H = 0,
              $ = null,
              Y = 'function' == typeof requestAnimationFrame ? requestAnimationFrame : setTimeout;return function () {
            var q = Date.now();0 == H || q - H >= G ? (H = q, L()) : null == $ && ($ = Y(function () {
              $ = null, L(), H = Date.now();
            }, G - (q - H)));
          };
        }u.normalize = function (L) {
          return Array.isArray(L) ? u('[', void 0, void 0, u.normalizeChildren(L), void 0, void 0) : null != L && 'object' !== ('undefined' == typeof L ? 'undefined' : l(L)) ? u('#', void 0, void 0, !1 === L ? '' : L, void 0, void 0) : L;
        }, u.normalizeChildren = function (G) {
          for (var H = 0; H < G.length; H++) {
            G[H] = u.normalize(G[H]);
          }return G;
        };var C = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
            A = {},
            T = {}.hasOwnProperty;h.trust = function (L) {
          return null == L && (L = ''), u('<', void 0, void 0, L, void 0, void 0);
        }, h.fragment = function (L, G) {
          return u('[', L.key, L, u.normalizeChildren(G), void 0, void 0);
        };var S = h,
            E = function L(G) {
          function H(J, ee) {
            return function te(ne) {
              var ae;try {
                if (ee && null != ne && ('object' === ('undefined' == typeof ne ? 'undefined' : l(ne)) || 'function' == typeof ne) && 'function' == typeof (ae = ne.then)) {
                  if (ne === Y) throw new TypeError('Promise can\'t be resolved w/ itself');$(ae.bind(ne));
                } else Z(function () {
                  ee || 0 !== J.length || console.error('Possible unhandled promise rejection:', ne);for (var ie = 0; ie < J.length; ie++) {
                    J[ie](ne);
                  }q.length = 0, W.length = 0, Q.state = ee, Q.retry = function () {
                    te(ne);
                  };
                });
              } catch (ie) {
                K(ie);
              }
            };
          }function $(J) {
            function ee(ae) {
              return function (ie) {
                0 < te++ || ae(ie);
              };
            }var te = 0,
                ne = ee(K);try {
              J(ee(X), ne);
            } catch (ae) {
              ne(ae);
            }
          }if (!(this instanceof L)) throw new Error('Promise must be called with `new`');if ('function' != typeof G) throw new TypeError('executor must be a function');var Y = this,
              q = [],
              W = [],
              X = H(q, !0),
              K = H(W, !1),
              Q = Y._instance = { resolvers: q, rejectors: W },
              Z = 'function' == typeof d ? d : setTimeout;$(G);
        };if (E.prototype.then = function (L, G) {
          function H(K, Q, Z, J) {
            Q.push(function (ee) {
              if ('function' != typeof K) Z(ee);else try {
                q(K(ee));
              } catch (te) {
                W && W(te);
              }
            }), 'function' == typeof Y.retry && J === Y.state && Y.retry();
          }var q,
              W,
              $ = this,
              Y = $._instance,
              X = new E(function (K, Q) {
            q = K, W = Q;
          });return H(L, Y.resolvers, q, !0), H(G, Y.rejectors, W, !1), X;
        }, E.prototype.catch = function (L) {
          return this.then(null, L);
        }, E.resolve = function (L) {
          return L instanceof E ? L : new E(function (G) {
            G(L);
          });
        }, E.reject = function (L) {
          return new E(function (G, H) {
            H(L);
          });
        }, E.all = function (L) {
          return new E(function (G, H) {
            var $ = L.length,
                Y = 0,
                q = [];if (0 === L.length) G([]);else for (var W = 0; W < L.length; W++) {
              (function (X) {
                function K(Q) {
                  Y++, q[X] = Q, Y === $ && G(q);
                }null != L[X] && ('object' === l(L[X]) || 'function' == typeof L[X]) && 'function' == typeof L[X].then ? L[X].then(K, H) : K(L[X]);
              })(W);
            }
          });
        }, E.race = function (L) {
          return new E(function (G, H) {
            for (var $ = 0; $ < L.length; $++) {
              L[$].then(G, H);
            }
          });
        }, 'undefined' != typeof window) {
          'undefined' == typeof window.Promise && (window.Promise = E);var E = window.Promise;
        } else if ('undefined' != typeof r) {
          'undefined' == typeof r.Promise && (r.Promise = E);var E = r.Promise;
        } else ;var w = function w(G) {
          function H(q, W) {
            if (Array.isArray(W)) for (var X = 0; X < W.length; X++) {
              H(q + '[' + X + ']', W[X]);
            } else if ('[object Object]' === Object.prototype.toString.call(W)) for (var X in W) {
              H(q + '[' + X + ']', W[X]);
            } else $.push(encodeURIComponent(q) + (null != W && '' !== W ? '=' + encodeURIComponent(W) : ''));
          }if ('[object Object]' !== Object.prototype.toString.call(G)) return '';var $ = [];for (var Y in G) {
            H(Y, G[Y]);
          }return $.join('&');
        },
            N = /^file:\/\//i,
            I = function (G, H) {
          function Y() {
            function ae() {
              0 == --ie && 'function' == typeof ne && ne();
            }var ie = 0;return function de(re) {
              var oe = re.then;return re.then = function () {
                ie++;var se = oe.apply(re, arguments);return se.then(ae, function (le) {
                  if (ae(), 0 == ie) throw le;
                }), de(se);
              }, re;
            };
          }function q(ae, ie) {
            if ('string' == typeof ae) {
              var de = ae;ae = ie || {}, null == ae.url && (ae.url = de);
            }return ae;
          }function K(ae, ie) {
            if (null == ie) return ae;for (var oe, de = ae.match(/:[^\/]+/gi) || [], re = 0; re < de.length; re++) {
              oe = de[re].slice(1), null != ie[oe] && (ae = ae.replace(de[re], ie[oe]));
            }return ae;
          }function Q(ae, ie) {
            var de = w(ie);if ('' !== de) {
              var re = 0 > ae.indexOf('?') ? '?' : '&';ae += re + de;
            }return ae;
          }function Z(ae) {
            try {
              return '' === ae ? null : JSON.parse(ae);
            } catch (ie) {
              throw new Error(ae);
            }
          }function J(ae) {
            return ae.responseText;
          }function ee(ae, ie) {
            if ('function' == typeof ae) if (Array.isArray(ie)) for (var de = 0; de < ie.length; de++) {
              ie[de] = new ae(ie[de]);
            } else return new ae(ie);return ie;
          }var ne,
              te = 0;return { request: function request(ae, ie) {
              var de = Y();ae = q(ae, ie);var re = new H(function (oe, se) {
                null == ae.method && (ae.method = 'GET'), ae.method = ae.method.toUpperCase();var le = 'GET' === ae.method || 'TRACE' === ae.method ? !1 : 'boolean' != typeof ae.useBody || ae.useBody;'function' != typeof ae.serialize && (ae.serialize = 'undefined' != typeof FormData && ae.data instanceof FormData ? function (pe) {
                  return pe;
                } : JSON.stringify), 'function' != typeof ae.deserialize && (ae.deserialize = Z), 'function' != typeof ae.extract && (ae.extract = J), ae.url = K(ae.url, ae.data), le ? ae.data = ae.serialize(ae.data) : ae.url = Q(ae.url, ae.data);var ue = new G.XMLHttpRequest(),
                    ce = !1,
                    fe = ue.abort;for (var me in ue.abort = function () {
                  ce = !0, fe.call(ue);
                }, ue.open(ae.method, ae.url, 'boolean' != typeof ae.async || ae.async, 'string' == typeof ae.user ? ae.user : void 0, 'string' == typeof ae.password ? ae.password : void 0), ae.serialize === JSON.stringify && le && ue.setRequestHeader('Content-Type', 'application/json; charset=utf-8'), ae.deserialize === Z && ue.setRequestHeader('Accept', 'application/json, text/*'), ae.withCredentials && (ue.withCredentials = ae.withCredentials), ae.headers) {
                  ({}).hasOwnProperty.call(ae.headers, me) && ue.setRequestHeader(me, ae.headers[me]);
                }'function' == typeof ae.config && (ue = ae.config(ue, ae) || ue), ue.onreadystatechange = function () {
                  if (!ce && 4 === ue.readyState) try {
                    var pe = ae.extract === J ? ae.deserialize(ae.extract(ue, ae)) : ae.extract(ue, ae);if (200 <= ue.status && 300 > ue.status || 304 === ue.status || N.test(ae.url)) oe(ee(ae.type, pe));else {
                      var _e = new Error(ue.responseText);for (var he in pe) {
                        _e[he] = pe[he];
                      }se(_e);
                    }
                  } catch (ge) {
                    se(ge);
                  }
                }, le && null != ae.data ? ue.send(ae.data) : ue.send();
              });return !0 === ae.background ? re : de(re);
            }, jsonp: function jsonp(ae, ie) {
              var de = Y();ae = q(ae, ie);var re = new H(function (oe, se) {
                var le = ae.callbackName || '_mithril_' + _Mathround(1e16 * Math.random()) + '_' + te++,
                    ue = G.document.createElement('script');G[le] = function (ce) {
                  ue.parentNode.removeChild(ue), oe(ee(ae.type, ce)), delete G[le];
                }, ue.onerror = function () {
                  ue.parentNode.removeChild(ue), se(new Error('JSONP request failed')), delete G[le];
                }, null == ae.data && (ae.data = {}), ae.url = K(ae.url, ae.data), ae.data[ae.callbackKey || 'callback'] = le, ue.src = Q(ae.url, ae.data), G.document.documentElement.appendChild(ue);
              });return !0 === ae.background ? re : de(re);
            }, setCompletionCallback: function setCompletionCallback(ae) {
              ne = ae;
            } };
        }(window, E),
            O = function O(G) {
          function $(Re, Me, Fe, Ue, Ve, Be, ze) {
            for (var Ge, Le = Fe; Le < Ue; Le++) {
              Ge = Me[Le], null != Ge && Y(Re, Ge, Ve, ze, Be);
            }
          }function Y(Re, Me, Fe, Ue, Ve) {
            var Be = Me.tag;return 'string' == typeof Be ? (Me.state = {}, null != Me.attrs && Ee(Me.attrs, Me, Fe), '#' === Be ? q(Re, Me, Ve) : '<' === Be ? W(Re, Me, Ve) : '[' === Be ? X(Re, Me, Fe, Ue, Ve) : K(Re, Me, Fe, Ue, Ve)) : Z(Re, Me, Fe, Ue, Ve);
          }function q(Re, Me, Fe) {
            return Me.dom = Ie.createTextNode(Me.children), ue(Re, Me.dom, Fe), Me.dom;
          }function W(Re, Me, Fe) {
            var Ue = Me.children.match(/^\s*?<(\w+)/im) || [],
                Ve = { caption: 'table', thead: 'table', tbody: 'table', tfoot: 'table', tr: 'tbody', th: 'tr', td: 'tr', colgroup: 'table', col: 'colgroup' }[Ue[1]] || 'div',
                Be = Ie.createElement(Ve);Be.innerHTML = Me.children, Me.dom = Be.firstChild, Me.domSize = Be.childNodes.length;for (var Le, ze = Ie.createDocumentFragment(); Le = Be.firstChild;) {
              ze.appendChild(Le);
            }return ue(Re, ze, Fe), ze;
          }function X(Re, Me, Fe, Ue, Ve) {
            var Be = Ie.createDocumentFragment();if (null != Me.children) {
              var ze = Me.children;$(Be, ze, 0, ze.length, Fe, null, Ue);
            }return Me.dom = Be.firstChild, Me.domSize = Be.childNodes.length, ue(Re, Be, Ve), Be;
          }function K(Re, Me, Fe, Ue, Ve) {
            var Be = Me.tag;switch (Me.tag) {case 'svg':
                Ue = 'http://www.w3.org/2000/svg';break;case 'math':
                Ue = 'http://www.w3.org/1998/Math/MathML';}var ze = Me.attrs,
                Le = ze && ze.is,
                Ge = Ue ? Le ? Ie.createElementNS(Ue, Be, { is: Le }) : Ie.createElementNS(Ue, Be) : Le ? Ie.createElement(Be, { is: Le }) : Ie.createElement(Be);if (Me.dom = Ge, null != ze && he(Me, ze, Ue), ue(Re, Ge, Ve), null != Me.attrs && null != Me.attrs.contenteditable) ce(Me);else if (null != Me.text && ('' === Me.text ? Me.children = [u('#', void 0, void 0, Me.text, void 0, void 0)] : Ge.textContent = Me.text), null != Me.children) {
              var He = Me.children;$(Ge, He, 0, He.length, Fe, null, Ue), ye(Me);
            }return Ge;
          }function Q(Re, Me) {
            var Fe;if ('function' == typeof Re.tag.view) {
              if (Re.state = Object.create(Re.tag), Fe = Re.state.view, null != Fe.$$reentrantLock$$) return Oe;Fe.$$reentrantLock$$ = !0;
            } else {
              if (Re.state = void 0, Fe = Re.tag, null != Fe.$$reentrantLock$$) return Oe;Fe.$$reentrantLock$$ = !0, Re.state = null != Re.tag.prototype && 'function' == typeof Re.tag.prototype.view ? new Re.tag(Re) : Re.tag(Re);
            }if (Re._state = Re.state, null != Re.attrs && Ee(Re.attrs, Re, Me), Ee(Re._state, Re, Me), Re.instance = u.normalize(Re._state.view.call(Re.state, Re)), Re.instance === Re) throw Error('A view cannot return the vnode it received as argument');Fe.$$reentrantLock$$ = null;
          }function Z(Re, Me, Fe, Ue, Ve) {
            if (Q(Me, Fe), null != Me.instance) {
              var Be = Y(Re, Me.instance, Fe, Ue, Ve);return Me.dom = Me.instance.dom, Me.domSize = null == Me.dom ? 0 : Me.instance.domSize, ue(Re, Be, Ve), Be;
            }return Me.domSize = 0, Oe;
          }function J(Re, Me, Fe, Ue, Ve, Be, ze) {
            if (Me !== Fe && (null != Me || null != Fe)) if (null == Me) $(Re, Fe, 0, Fe.length, Ve, Be, void 0);else if (null == Fe) fe(Me, 0, Me.length, Fe);else {
              if (Me.length === Fe.length) {
                for (var Le = !1, Ge = 0; Ge < Fe.length; Ge++) {
                  if (null != Fe[Ge] && null != Me[Ge]) {
                    Le = null == Fe[Ge].key && null == Me[Ge].key;break;
                  }
                }if (Le) {
                  for (var Ge = 0; Ge < Me.length; Ge++) {
                    if (Me[Ge] === Fe[Ge]) continue;else null == Me[Ge] && null != Fe[Ge] ? Y(Re, Fe[Ge], Ve, ze, le(Me, Ge + 1, Be)) : null == Fe[Ge] ? fe(Me, Ge, Ge + 1, Fe) : ee(Re, Me[Ge], Fe[Ge], Ve, le(Me, Ge + 1, Be), Ue, ze);
                  }return;
                }
              }if (Ue = Ue || re(Me, Fe), Ue) {
                var He = Me.pool;Me = Me.concat(Me.pool);
              }for (var We, je = 0, $e = 0, Ye = Me.length - 1, qe = Fe.length - 1; Ye >= je && qe >= $e;) {
                var Xe = Me[je],
                    Ke = Fe[$e];if (Xe === Ke && !Ue) je++, $e++;else if (null == Xe) je++;else if (null == Ke) $e++;else if (Xe.key === Ke.key) {
                  var Qe = null != He && je >= Me.length - He.length || null == He && Ue;je++, $e++, ee(Re, Xe, Ke, Ve, le(Me, je, Be), Qe, ze), Ue && Xe.tag === Ke.tag && ue(Re, se(Xe), Be);
                } else {
                  var Xe = Me[Ye];if (Xe === Ke && !Ue) Ye--, $e++;else if (null == Xe) Ye--;else if (null == Ke) $e++;else if (Xe.key === Ke.key) {
                    var Qe = null != He && Ye >= Me.length - He.length || null == He && Ue;ee(Re, Xe, Ke, Ve, le(Me, Ye + 1, Be), Qe, ze), (Ue || $e < qe) && ue(Re, se(Xe), le(Me, je, Be)), Ye--, $e++;
                  } else break;
                }
              }for (; Ye >= je && qe >= $e;) {
                var Xe = Me[Ye],
                    Ke = Fe[qe];if (Xe === Ke && !Ue) Ye--, qe--;else if (null == Xe) Ye--;else if (null == Ke) qe--;else if (Xe.key === Ke.key) {
                  var Qe = null != He && Ye >= Me.length - He.length || null == He && Ue;ee(Re, Xe, Ke, Ve, le(Me, Ye + 1, Be), Qe, ze), Ue && Xe.tag === Ke.tag && ue(Re, se(Xe), Be), null != Xe.dom && (Be = Xe.dom), Ye--, qe--;
                } else {
                  if (We || (We = oe(Me, Ye)), null != Ke) {
                    var Ze = We[Ke.key];if (null != Ze) {
                      var Je = Me[Ze],
                          Qe = null != He && Ze >= Me.length - He.length || null == He && Ue;ee(Re, Je, Ke, Ve, le(Me, Ye + 1, Be), Ue, ze), ue(Re, se(Je), Be), Me[Ze].skip = !0, null != Je.dom && (Be = Je.dom);
                    } else {
                      var et = Y(Re, Ke, Ve, void 0, Be);Be = et;
                    }
                  }qe--;
                }if (qe < $e) break;
              }$(Re, Fe, $e, qe + 1, Ve, Be, ze), fe(Me, je, Ye + 1, Fe);
            }
          }function ee(Re, Me, Fe, Ue, Ve, Be, ze) {
            var Le = Me.tag,
                Ge = Fe.tag;if (Le === Ge) {
              if (Fe.state = Me.state, Fe._state = Me._state, Fe.events = Me.events, !Be && Ne(Fe, Me)) return;'string' == typeof Le ? (null != Fe.attrs && (Be ? (Fe.state = {}, Ee(Fe.attrs, Fe, Ue)) : we(Fe.attrs, Fe, Ue)), '#' === Le ? te(Me, Fe) : '<' === Le ? ne(Re, Me, Fe, Ve) : '[' === Le ? ae(Re, Me, Fe, Be, Ue, Ve, ze) : ie(Me, Fe, Be, Ue, ze)) : de(Re, Me, Fe, Ue, Ve, Be, ze);
            } else me(Me, null), Y(Re, Fe, Ue, ze, Ve);
          }function te(Re, Me) {
            Re.children.toString() !== Me.children.toString() && (Re.dom.nodeValue = Me.children), Me.dom = Re.dom;
          }function ne(Re, Me, Fe, Ue) {
            Me.children === Fe.children ? (Fe.dom = Me.dom, Fe.domSize = Me.domSize) : (se(Me), W(Re, Fe, Ue));
          }function ae(Re, Me, Fe, Ue, Ve, Be, ze) {
            J(Re, Me.children, Fe.children, Ue, Ve, Be, ze);var Le = 0,
                Ge = Fe.children;if (Fe.dom = null, null != Ge) {
              for (var je, He = 0; He < Ge.length; He++) {
                je = Ge[He], null != je && null != je.dom && (null == Fe.dom && (Fe.dom = je.dom), Le += je.domSize || 1);
              }1 !== Le && (Fe.domSize = Le);
            }
          }function ie(Re, Me, Fe, Ue, Ve) {
            var Be = Me.dom = Re.dom;switch (Me.tag) {case 'svg':
                Ve = 'http://www.w3.org/2000/svg';break;case 'math':
                Ve = 'http://www.w3.org/1998/Math/MathML';}'textarea' === Me.tag && (null == Me.attrs && (Me.attrs = {}), null != Me.text && (Me.attrs.value = Me.text, Me.text = void 0)), ve(Me, Re.attrs, Me.attrs, Ve), null != Me.attrs && null != Me.attrs.contenteditable ? ce(Me) : null != Re.text && null != Me.text && '' !== Me.text ? Re.text.toString() !== Me.text.toString() && (Re.dom.firstChild.nodeValue = Me.text) : (null != Re.text && (Re.children = [u('#', void 0, void 0, Re.text, void 0, Re.dom.firstChild)]), null != Me.text && (Me.children = [u('#', void 0, void 0, Me.text, void 0, void 0)]), J(Be, Re.children, Me.children, Fe, Ue, null, Ve));
          }function de(Re, Me, Fe, Ue, Ve, Be, ze) {
            if (Be) Q(Fe, Ue);else {
              if (Fe.instance = u.normalize(Fe._state.view.call(Fe.state, Fe)), Fe.instance === Fe) throw Error('A view cannot return the vnode it received as argument');null != Fe.attrs && we(Fe.attrs, Fe, Ue), we(Fe._state, Fe, Ue);
            }null == Fe.instance ? null == Me.instance ? (Fe.dom = Me.dom, Fe.domSize = Me.domSize) : (me(Me.instance, null), Fe.dom = void 0, Fe.domSize = 0) : (null == Me.instance ? Y(Re, Fe.instance, Ue, ze, Ve) : ee(Re, Me.instance, Fe.instance, Ue, Ve, Be, ze), Fe.dom = Fe.instance.dom, Fe.domSize = Fe.instance.domSize);
          }function re(Re, Me) {
            if (null != Re.pool && _Mathabs(Re.pool.length - Me.length) <= _Mathabs(Re.length - Me.length)) {
              var Fe = Re[0] && Re[0].children && Re[0].children.length || 0,
                  Ue = Re.pool[0] && Re.pool[0].children && Re.pool[0].children.length || 0,
                  Ve = Me[0] && Me[0].children && Me[0].children.length || 0;if (_Mathabs(Ue - Ve) <= _Mathabs(Fe - Ve)) return !0;
            }return !1;
          }function oe(Re, Me) {
            for (var Ve, Fe = {}, Ue = 0, Ue = 0; Ue < Me; Ue++) {
              if (Ve = Re[Ue], null != Ve) {
                var Be = Ve.key;null != Be && (Fe[Be] = Ue);
              }
            }return Fe;
          }function se(Re) {
            var Me = Re.domSize;if (null != Me || null == Re.dom) {
              var Fe = Ie.createDocumentFragment();if (0 < Me) {
                for (var Ue = Re.dom; --Me;) {
                  Fe.appendChild(Ue.nextSibling);
                }Fe.insertBefore(Ue, Fe.firstChild);
              }return Fe;
            }return Re.dom;
          }function le(Re, Me, Fe) {
            for (; Me < Re.length; Me++) {
              if (null != Re[Me] && null != Re[Me].dom) return Re[Me].dom;
            }return Fe;
          }function ue(Re, Me, Fe) {
            Fe && Fe.parentNode ? Re.insertBefore(Me, Fe) : Re.appendChild(Me);
          }function ce(Re) {
            var Me = Re.children;if (null != Me && 1 === Me.length && '<' === Me[0].tag) {
              var Fe = Me[0].children;Re.dom.innerHTML !== Fe && (Re.dom.innerHTML = Fe);
            } else if (null != Re.text || null != Me && 0 !== Me.length) throw new Error('Child node of a contenteditable must be trusted');
          }function fe(Re, Me, Fe, Ue) {
            for (var Be, Ve = Me; Ve < Fe; Ve++) {
              Be = Re[Ve], null != Be && (Be.skip ? Be.skip = !1 : me(Be, Ue));
            }
          }function me(Re, Me) {
            function Fe() {
              if (++Ve == Ue && (_e(Re), Re.dom)) {
                var ze = Re.domSize || 1;if (1 < ze) for (var Le = Re.dom; --ze;) {
                  pe(Le.nextSibling);
                }pe(Re.dom), null == Me || null != Re.domSize || Te(Re.attrs) || 'string' != typeof Re.tag || (Me.pool ? Me.pool.push(Re) : Me.pool = [Re]);
              }
            }var Ue = 1,
                Ve = 0;if (Re.attrs && 'function' == typeof Re.attrs.onbeforeremove) {
              var Be = Re.attrs.onbeforeremove.call(Re.state, Re);null != Be && 'function' == typeof Be.then && (Ue++, Be.then(Fe, Fe));
            }if ('string' != typeof Re.tag && 'function' == typeof Re._state.onbeforeremove) {
              var Be = Re._state.onbeforeremove.call(Re.state, Re);null != Be && 'function' == typeof Be.then && (Ue++, Be.then(Fe, Fe));
            }Fe();
          }function pe(Re) {
            var Me = Re.parentNode;null != Me && Me.removeChild(Re);
          }function _e(Re) {
            if (Re.attrs && 'function' == typeof Re.attrs.onremove && Re.attrs.onremove.call(Re.state, Re), 'string' != typeof Re.tag && 'function' == typeof Re._state.onremove && Re._state.onremove.call(Re.state, Re), null != Re.instance) _e(Re.instance);else {
              var Me = Re.children;if (Array.isArray(Me)) for (var Ue, Fe = 0; Fe < Me.length; Fe++) {
                Ue = Me[Fe], null != Ue && _e(Ue);
              }
            }
          }function he(Re, Me, Fe) {
            for (var Ue in Me) {
              ge(Re, Ue, null, Me[Ue], Fe);
            }
          }function ge(Re, Me, Fe, Ue, Ve) {
            var Be = Re.dom;if ('key' !== Me && 'is' !== Me && (Fe !== Ue || be(Re, Me) || 'object' === ('undefined' == typeof Ue ? 'undefined' : l(Ue))) && 'undefined' != typeof Ue && !Ce(Me)) {
              var ze = Me.indexOf(':');if (-1 < ze && 'xlink' === Me.substr(0, ze)) Be.setAttributeNS('http://www.w3.org/1999/xlink', Me.slice(ze + 1), Ue);else if ('o' === Me[0] && 'n' === Me[1] && 'function' == typeof Ue) Se(Re, Me, Ue);else if ('style' === Me) xe(Be, Fe, Ue);else if (Me in Be && !ke(Me) && void 0 === Ve && !Ae(Re)) {
                if ('input' === Re.tag && 'value' === Me && Re.dom.value == Ue && Re.dom === Ie.activeElement) return;if ('select' === Re.tag && 'value' === Me && Re.dom.value == Ue && Re.dom === Ie.activeElement) return;if ('option' === Re.tag && 'value' === Me && Re.dom.value == Ue) return;if ('input' === Re.tag && 'type' === Me) return void Be.setAttribute(Me, Ue);Be[Me] = Ue;
              } else 'boolean' == typeof Ue ? Ue ? Be.setAttribute(Me, '') : Be.removeAttribute(Me) : Be.setAttribute('className' === Me ? 'class' : Me, Ue);
            }
          }function ye(Re) {
            var Me = Re.attrs;'select' === Re.tag && null != Me && ('value' in Me && ge(Re, 'value', null, Me.value, void 0), 'selectedIndex' in Me && ge(Re, 'selectedIndex', null, Me.selectedIndex, void 0));
          }function ve(Re, Me, Fe, Ue) {
            if (null != Fe) for (var Ve in Fe) {
              ge(Re, Ve, Me && Me[Ve], Fe[Ve], Ue);
            }if (null != Me) for (var Ve in Me) {
              null != Fe && Ve in Fe || ('className' == Ve && (Ve = 'class'), 'o' !== Ve[0] || 'n' !== Ve[1] || Ce(Ve) ? 'key' != Ve && Re.dom.removeAttribute(Ve) : Se(Re, Ve, void 0));
            }
          }function be(Re, Me) {
            return 'value' === Me || 'checked' === Me || 'selectedIndex' === Me || 'selected' === Me && Re.dom === Ie.activeElement;
          }function Ce(Re) {
            return 'oninit' === Re || 'oncreate' === Re || 'onupdate' === Re || 'onremove' === Re || 'onbeforeremove' === Re || 'onbeforeupdate' === Re;
          }function ke(Re) {
            return 'href' === Re || 'list' === Re || 'form' === Re || 'width' === Re || 'height' === Re;
          }function Ae(Re) {
            return Re.attrs.is || -1 < Re.tag.indexOf('-');
          }function Te(Re) {
            return null != Re && (Re.oncreate || Re.onupdate || Re.onbeforeremove || Re.onremove);
          }function xe(Re, Me, Fe) {
            if (Me === Fe && (Re.style.cssText = '', Me = null), null == Fe) Re.style.cssText = '';else if ('string' == typeof Fe) Re.style.cssText = Fe;else {
              for (var Ue in 'string' == typeof Me && (Re.style.cssText = ''), Fe) {
                Re.style[Ue] = Fe[Ue];
              }if (null != Me && 'string' != typeof Me) for (var Ue in Me) {
                Ue in Fe || (Re.style[Ue] = '');
              }
            }
          }function Se(Re, Me, Fe) {
            var Ue = Re.dom,
                Ve = 'function' == typeof Pe ? function (ze) {
              var Le = Fe.call(Ue, ze);return Pe.call(Ue, ze), Le;
            } : Fe;if (Me in Ue) Ue[Me] = 'function' == typeof Fe ? Ve : null;else {
              var Be = Me.slice(2);if (void 0 === Re.events && (Re.events = {}), Re.events[Me] === Ve) return;null != Re.events[Me] && Ue.removeEventListener(Be, Re.events[Me], !1), 'function' == typeof Fe && (Re.events[Me] = Ve, Ue.addEventListener(Be, Re.events[Me], !1));
            }
          }function Ee(Re, Me, Fe) {
            'function' == typeof Re.oninit && Re.oninit.call(Me.state, Me), 'function' == typeof Re.oncreate && Fe.push(Re.oncreate.bind(Me.state, Me));
          }function we(Re, Me, Fe) {
            'function' == typeof Re.onupdate && Fe.push(Re.onupdate.bind(Me.state, Me));
          }function Ne(Re, Me) {
            var Fe, Ue;return null != Re.attrs && 'function' == typeof Re.attrs.onbeforeupdate && (Fe = Re.attrs.onbeforeupdate.call(Re.state, Re, Me)), 'string' != typeof Re.tag && 'function' == typeof Re._state.onbeforeupdate && (Ue = Re._state.onbeforeupdate.call(Re.state, Re, Me)), void 0 === Fe && void 0 === Ue || Fe || Ue ? !1 : (Re.dom = Me.dom, Re.domSize = Me.domSize, Re.instance = Me.instance, !0);
          }var Pe,
              Ie = G.document,
              Oe = Ie.createDocumentFragment();return { render: function render(Re, Me) {
              if (!Re) throw new Error('Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.');var Fe = [],
                  Ue = Ie.activeElement;null == Re.vnodes && (Re.textContent = ''), Array.isArray(Me) || (Me = [Me]), J(Re, Re.vnodes, u.normalizeChildren(Me), !1, Fe, null, void 0), Re.vnodes = Me;for (var Ve = 0; Ve < Fe.length; Ve++) {
                Fe[Ve]();
              }Ie.activeElement !== Ue && Ue.focus();
            }, setEventCallback: function setEventCallback(Re) {
              return Pe = Re;
            } };
        },
            R = function (G) {
          function $(X) {
            var K = W.indexOf(X);-1 < K && W.splice(K, 2);
          }function Y() {
            for (var X = 1; X < W.length; X += 2) {
              W[X]();
            }
          }var q = O(G);q.setEventCallback(function (X) {
            !1 !== X.redraw && Y();
          });var W = [];return { subscribe: function subscribe(X, K) {
              $(X), W.push(X, b(K));
            }, unsubscribe: $, redraw: Y, render: q.render };
        }(window);I.setCompletionCallback(R.redraw);S.mount = function (G) {
          return function (H, $) {
            if (null === $) return G.render(H, []), void G.unsubscribe(H);if (null == $.view && 'function' != typeof $) throw new Error('m.mount(element, component) expects a component, not a vnode');G.subscribe(H, function () {
              G.render(H, u($));
            }), G.redraw();
          };
        }(R);var U = function U(G) {
          if ('' === G || null == G) return {};'?' === G.charAt(0) && (G = G.slice(1));for (var H = G.split('&'), $ = {}, Y = {}, q = 0; q < H.length; q++) {
            var W = H[q].split('='),
                X = decodeURIComponent(W[0]),
                K = 2 === W.length ? decodeURIComponent(W[1]) : '';'true' === K ? K = !0 : 'false' === K && (K = !1);var Q = X.split(/\]\[?|\[/),
                Z = $;-1 < X.indexOf('[') && Q.pop();for (var J = 0; J < Q.length; J++) {
              var ee = Q[J],
                  te = Q[J + 1],
                  ne = '' == te || !isNaN(parseInt(te, 10)),
                  ae = J === Q.length - 1;if ('' === ee) {
                var X = Q.slice(0, J).join();null == Y[X] && (Y[X] = 0), ee = Y[X]++;
              }null == Z[ee] && (Z[ee] = ae ? K : ne ? [] : {}), Z = Z[ee];
            }
          }return $;
        },
            V = function V(G) {
          function H(Q) {
            var Z = G.location[Q].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);return 'pathname' === Q && '/' !== Z[0] && (Z = '/' + Z), Z;
          }function $(Q) {
            return function () {
              null != X || (X = W(function () {
                X = null, Q();
              }));
            };
          }function Y(Q, Z, J) {
            var ee = Q.indexOf('?'),
                te = Q.indexOf('#'),
                ne = -1 < ee ? ee : -1 < te ? te : Q.length;if (-1 < ee) {
              var ae = -1 < te ? te : Q.length,
                  ie = U(Q.slice(ee + 1, ae));for (var de in ie) {
                Z[de] = ie[de];
              }
            }if (-1 < te) {
              var re = U(Q.slice(te + 1));for (var de in re) {
                J[de] = re[de];
              }
            }return Q.slice(0, ne);
          }var X,
              q = 'function' == typeof G.history.pushState,
              W = 'function' == typeof d ? d : setTimeout,
              K = { prefix: '#!' };return K.getPath = function () {
            var Q = K.prefix.charAt(0);return '#' === Q ? H('hash').slice(K.prefix.length) : '?' === Q ? H('search').slice(K.prefix.length) + H('hash') : H('pathname').slice(K.prefix.length) + H('search') + H('hash');
          }, K.setPath = function (Q, Z, J) {
            var ee = {},
                te = {};if (Q = Y(Q, ee, te), null != Z) {
              for (var ne in Z) {
                ee[ne] = Z[ne];
              }Q = Q.replace(/:([^\/]+)/g, function (oe, se) {
                return delete ee[se], Z[se];
              });
            }var ae = w(ee);ae && (Q += '?' + ae);var ie = w(te);if (ie && (Q += '#' + ie), q) {
              var de = J ? J.state : null,
                  re = J ? J.title : null;G.onpopstate(), J && J.replace ? G.history.replaceState(de, re, K.prefix + Q) : G.history.pushState(de, re, K.prefix + Q);
            } else G.location.href = K.prefix + Q;
          }, K.defineRoutes = function (Q, Z, J) {
            function ee() {
              var te = K.getPath(),
                  ne = {},
                  ae = Y(te, ne, ne),
                  ie = G.history.state;if (null != ie) for (var de in ie) {
                ne[de] = ie[de];
              }for (var re in Q) {
                var oe = new RegExp('^' + re.replace(/:[^\/]+?\.{3}/g, '(.*?)').replace(/:[^\/]+/g, '([^\\/]+)') + '/?$');if (oe.test(ae)) return void ae.replace(oe, function () {
                  for (var se = re.match(/:[^\/]+/g) || [], le = [].slice.call(arguments, 1, -2), ue = 0; ue < se.length; ue++) {
                    ne[se[ue].replace(/:|\./g, '')] = decodeURIComponent(le[ue]);
                  }Z(Q[re], ne, te, re);
                });
              }J(te, ne);
            }q ? G.onpopstate = $(ee) : '#' === K.prefix.charAt(0) && (G.onhashchange = ee), ee();
          }, K;
        };S.route = function (G, H) {
          var q,
              W,
              X,
              K,
              _Q,
              $ = V(G),
              Y = function Y(ee) {
            return ee;
          },
              Z = function Z(ee, te, ne) {
            if (null == ee) throw new Error('Ensure the DOM element that was passed to `m.route` is not undefined');var ae = function ae() {
              null != q && H.render(ee, q(u(W, X.key, X)));
            },
                ie = function ie(re) {
              if (re !== te) $.setPath(te, null, { replace: !0 });else throw new Error('Could not resolve default route ' + te);
            };$.defineRoutes(ne, function (de, re, oe) {
              var se = _Q = function Q(ue, ce) {
                se !== _Q || (W = null != ce && ('function' == typeof ce.view || 'function' == typeof ce) ? ce : 'div', X = re, K = oe, _Q = null, q = (ue.render || Y).bind(ue), ae());
              };de.view || 'function' == typeof de ? se({}, de) : de.onmatch ? E.resolve(de.onmatch(re, oe)).then(function (le) {
                se(de, le);
              }, ie) : se(de, 'div');
            }, ie), H.subscribe(ee, ae);
          };return Z.set = function (J, ee, te) {
            null != _Q && (te = { replace: !0 }), _Q = null, $.setPath(J, ee, te);
          }, Z.get = function () {
            return K;
          }, Z.prefix = function (J) {
            $.prefix = J;
          }, Z.link = function (J) {
            J.dom.setAttribute('href', $.prefix + J.attrs.href), J.dom.onclick = function (ee) {
              if (!(ee.ctrlKey || ee.metaKey || ee.shiftKey || 2 === ee.which)) {
                ee.preventDefault(), ee.redraw = !1;var te = this.getAttribute('href');0 === te.indexOf($.prefix) && (te = te.slice($.prefix.length)), Z.set(te, void 0, void 0);
              }
            };
          }, Z.param = function (J) {
            return 'undefined' != typeof X && 'undefined' != typeof J ? X[J] : X;
          }, Z;
        }(window, R), S.withAttr = function (L, G, H) {
          return function ($) {
            G.call(H || this, L in $.currentTarget ? $.currentTarget[L] : $.currentTarget.getAttribute(L));
          };
        };var z = O(window);S.render = z.render, S.redraw = R.redraw, S.request = I.request, S.jsonp = I.jsonp, S.parseQueryString = U, S.buildQueryString = w, S.version = '1.1.0', S.vnode = u, t.exports = S;
      })();
    }).call(n, a(24).setImmediate, a(6));
  }, function (t) {
    'use strict';
    var d = 'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator) ? function (l) {
      return typeof l === 'undefined' ? 'undefined' : _typeof(l);
    } : function (l) {
      return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l === 'undefined' ? 'undefined' : _typeof(l);
    },
        r;r = function () {
      return this;
    }();try {
      r = r || Function('return this')() || (1, eval)('this');
    } catch (l) {
      'object' === ('undefined' == typeof window ? 'undefined' : d(window)) && (r = window);
    }t.exports = r;
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, '', { mdcCard: 'mdc-card', mdcCardThemeDark: 'mdc-card--theme-dark' }, function (_) {
          return 'mdcCard' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    function d(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }Object.defineProperty(n, '__esModule', { value: !0 });var r = a(5),
        l = d(r),
        u = a(1),
        f = d(u);n.default = { view: function view(h) {
        return (0, l.default)(f.default, Object.assign({ mdcButtonCompact: !0, mdcCardAction: !0, classNames: Object.assign({ mdcCardAction: 'mdc-card__action' }, h.attrs.classNames) }, h.attrs), h.children);
      } };
  }, function (t, n, a) {
    'use strict';
    function r(f, _) {
      return _ === f.attrs.type || f.attrs[_];
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = a(0),
        u = function (f) {
      return f && f.__esModule ? f : { default: f };
    }(l);n.default = { view: function view(_) {
        return (0, u.default)(_, r(_, 'mdcCardHorizontalBlock') ? '' : 'section', { mdcCardMedia: 'mdc-card__media', mdcCardActions: 'mdc-card__actions', mdcCardActionsVertical: 'mdc-card__actions--vertical', mdcCardPrimary: 'mdc-card__primary', mdcCardSupportingText: 'mdc-card__supporting-text', mdcCardHorizontalBlock: 'mdc-card__horizontal-block' }, function (h) {
          return r(_, h);
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'h2', { mdcCardSubtitle: 'mdc-card__subtitle' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'h1', { mdcCardTitle: 'mdc-card__title', mdcCardTitleLarge: 'mdc-card__title--large' }, function (_) {
          return 'mdcCardTitle' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'header', { mdcToolbar: 'mdc-toolbar', mdcToolbarFixed: 'mdc-toolbar--fixed' }, function (_) {
          return 'mdcToolbar' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, '', { mdcToolbarRow: 'mdc-toolbar__row' });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'section', { mdcToolbarSection: 'mdc-toolbar__section', mdcToolbarSectionAlignStart: 'mdc-toolbar__section--align-start', mdcToolbarSectionAlignEnd: 'mdc-toolbar__section--align-end' }, function (_) {
          return 'mdcToolbarSection' === _ || f.attrs[_];
        });
      } };
  }, function (t, n, a) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var r = a(0),
        l = function (u) {
      return u && u.__esModule ? u : { default: u };
    }(r);n.default = { view: function view(f) {
        return (0, l.default)(f, 'span', { mdcToolbarTitle: 'mdc-toolbar__title' });
      } };
  }, function (t, n, a) {
    'use strict';
    function d(F) {
      return F && F.__esModule ? F : { default: F };
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.cardSubtitle = n.cardTitle = n.cardBlock = n.cardActionButton = n.card = n.toolbarTitle = n.toolbarRow = n.toolbarSection = n.toolbar = n.button = void 0;var r = a(1),
        l = d(r),
        u = a(12),
        f = d(u),
        _ = a(15),
        h = d(_),
        b = a(13),
        C = d(b),
        A = a(14),
        T = d(A),
        S = a(7),
        E = d(S),
        w = a(8),
        N = d(w),
        D = a(9),
        I = d(D),
        O = a(11),
        P = d(O),
        R = a(10),
        M = d(R);n.button = l.default, n.toolbar = f.default, n.toolbarSection = T.default, n.toolbarRow = C.default, n.toolbarTitle = h.default, n.card = E.default, n.cardActionButton = N.default, n.cardBlock = I.default, n.cardTitle = P.default, n.cardSubtitle = M.default;
  }, function (t, n) {
    'use strict';
    function d(C) {
      return C.document !== void 0 && 'function' == typeof C.document.createElement;
    }function r(C) {
      return C in h || C in b;
    }function l(C, A, T) {
      return 'animationstart' === C || 'animationend' === C || 'animationiteration' === C ? 'animation' in T.style ? A[C].noPrefix : A[C].webkitPrefix : 'transitionend' === C ? 'transition' in T.style ? A[C].noPrefix : A[C].webkitPrefix : A[C].noPrefix;
    }function u(C, A) {
      if (!d(C) || !r(A)) return A;var T = A in h ? h : b,
          S = C.document.createElement('div'),
          E = '';return E = T === h ? l(A, T, S) : T[A].noPrefix in S.style ? T[A].noPrefix : T[A].webkitPrefix, E;
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.getCorrectEventName = function (C, A) {
      return u(C, A);
    }, n.getCorrectPropertyName = function (C, A) {
      return u(C, A);
    };var h = { animationstart: { noPrefix: 'animationstart', webkitPrefix: 'webkitAnimationStart' }, animationend: { noPrefix: 'animationend', webkitPrefix: 'webkitAnimationEnd' }, animationiteration: { noPrefix: 'animationiteration', webkitPrefix: 'webkitAnimationIteration' }, transitionend: { noPrefix: 'transitionend', webkitPrefix: 'webkitTransitionEnd' } },
        b = { animation: { noPrefix: 'animation', webkitPrefix: '-webkit-animation' }, transform: { noPrefix: 'transform', webkitPrefix: '-webkit-transform' }, transition: { noPrefix: 'transition', webkitPrefix: '-webkit-transition' } };
  }, function (t, n, a) {
    'use strict';
    function r(h, b) {
      if (!(h instanceof b)) throw new TypeError('Cannot call a class as a function');
    }Object.defineProperty(n, '__esModule', { value: !0 });var l = function () {
      function h(b, C) {
        for (var T, A = 0; A < C.length; A++) {
          T = C[A], T.enumerable = T.enumerable || !1, T.configurable = !0, 'value' in T && (T.writable = !0), Object.defineProperty(b, T.key, T);
        }
      }return function (b, C, A) {
        return C && h(b.prototype, C), A && h(b, A), b;
      };
    }(),
        u = a(2),
        f = function (h) {
      return h && h.__esModule ? h : { default: h };
    }(u),
        _ = function () {
      function h(b) {
        var C = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;r(this, h), this.root_ = b;for (var A = arguments.length, T = Array(2 < A ? A - 2 : 0), S = 2; S < A; S++) {
          T[S - 2] = arguments[S];
        }this.initialize.apply(this, T), this.foundation_ = void 0 === C ? this.getDefaultFoundation() : C, this.foundation_.init(), this.initialSyncWithDOM();
      }return l(h, null, [{ key: 'attachTo', value: function value(C) {
          return new h(C, new f.default());
        } }]), l(h, [{ key: 'initialize', value: function value() {} }, { key: 'getDefaultFoundation', value: function value() {
          throw new Error('Subclasses must override getDefaultFoundation to return a properly configured foundation class');
        } }, { key: 'initialSyncWithDOM', value: function value() {} }, { key: 'destroy', value: function value() {
          this.foundation_.destroy();
        } }, { key: 'listen', value: function value(C, A) {
          this.root_.addEventListener(C, A);
        } }, { key: 'unlisten', value: function value(C, A) {
          this.root_.removeEventListener(C, A);
        } }, { key: 'emit', value: function value(C, A) {
          var T;'function' == typeof CustomEvent ? T = new CustomEvent(C, { detail: A }) : (T = document.createEvent('CustomEvent'), T.initCustomEvent(C, !1, !1, A)), this.root_.dispatchEvent(T);
        } }]), h;
    }();n.default = _;
  }, function (t, n) {
    'use strict';
    Object.defineProperty(n, '__esModule', { value: !0 });var d = n.ROOT = 'mdc-ripple',
        r = n.UPGRADED = d + '-upgraded',
        l = n.cssClasses = { ROOT: r, UNBOUNDED: r + '--unbounded', BG_ACTIVE: r + '--background-active', BG_BOUNDED_ACTIVE_FILL: r + '--background-bounded-active-fill', FG_BOUNDED_ACTIVE_FILL: r + '--foreground-bounded-active-fill', FG_UNBOUNDED_ACTIVATION: r + '--foreground-unbounded-activation', FG_UNBOUNDED_DEACTIVATION: r + '--foreground-unbounded-deactivation' },
        u = n.strings = { VAR_SURFACE_WIDTH: '--' + d + '-surface-width', VAR_SURFACE_HEIGHT: '--' + d + '-surface-height', VAR_FG_SIZE: '--' + d + '-fg-size', VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + d + '-fg-unbounded-opacity-duration', VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + d + '-fg-unbounded-transform-duration', VAR_LEFT: '--' + d + '-left', VAR_TOP: '--' + d + '-top', VAR_TRANSLATE_END: '--' + d + '-translate-end', VAR_FG_APPROX_XF: '--' + d + '-fg-approx-xf', VAR_FG_SCALE: '--' + d + '-fg-scale', VAR_FG_TRANSLATE_START: '--' + d + '-fg-translate-start', VAR_FG_TRANSLATE_END: '--' + d + '-fg-translate-end' },
        f = n.numbers = { FG_TRANSFORM_DELAY_MS: 80, OPACITY_DURATION_DIVISOR: 3, ACTIVE_OPACITY_DURATION_MS: 110, MIN_OPACITY_DURATION_MS: 200, UNBOUNDED_TRANSFORM_DURATION_MS: 200, PADDING: 10, INITIAL_ORIGIN_SCALE: 0.6 };
  }, function (t, n, a) {
    'use strict';
    function d(T, S) {
      if (!(T instanceof S)) throw new TypeError('Cannot call a class as a function');
    }function r(T, S) {
      if (!T) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return S && ('object' == (typeof S === 'undefined' ? 'undefined' : _typeof(S)) || 'function' == typeof S) ? S : T;
    }function l(T, S) {
      if ('function' != typeof S && null !== S) throw new TypeError('Super expression must either be null or a function, not ' + (typeof S === 'undefined' ? 'undefined' : _typeof(S)));T.prototype = Object.create(S && S.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S);
    }Object.defineProperty(n, '__esModule', { value: !0 });var u = function () {
      function T(S, E) {
        for (var N, w = 0; w < E.length; w++) {
          N = E[w], N.enumerable = N.enumerable || !1, N.configurable = !0, 'value' in N && (N.writable = !0), Object.defineProperty(S, N.key, N);
        }
      }return function (S, E, w) {
        return E && T(S.prototype, E), w && T(S, w), S;
      };
    }(),
        f = a(3),
        _ = a(17),
        h = a(19),
        b = a(4),
        C = { mouseup: 'mousedown', pointerup: 'pointerdown', touchend: 'touchstart', keyup: 'keydown', blur: 'focus' },
        A = function (T) {
      function S(E) {
        d(this, S);var w = r(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, Object.assign(S.defaultAdapter, E)));return w.layoutFrame_ = 0, w.frame_ = { width: 0, height: 0 }, w.activationState_ = w.defaultActivationState_(), w.xfDuration_ = 0, w.initialSize_ = 0, w.maxRadius_ = 0, w.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }], w.listeners_ = { activate: function activate(D) {
            return w.activate_(D);
          }, deactivate: function deactivate(D) {
            return w.deactivate_(D);
          }, focus: function focus() {
            return requestAnimationFrame(function () {
              return w.adapter_.addClass(S.cssClasses.BG_ACTIVE);
            });
          }, blur: function blur() {
            return requestAnimationFrame(function () {
              return w.adapter_.removeClass(S.cssClasses.BG_ACTIVE);
            });
          } }, w.unboundedOpacityFadeTimer_ = 0, w.resizeHandler_ = function () {
          return w.layout();
        }, w.cancelBgBounded_ = function () {}, w.cancelFgBounded_ = function () {}, w.cancelFgUnbounded_ = function () {}, w.unboundedCoords_ = { left: 0, top: 0 }, w.fgScale_ = 0, w;
      }return l(S, T), u(S, [{ key: 'isSupported_', get: function get() {
          return this.adapter_.browserSupportsCssVars();
        } }], [{ key: 'cssClasses', get: function get() {
          return h.cssClasses;
        } }, { key: 'strings', get: function get() {
          return h.strings;
        } }, { key: 'numbers', get: function get() {
          return h.numbers;
        } }, { key: 'defaultAdapter', get: function get() {
          return { browserSupportsCssVars: function browserSupportsCssVars() {}, isUnbounded: function isUnbounded() {}, isSurfaceActive: function isSurfaceActive() {}, addClass: function addClass() {}, removeClass: function removeClass() {}, registerInteractionHandler: function registerInteractionHandler() {}, deregisterInteractionHandler: function deregisterInteractionHandler() {}, registerResizeHandler: function registerResizeHandler() {}, deregisterResizeHandler: function deregisterResizeHandler() {}, updateCssVariable: function updateCssVariable() {}, computeBoundingRect: function computeBoundingRect() {}, getWindowPageOffset: function getWindowPageOffset() {} };
        } }]), u(S, [{ key: 'defaultActivationState_', value: function value() {
          return { isActivated: !1, wasActivatedByPointer: !1, wasElementMadeActive: !1, activationStartTime: 0, activationEvent: null };
        } }, { key: 'init', value: function value() {
          var w = this;if (this.isSupported_) {
            this.addEventListeners_();var N = S.cssClasses,
                D = N.ROOT,
                I = N.UNBOUNDED;requestAnimationFrame(function () {
              w.adapter_.addClass(D), w.adapter_.isUnbounded() && w.adapter_.addClass(I), w.layoutInternal_();
            });
          }
        } }, { key: 'addEventListeners_', value: function value() {
          var w = this;this.listenerInfos_.forEach(function (N) {
            Object.keys(N).forEach(function (D) {
              w.adapter_.registerInteractionHandler(N[D], w.listeners_[D]);
            });
          }), this.adapter_.registerResizeHandler(this.resizeHandler_);
        } }, { key: 'activate_', value: function value(w) {
          var N = this,
              D = this.activationState_;D.isActivated || (D.isActivated = !0, D.isProgrammatic = null === w, D.activationEvent = w, D.wasActivatedByPointer = !D.isProgrammatic && ('mousedown' === w.type || 'touchstart' === w.type || 'pointerdown' === w.type), D.activationStartTime = Date.now(), requestAnimationFrame(function () {
            D.wasElementMadeActive = w && 'keydown' === w.type ? N.adapter_.isSurfaceActive() : !0, D.wasElementMadeActive ? N.animateActivation_() : N.activationState_ = N.defaultActivationState_();
          }));
        } }, { key: 'activate', value: function value() {
          this.activate_(null);
        } }, { key: 'animateActivation_', value: function value() {
          var w = this,
              N = S.cssClasses,
              D = N.BG_ACTIVE,
              I = N.BG_BOUNDED_ACTIVE_FILL,
              O = N.FG_UNBOUNDED_DEACTIVATION,
              P = N.FG_BOUNDED_ACTIVE_FILL;[I, O, P].forEach(function (R) {
            return w.adapter_.removeClass(R);
          }), this.cancelBgBounded_(), this.cancelFgBounded_(), this.cancelFgUnbounded_(), this.unboundedOpacityFadeTimer_ && (clearTimeout(this.unboundedOpacityFadeTimer_), this.unboundedOpacityFadeTimer_ = 0), this.adapter_.addClass(D), this.adapter_.isUnbounded() && this.animateUnboundedActivation_();
        } }, { key: 'animateUnboundedActivation_', value: function value() {
          var w = S.cssClasses.FG_UNBOUNDED_ACTIVATION;this.adapter_.addClass(w);
        } }, { key: 'deactivate_', value: function value(w) {
          var N = this,
              D = this.activationState_;if (D.isActivated) {
            if (D.isProgrammatic) return requestAnimationFrame(function () {
              return N.animateDeactivation_(null, Object.assign({}, D));
            }), void (this.activationState_ = this.defaultActivationState_());var I = C[w.type],
                O = D.activationEvent.type,
                P = I === O,
                R = P;D.wasActivatedByPointer && (R = 'mouseup' === w.type);var M = Object.assign({}, D);P && requestAnimationFrame(function () {
              return N.animateDeactivation_(w, M);
            }), R && (this.activationState_ = this.defaultActivationState_());
          }
        } }, { key: 'deactivate', value: function value() {
          this.deactivate_(null);
        } }, { key: 'animateDeactivation_', value: function value(w, N) {
          var D = N.wasActivatedByPointer,
              I = N.wasElementMadeActive,
              O = N.activationStartTime,
              P = N.isProgrammatic,
              R = S.cssClasses.BG_ACTIVE;if (D || I) {
            this.adapter_.removeClass(R);var M = !P && ('touchend' === w.type || 'pointerup' === w.type || 'mouseup' === w.type);this.adapter_.isUnbounded() ? this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(O)) : this.animateBoundedDeactivation_(w, M);
          }
        } }, { key: 'animateUnboundedDeactivation_', value: function value(w) {
          var N = this,
              D = w.opacityDuration,
              I = w.transformDuration,
              O = w.approxCurScale,
              P = S.cssClasses,
              R = P.FG_UNBOUNDED_ACTIVATION,
              M = P.FG_UNBOUNDED_DEACTIVATION,
              F = S.strings,
              U = F.VAR_FG_UNBOUNDED_OPACITY_DURATION,
              V = F.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              B = F.VAR_FG_APPROX_XF;this.adapter_.updateCssVariable(B, 'scale(' + O + ')'), this.adapter_.updateCssVariable(U, D + 'ms'), this.adapter_.updateCssVariable(V, I + 'ms'), this.adapter_.addClass(M), this.adapter_.removeClass(R), this.unboundedOpacityFadeTimer_ = setTimeout(function () {
            N.adapter_.removeClass(M);
          }, D);
        } }, { key: 'getUnboundedDeactivationInfo_', value: function value(w) {
          var N = Date.now() - w,
              D = S.numbers,
              I = D.FG_TRANSFORM_DELAY_MS,
              O = D.OPACITY_DURATION_DIVISOR,
              P = D.ACTIVE_OPACITY_DURATION_MS,
              R = D.UNBOUNDED_TRANSFORM_DURATION_MS,
              M = D.MIN_OPACITY_DURATION_MS,
              F = 0;if (N > I) {
            var U = _Mathmin((N - I) / this.xfDuration_, 1);F = U * this.fgScale_;
          }var B = _Mathmin(N / P, 1),
              z = _Mathmax(M, 1e3 * B / O);return { transformDuration: R, opacityDuration: z, approxCurScale: F };
        } }, { key: 'animateBoundedDeactivation_', value: function value(w, N) {
          var D;D = N ? (0, b.getNormalizedEventCoords)(w, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : { x: this.frame_.width / 2, y: this.frame_.height / 2 }, D = { x: D.x - this.initialSize_ / 2, y: D.y - this.initialSize_ / 2 };var I = { x: this.frame_.width / 2 - this.initialSize_ / 2, y: this.frame_.height / 2 - this.initialSize_ / 2 },
              O = S.strings,
              P = O.VAR_FG_TRANSLATE_START,
              R = O.VAR_FG_TRANSLATE_END,
              M = S.cssClasses,
              F = M.BG_BOUNDED_ACTIVE_FILL,
              U = M.FG_BOUNDED_ACTIVE_FILL;this.adapter_.updateCssVariable(P, D.x + 'px, ' + D.y + 'px'), this.adapter_.updateCssVariable(R, I.x + 'px, ' + I.y + 'px'), this.cancelBgBounded_ = (0, b.animateWithClass)(this.adapter_, F, (0, _.getCorrectEventName)(window, 'transitionend')), this.cancelFgBounded_ = (0, b.animateWithClass)(this.adapter_, U, (0, _.getCorrectEventName)(window, 'animationend'));
        } }, { key: 'destroy', value: function value() {
          var w = this;if (this.isSupported_) {
            this.removeEventListeners_();var N = S.cssClasses,
                D = N.ROOT,
                I = N.UNBOUNDED;requestAnimationFrame(function () {
              w.adapter_.removeClass(D), w.adapter_.removeClass(I), w.removeCssVars_();
            });
          }
        } }, { key: 'removeEventListeners_', value: function value() {
          var w = this;this.listenerInfos_.forEach(function (N) {
            Object.keys(N).forEach(function (D) {
              w.adapter_.deregisterInteractionHandler(N[D], w.listeners_[D]);
            });
          }), this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        } }, { key: 'removeCssVars_', value: function value() {
          var w = this,
              N = S.strings;Object.keys(N).forEach(function (D) {
            0 === D.indexOf('VAR_') && w.adapter_.updateCssVariable(N[D], null);
          });
        } }, { key: 'layout', value: function value() {
          var w = this;this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_), this.layoutFrame_ = requestAnimationFrame(function () {
            w.layoutInternal_(), w.layoutFrame_ = 0;
          });
        } }, { key: 'layoutInternal_', value: function value() {
          this.frame_ = this.adapter_.computeBoundingRect();var w = _Mathmax(this.frame_.height, this.frame_.width),
              N = _Mathsqrt(_Mathpow(this.frame_.width, 2) + _Mathpow(this.frame_.height, 2));this.initialSize_ = w * S.numbers.INITIAL_ORIGIN_SCALE, this.maxRadius_ = N + S.numbers.PADDING, this.fgScale_ = this.maxRadius_ / this.initialSize_, this.xfDuration_ = 1e3 * _Mathsqrt(this.maxRadius_ / 1024), this.updateLayoutCssVars_();
        } }, { key: 'updateLayoutCssVars_', value: function value() {
          var w = S.strings,
              N = w.VAR_SURFACE_WIDTH,
              D = w.VAR_SURFACE_HEIGHT,
              I = w.VAR_FG_SIZE,
              O = w.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
              P = w.VAR_LEFT,
              R = w.VAR_TOP,
              M = w.VAR_FG_SCALE;this.adapter_.updateCssVariable(N, this.frame_.width + 'px'), this.adapter_.updateCssVariable(D, this.frame_.height + 'px'), this.adapter_.updateCssVariable(I, this.initialSize_ + 'px'), this.adapter_.updateCssVariable(O, this.xfDuration_ + 'ms'), this.adapter_.updateCssVariable(M, this.fgScale_), this.adapter_.isUnbounded() && (this.unboundedCoords_ = { left: _Mathround(this.frame_.width / 2 - this.initialSize_ / 2), top: _Mathround(this.frame_.height / 2 - this.initialSize_ / 2) }, this.adapter_.updateCssVariable(P, this.unboundedCoords_.left + 'px'), this.adapter_.updateCssVariable(R, this.unboundedCoords_.top + 'px'));
        } }]), S;
    }(f.MDCFoundation);n.default = A;
  }, function (t, n, a) {
    'use strict';
    function r(S, E) {
      if (!(S instanceof E)) throw new TypeError('Cannot call a class as a function');
    }function l(S, E) {
      if (!S) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return E && ('object' == (typeof E === 'undefined' ? 'undefined' : _typeof(E)) || 'function' == typeof E) ? E : S;
    }function u(S, E) {
      if ('function' != typeof E && null !== E) throw new TypeError('Super expression must either be null or a function, not ' + (typeof E === 'undefined' ? 'undefined' : _typeof(E)));S.prototype = Object.create(E && E.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(S, E) : S.__proto__ = E);
    }Object.defineProperty(n, '__esModule', { value: !0 }), n.MDCRipple = n.MDCRippleFoundation = void 0;var f = function () {
      function S(E, w) {
        for (var D, N = 0; N < w.length; N++) {
          D = w[N], D.enumerable = D.enumerable || !1, D.configurable = !0, 'value' in D && (D.writable = !0), Object.defineProperty(E, D.key, D);
        }
      }return function (E, w, N) {
        return w && S(E.prototype, w), N && S(E, N), E;
      };
    }(),
        _ = a(3),
        h = a(20),
        b = function (S) {
      return S && S.__esModule ? S : { default: S };
    }(h),
        C = a(4),
        A = (0, C.getMatchesProperty)(HTMLElement.prototype);n.MDCRippleFoundation = b.default;n.MDCRipple = function (S) {
      function E() {
        return r(this, E), l(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
      }return u(E, S), f(E, [{ key: 'activate', value: function value() {
          this.foundation_.activate();
        } }, { key: 'deactivate', value: function value() {
          this.foundation_.deactivate();
        } }, { key: 'getDefaultFoundation', value: function value() {
          return new b.default(E.createAdapter(this));
        } }, { key: 'initialSyncWithDOM', value: function value() {
          this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
        } }, { key: 'unbounded', get: function get() {
          return this.unbounded_;
        }, set: function set(N) {
          var D = b.default.cssClasses.UNBOUNDED;this.unbounded_ = !!N, this.unbounded_ ? this.root_.classList.add(D) : this.root_.classList.remove(D);
        } }], [{ key: 'attachTo', value: function value(N) {
          var D = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
              I = D.isUnbounded,
              O = void 0 === I ? void 0 : I,
              P = new E(N);return void 0 !== O && (P.unbounded = O), P;
        } }, { key: 'createAdapter', value: function value(N) {
          return { browserSupportsCssVars: function browserSupportsCssVars() {
              return (0, C.supportsCssVariables)(window);
            }, isUnbounded: function isUnbounded() {
              return N.unbounded;
            }, isSurfaceActive: function isSurfaceActive() {
              return N.root_[A](':active');
            }, addClass: function addClass(I) {
              return N.root_.classList.add(I);
            }, removeClass: function removeClass(I) {
              return N.root_.classList.remove(I);
            }, registerInteractionHandler: function registerInteractionHandler(I, O) {
              return N.root_.addEventListener(I, O);
            }, deregisterInteractionHandler: function deregisterInteractionHandler(I, O) {
              return N.root_.removeEventListener(I, O);
            }, registerResizeHandler: function registerResizeHandler(I) {
              return window.addEventListener('resize', I);
            }, deregisterResizeHandler: function deregisterResizeHandler(I) {
              return window.removeEventListener('resize', I);
            }, updateCssVariable: function updateCssVariable(I, O) {
              return N.root_.style.setProperty(I, O);
            }, computeBoundingRect: function computeBoundingRect() {
              return N.root_.getBoundingClientRect();
            }, getWindowPageOffset: function getWindowPageOffset() {
              return { x: window.pageXOffset, y: window.pageYOffset };
            } };
        } }]), E;
    }(_.MDCComponent);
  }, function (t) {
    'use strict';
    function d() {
      throw new Error('setTimeout has not been defined');
    }function r() {
      throw new Error('clearTimeout has not been defined');
    }function l(D) {
      if (A === setTimeout) return setTimeout(D, 0);if ((A === d || !A) && setTimeout) return A = setTimeout, setTimeout(D, 0);try {
        return A(D, 0);
      } catch (I) {
        try {
          return A.call(null, D, 0);
        } catch (O) {
          return A.call(this, D, 0);
        }
      }
    }function u(D) {
      if (T === clearTimeout) return clearTimeout(D);if ((T === r || !T) && clearTimeout) return T = clearTimeout, clearTimeout(D);try {
        return T(D);
      } catch (I) {
        try {
          return T.call(null, D);
        } catch (O) {
          return T.call(this, D);
        }
      }
    }function f() {
      E && w && (E = !1, w.length ? S = w.concat(S) : N = -1, S.length && _());
    }function _() {
      if (!E) {
        var D = l(f);E = !0;for (var I = S.length; I;) {
          for (w = S, S = []; ++N < I;) {
            w && w[N].run();
          }N = -1, I = S.length;
        }w = null, E = !1, u(D);
      }
    }function h(D, I) {
      this.fun = D, this.array = I;
    }function b() {}var C = t.exports = {},
        A,
        T;(function () {
      try {
        A = 'function' == typeof setTimeout ? setTimeout : d;
      } catch (D) {
        A = d;
      }try {
        T = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (D) {
        T = r;
      }
    })();var S = [],
        E = !1,
        w,
        N = -1;C.nextTick = function (D) {
      var I = Array(arguments.length - 1);if (1 < arguments.length) for (var O = 1; O < arguments.length; O++) {
        I[O - 1] = arguments[O];
      }S.push(new h(D, I)), 1 !== S.length || E || l(_);
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, C.title = 'browser', C.browser = !0, C.env = {}, C.argv = [], C.version = '', C.versions = {}, C.on = b, C.addListener = b, C.once = b, C.off = b, C.removeListener = b, C.removeAllListeners = b, C.emit = b, C.binding = function () {
      throw new Error('process.binding is not supported');
    }, C.cwd = function () {
      return '/';
    }, C.chdir = function () {
      throw new Error('process.chdir is not supported');
    }, C.umask = function () {
      return 0;
    };
  }, function (t, n, a) {
    'use strict';
    (function (d, r) {
      (function (l, u) {
        'use strict';
        function f(M) {
          'function' != typeof M && (M = new Function('' + M));for (var F = Array(arguments.length - 1), U = 0; U < F.length; U++) {
            F[U] = arguments[U + 1];
          }var V = { callback: M, args: F };return D[N] = V, P(N), N++;
        }function _(M) {
          delete D[M];
        }function h(M) {
          var F = M.callback,
              U = M.args;switch (U.length) {case 0:
              F();break;case 1:
              F(U[0]);break;case 2:
              F(U[0], U[1]);break;case 3:
              F(U[0], U[1], U[2]);break;default:
              F.apply(u, U);}
        }function b(M) {
          if (I) setTimeout(b, 0, M);else {
            var F = D[M];if (F) {
              I = !0;try {
                h(F);
              } finally {
                _(M), I = !1;
              }
            }
          }
        }function C() {
          P = function P(F) {
            r.nextTick(function () {
              b(F);
            });
          };
        }function A() {
          if (l.postMessage && !l.importScripts) {
            var M = !0,
                F = l.onmessage;return l.onmessage = function () {
              M = !1;
            }, l.postMessage('', '*'), l.onmessage = F, M;
          }
        }function T() {
          var M = 'setImmediate$' + Math.random() + '$',
              F = function F(V) {
            V.source === l && 'string' == typeof V.data && 0 === V.data.indexOf(M) && b(+V.data.slice(M.length));
          };l.addEventListener ? l.addEventListener('message', F, !1) : l.attachEvent('onmessage', F), P = function P(V) {
            l.postMessage(M + V, '*');
          };
        }function S() {
          var M = new MessageChannel();M.port1.onmessage = function (F) {
            var U = F.data;b(U);
          }, P = function P(U) {
            M.port2.postMessage(U);
          };
        }function E() {
          var M = O.documentElement;P = function P(U) {
            var V = O.createElement('script');V.onreadystatechange = function () {
              b(U), V.onreadystatechange = null, M.removeChild(V), V = null;
            }, M.appendChild(V);
          };
        }function w() {
          P = function P(F) {
            setTimeout(b, 0, F);
          };
        }if (!l.setImmediate) {
          var P,
              N = 1,
              D = {},
              I = !1,
              O = l.document,
              R = Object.getPrototypeOf && Object.getPrototypeOf(l);R = R && R.setTimeout ? R : l, '[object process]' === {}.toString.call(l.process) ? C() : A() ? T() : l.MessageChannel ? S() : O && 'onreadystatechange' in O.createElement('script') ? E() : w(), R.setImmediate = f, R.clearImmediate = _;
        }
      })('undefined' == typeof self ? 'undefined' == typeof d ? void 0 : d : self);
    }).call(n, a(6), a(22));
  }, function (t, n, a) {
    'use strict';
    function d(l, u) {
      this._id = l, this._clearFn = u;
    }var r = Function.prototype.apply;n.setTimeout = function () {
      return new d(r.call(setTimeout, window, arguments), clearTimeout);
    }, n.setInterval = function () {
      return new d(r.call(setInterval, window, arguments), clearInterval);
    }, n.clearTimeout = n.clearInterval = function (l) {
      l && l.close();
    }, d.prototype.unref = d.prototype.ref = function () {}, d.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, n.enroll = function (l, u) {
      clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
    }, n.unenroll = function (l) {
      clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
    }, n._unrefActive = n.active = function (l) {
      clearTimeout(l._idleTimeoutId);var u = l._idleTimeout;0 <= u && (l._idleTimeoutId = setTimeout(function () {
        l._onTimeout && l._onTimeout();
      }, u));
    }, a(23), n.setImmediate = setImmediate, n.clearImmediate = clearImmediate;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0).setImmediate, __webpack_require__(0).clearImmediate, __webpack_require__(6)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bundle = __webpack_require__(1);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);