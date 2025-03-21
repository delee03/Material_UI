/*! For license information please see shepherd.js.LICENSE.txt */
/**THư viện dùng để tạo tour vòng quanh giao diện */
!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
    }
})(self, function () {
    return (function () {
        var t = {
                4992: function (t, e, n) {
                    var r, o, i;
                    function c(t, e, n) {
                        return (
                            (e = u(e)),
                            a(
                                t,
                                s()
                                    ? Reflect.construct(
                                          e,
                                          n || [],
                                          u(t).constructor
                                      )
                                    : e.apply(t, n)
                            )
                        );
                    }
                    function a(t, e) {
                        if (e && ("object" === E(e) || "function" == typeof e))
                            return e;
                        if (void 0 !== e)
                            throw new TypeError(
                                "Derived constructors may only return object or undefined"
                            );
                        return l(t);
                    }
                    function s() {
                        try {
                            var t = !Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                            );
                        } catch (t) {}
                        return (s = function () {
                            return !!t;
                        })();
                    }
                    function u(t) {
                        return (
                            (u = Object.setPrototypeOf
                                ? Object.getPrototypeOf.bind()
                                : function (t) {
                                      return (
                                          t.__proto__ ||
                                          Object.getPrototypeOf(t)
                                      );
                                  }),
                            u(t)
                        );
                    }
                    function l(t) {
                        if (void 0 === t)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return t;
                    }
                    function f(t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError(
                                "Super expression must either be null or a function"
                            );
                        (t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            Object.defineProperty(t, "prototype", {
                                writable: !1,
                            }),
                            e && p(t, e);
                    }
                    function p(t, e) {
                        return (
                            (p = Object.setPrototypeOf
                                ? Object.setPrototypeOf.bind()
                                : function (t, e) {
                                      return (t.__proto__ = e), t;
                                  }),
                            p(t, e)
                        );
                    }
                    function h(t, e) {
                        return (
                            (function (t) {
                                if (Array.isArray(t)) return t;
                            })(t) ||
                            (function (t, e) {
                                var n =
                                    null == t
                                        ? null
                                        : ("undefined" != typeof Symbol &&
                                              t[Symbol.iterator]) ||
                                          t["@@iterator"];
                                if (null != n) {
                                    var r,
                                        o,
                                        i,
                                        c,
                                        a = [],
                                        s = !0,
                                        u = !1;
                                    try {
                                        if (
                                            ((i = (n = n.call(t)).next),
                                            0 === e)
                                        ) {
                                            if (Object(n) !== n) return;
                                            s = !1;
                                        } else
                                            for (
                                                ;
                                                !(s = (r = i.call(n)).done) &&
                                                (a.push(r.value),
                                                a.length !== e);
                                                s = !0
                                            );
                                    } catch (t) {
                                        (u = !0), (o = t);
                                    } finally {
                                        try {
                                            if (
                                                !s &&
                                                null != n.return &&
                                                ((c = n.return()),
                                                Object(c) !== c)
                                            )
                                                return;
                                        } finally {
                                            if (u) throw o;
                                        }
                                    }
                                    return a;
                                }
                            })(t, e) ||
                            v(t, e) ||
                            (function () {
                                throw new TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                            })()
                        );
                    }
                    function d(t) {
                        return (
                            (function (t) {
                                if (Array.isArray(t)) return m(t);
                            })(t) ||
                            (function (t) {
                                if (
                                    ("undefined" != typeof Symbol &&
                                        null != t[Symbol.iterator]) ||
                                    null != t["@@iterator"]
                                )
                                    return Array.from(t);
                            })(t) ||
                            v(t) ||
                            (function () {
                                throw new TypeError(
                                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                            })()
                        );
                    }
                    function v(t, e) {
                        if (t) {
                            if ("string" == typeof t) return m(t, e);
                            var n = Object.prototype.toString
                                .call(t)
                                .slice(8, -1);
                            return (
                                "Object" === n &&
                                    t.constructor &&
                                    (n = t.constructor.name),
                                "Map" === n || "Set" === n
                                    ? Array.from(t)
                                    : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n
                                      )
                                    ? m(t, e)
                                    : void 0
                            );
                        }
                    }
                    function m(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = new Array(e); n < e; n++)
                            r[n] = t[n];
                        return r;
                    }
                    function y() {
                        "use strict";
                        y = function () {
                            return e;
                        };
                        var t,
                            e = {},
                            n = Object.prototype,
                            r = n.hasOwnProperty,
                            o =
                                Object.defineProperty ||
                                function (t, e, n) {
                                    t[e] = n.value;
                                },
                            i = "function" == typeof Symbol ? Symbol : {},
                            c = i.iterator || "@@iterator",
                            a = i.asyncIterator || "@@asyncIterator",
                            s = i.toStringTag || "@@toStringTag";
                        function u(t, e, n) {
                            return (
                                Object.defineProperty(t, e, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                }),
                                t[e]
                            );
                        }
                        try {
                            u({}, "");
                        } catch (t) {
                            u = function (t, e, n) {
                                return (t[e] = n);
                            };
                        }
                        function l(t, e, n, r) {
                            var i = e && e.prototype instanceof g ? e : g,
                                c = Object.create(i.prototype),
                                a = new P(r || []);
                            return o(c, "_invoke", { value: _(t, n, a) }), c;
                        }
                        function f(t, e, n) {
                            try {
                                return { type: "normal", arg: t.call(e, n) };
                            } catch (t) {
                                return { type: "throw", arg: t };
                            }
                        }
                        e.wrap = l;
                        var p = "suspendedStart",
                            h = "suspendedYield",
                            d = "executing",
                            v = "completed",
                            m = {};
                        function g() {}
                        function b() {}
                        function x() {}
                        var w = {};
                        u(w, c, function () {
                            return this;
                        });
                        var $ = Object.getPrototypeOf,
                            k = $ && $($(j([])));
                        k && k !== n && r.call(k, c) && (w = k);
                        var O = (x.prototype = g.prototype = Object.create(w));
                        function S(t) {
                            ["next", "throw", "return"].forEach(function (e) {
                                u(t, e, function (t) {
                                    return this._invoke(e, t);
                                });
                            });
                        }
                        function T(t, e) {
                            function n(o, i, c, a) {
                                var s = f(t[o], t, i);
                                if ("throw" !== s.type) {
                                    var u = s.arg,
                                        l = u.value;
                                    return l &&
                                        "object" == E(l) &&
                                        r.call(l, "__await")
                                        ? e.resolve(l.__await).then(
                                              function (t) {
                                                  n("next", t, c, a);
                                              },
                                              function (t) {
                                                  n("throw", t, c, a);
                                              }
                                          )
                                        : e.resolve(l).then(
                                              function (t) {
                                                  (u.value = t), c(u);
                                              },
                                              function (t) {
                                                  return n("throw", t, c, a);
                                              }
                                          );
                                }
                                a(s.arg);
                            }
                            var i;
                            o(this, "_invoke", {
                                value: function (t, r) {
                                    function o() {
                                        return new e(function (e, o) {
                                            n(t, r, e, o);
                                        });
                                    }
                                    return (i = i ? i.then(o, o) : o());
                                },
                            });
                        }
                        function _(e, n, r) {
                            var o = p;
                            return function (i, c) {
                                if (o === d)
                                    throw new Error(
                                        "Generator is already running"
                                    );
                                if (o === v) {
                                    if ("throw" === i) throw c;
                                    return { value: t, done: !0 };
                                }
                                for (r.method = i, r.arg = c; ; ) {
                                    var a = r.delegate;
                                    if (a) {
                                        var s = L(a, r);
                                        if (s) {
                                            if (s === m) continue;
                                            return s;
                                        }
                                    }
                                    if ("next" === r.method)
                                        r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if (o === p) throw ((o = v), r.arg);
                                        r.dispatchException(r.arg);
                                    } else
                                        "return" === r.method &&
                                            r.abrupt("return", r.arg);
                                    o = d;
                                    var u = f(e, n, r);
                                    if ("normal" === u.type) {
                                        if (((o = r.done ? v : h), u.arg === m))
                                            continue;
                                        return { value: u.arg, done: r.done };
                                    }
                                    "throw" === u.type &&
                                        ((o = v),
                                        (r.method = "throw"),
                                        (r.arg = u.arg));
                                }
                            };
                        }
                        function L(e, n) {
                            var r = n.method,
                                o = e.iterator[r];
                            if (o === t)
                                return (
                                    (n.delegate = null),
                                    ("throw" === r &&
                                        e.iterator.return &&
                                        ((n.method = "return"),
                                        (n.arg = t),
                                        L(e, n),
                                        "throw" === n.method)) ||
                                        ("return" !== r &&
                                            ((n.method = "throw"),
                                            (n.arg = new TypeError(
                                                "The iterator does not provide a '" +
                                                    r +
                                                    "' method"
                                            )))),
                                    m
                                );
                            var i = f(o, e.iterator, n.arg);
                            if ("throw" === i.type)
                                return (
                                    (n.method = "throw"),
                                    (n.arg = i.arg),
                                    (n.delegate = null),
                                    m
                                );
                            var c = i.arg;
                            return c
                                ? c.done
                                    ? ((n[e.resultName] = c.value),
                                      (n.next = e.nextLoc),
                                      "return" !== n.method &&
                                          ((n.method = "next"), (n.arg = t)),
                                      (n.delegate = null),
                                      m)
                                    : c
                                : ((n.method = "throw"),
                                  (n.arg = new TypeError(
                                      "iterator result is not an object"
                                  )),
                                  (n.delegate = null),
                                  m);
                        }
                        function A(t) {
                            var e = { tryLoc: t[0] };
                            1 in t && (e.catchLoc = t[1]),
                                2 in t &&
                                    ((e.finallyLoc = t[2]),
                                    (e.afterLoc = t[3])),
                                this.tryEntries.push(e);
                        }
                        function I(t) {
                            var e = t.completion || {};
                            (e.type = "normal"),
                                delete e.arg,
                                (t.completion = e);
                        }
                        function P(t) {
                            (this.tryEntries = [{ tryLoc: "root" }]),
                                t.forEach(A, this),
                                this.reset(!0);
                        }
                        function j(e) {
                            if (e || "" === e) {
                                var n = e[c];
                                if (n) return n.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var o = -1,
                                        i = function n() {
                                            for (; ++o < e.length; )
                                                if (r.call(e, o))
                                                    return (
                                                        (n.value = e[o]),
                                                        (n.done = !1),
                                                        n
                                                    );
                                            return (
                                                (n.value = t), (n.done = !0), n
                                            );
                                        };
                                    return (i.next = i);
                                }
                            }
                            throw new TypeError(E(e) + " is not iterable");
                        }
                        return (
                            (b.prototype = x),
                            o(O, "constructor", { value: x, configurable: !0 }),
                            o(x, "constructor", { value: b, configurable: !0 }),
                            (b.displayName = u(x, s, "GeneratorFunction")),
                            (e.isGeneratorFunction = function (t) {
                                var e = "function" == typeof t && t.constructor;
                                return (
                                    !!e &&
                                    (e === b ||
                                        "GeneratorFunction" ===
                                            (e.displayName || e.name))
                                );
                            }),
                            (e.mark = function (t) {
                                return (
                                    Object.setPrototypeOf
                                        ? Object.setPrototypeOf(t, x)
                                        : ((t.__proto__ = x),
                                          u(t, s, "GeneratorFunction")),
                                    (t.prototype = Object.create(O)),
                                    t
                                );
                            }),
                            (e.awrap = function (t) {
                                return { __await: t };
                            }),
                            S(T.prototype),
                            u(T.prototype, a, function () {
                                return this;
                            }),
                            (e.AsyncIterator = T),
                            (e.async = function (t, n, r, o, i) {
                                void 0 === i && (i = Promise);
                                var c = new T(l(t, n, r, o), i);
                                return e.isGeneratorFunction(n)
                                    ? c
                                    : c.next().then(function (t) {
                                          return t.done ? t.value : c.next();
                                      });
                            }),
                            S(O),
                            u(O, s, "Generator"),
                            u(O, c, function () {
                                return this;
                            }),
                            u(O, "toString", function () {
                                return "[object Generator]";
                            }),
                            (e.keys = function (t) {
                                var e = Object(t),
                                    n = [];
                                for (var r in e) n.push(r);
                                return (
                                    n.reverse(),
                                    function t() {
                                        for (; n.length; ) {
                                            var r = n.pop();
                                            if (r in e)
                                                return (
                                                    (t.value = r),
                                                    (t.done = !1),
                                                    t
                                                );
                                        }
                                        return (t.done = !0), t;
                                    }
                                );
                            }),
                            (e.values = j),
                            (P.prototype = {
                                constructor: P,
                                reset: function (e) {
                                    if (
                                        ((this.prev = 0),
                                        (this.next = 0),
                                        (this.sent = this._sent = t),
                                        (this.done = !1),
                                        (this.delegate = null),
                                        (this.method = "next"),
                                        (this.arg = t),
                                        this.tryEntries.forEach(I),
                                        !e)
                                    )
                                        for (var n in this)
                                            "t" === n.charAt(0) &&
                                                r.call(this, n) &&
                                                !isNaN(+n.slice(1)) &&
                                                (this[n] = t);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval;
                                },
                                dispatchException: function (e) {
                                    if (this.done) throw e;
                                    var n = this;
                                    function o(r, o) {
                                        return (
                                            (a.type = "throw"),
                                            (a.arg = e),
                                            (n.next = r),
                                            o &&
                                                ((n.method = "next"),
                                                (n.arg = t)),
                                            !!o
                                        );
                                    }
                                    for (
                                        var i = this.tryEntries.length - 1;
                                        i >= 0;
                                        --i
                                    ) {
                                        var c = this.tryEntries[i],
                                            a = c.completion;
                                        if ("root" === c.tryLoc)
                                            return o("end");
                                        if (c.tryLoc <= this.prev) {
                                            var s = r.call(c, "catchLoc"),
                                                u = r.call(c, "finallyLoc");
                                            if (s && u) {
                                                if (this.prev < c.catchLoc)
                                                    return o(c.catchLoc, !0);
                                                if (this.prev < c.finallyLoc)
                                                    return o(c.finallyLoc);
                                            } else if (s) {
                                                if (this.prev < c.catchLoc)
                                                    return o(c.catchLoc, !0);
                                            } else {
                                                if (!u)
                                                    throw new Error(
                                                        "try statement without catch or finally"
                                                    );
                                                if (this.prev < c.finallyLoc)
                                                    return o(c.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (t, e) {
                                    for (
                                        var n = this.tryEntries.length - 1;
                                        n >= 0;
                                        --n
                                    ) {
                                        var o = this.tryEntries[n];
                                        if (
                                            o.tryLoc <= this.prev &&
                                            r.call(o, "finallyLoc") &&
                                            this.prev < o.finallyLoc
                                        ) {
                                            var i = o;
                                            break;
                                        }
                                    }
                                    i &&
                                        ("break" === t || "continue" === t) &&
                                        i.tryLoc <= e &&
                                        e <= i.finallyLoc &&
                                        (i = null);
                                    var c = i ? i.completion : {};
                                    return (
                                        (c.type = t),
                                        (c.arg = e),
                                        i
                                            ? ((this.method = "next"),
                                              (this.next = i.finallyLoc),
                                              m)
                                            : this.complete(c)
                                    );
                                },
                                complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return (
                                        "break" === t.type ||
                                        "continue" === t.type
                                            ? (this.next = t.arg)
                                            : "return" === t.type
                                            ? ((this.rval = this.arg = t.arg),
                                              (this.method = "return"),
                                              (this.next = "end"))
                                            : "normal" === t.type &&
                                              e &&
                                              (this.next = e),
                                        m
                                    );
                                },
                                finish: function (t) {
                                    for (
                                        var e = this.tryEntries.length - 1;
                                        e >= 0;
                                        --e
                                    ) {
                                        var n = this.tryEntries[e];
                                        if (n.finallyLoc === t)
                                            return (
                                                this.complete(
                                                    n.completion,
                                                    n.afterLoc
                                                ),
                                                I(n),
                                                m
                                            );
                                    }
                                },
                                catch: function (t) {
                                    for (
                                        var e = this.tryEntries.length - 1;
                                        e >= 0;
                                        --e
                                    ) {
                                        var n = this.tryEntries[e];
                                        if (n.tryLoc === t) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var o = r.arg;
                                                I(n);
                                            }
                                            return o;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (e, n, r) {
                                    return (
                                        (this.delegate = {
                                            iterator: j(e),
                                            resultName: n,
                                            nextLoc: r,
                                        }),
                                        "next" === this.method &&
                                            (this.arg = t),
                                        m
                                    );
                                },
                            }),
                            e
                        );
                    }
                    function g(t, e, n) {
                        return (
                            (e = O(e)) in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = n),
                            t
                        );
                    }
                    function b(t, e, n, r, o, i, c) {
                        try {
                            var a = t[i](c),
                                s = a.value;
                        } catch (t) {
                            return void n(t);
                        }
                        a.done ? e(s) : Promise.resolve(s).then(r, o);
                    }
                    function x(t) {
                        return function () {
                            var e = this,
                                n = arguments;
                            return new Promise(function (r, o) {
                                var i = t.apply(e, n);
                                function c(t) {
                                    b(i, r, o, c, a, "next", t);
                                }
                                function a(t) {
                                    b(i, r, o, c, a, "throw", t);
                                }
                                c(void 0);
                            });
                        };
                    }
                    function w(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    }
                    function $(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(t, O(r.key), r);
                        }
                    }
                    function k(t, e, n) {
                        return (
                            e && $(t.prototype, e),
                            n && $(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1,
                            }),
                            t
                        );
                    }
                    function O(t) {
                        var e = (function (t, e) {
                            if ("object" != E(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, "string");
                                if ("object" != E(r)) return r;
                                throw new TypeError(
                                    "@@toPrimitive must return a primitive value."
                                );
                            }
                            return String(t);
                        })(t);
                        return "symbol" == E(e) ? e : String(e);
                    }
                    function E(t) {
                        return (
                            (E =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t &&
                                              "function" == typeof Symbol &&
                                              t.constructor === Symbol &&
                                              t !== Symbol.prototype
                                              ? "symbol"
                                              : typeof t;
                                      }),
                            E(t)
                        );
                    }
                    (i = function () {
                        "use strict";
                        var t = function (t) {
                                return (
                                    (function (t) {
                                        return !!t && "object" === E(t);
                                    })(t) &&
                                    !(function (t) {
                                        var n =
                                            Object.prototype.toString.call(t);
                                        return (
                                            "[object RegExp]" === n ||
                                            "[object Date]" === n ||
                                            (function (t) {
                                                return t.$$typeof === e;
                                            })(t)
                                        );
                                    })(t)
                                );
                            },
                            e =
                                "function" == typeof Symbol && Symbol.for
                                    ? Symbol.for("react.element")
                                    : 60103;
                        function n(t, e) {
                            return !1 !== e.clone && e.isMergeableObject(t)
                                ? s(((n = t), Array.isArray(n) ? [] : {}), t, e)
                                : t;
                            var n;
                        }
                        function r(t, e, r) {
                            return t.concat(e).map(function (t) {
                                return n(t, r);
                            });
                        }
                        function o(t) {
                            return Object.keys(t).concat(
                                (function (t) {
                                    return Object.getOwnPropertySymbols
                                        ? Object.getOwnPropertySymbols(
                                              t
                                          ).filter(function (e) {
                                              return Object.propertyIsEnumerable.call(
                                                  t,
                                                  e
                                              );
                                          })
                                        : [];
                                })(t)
                            );
                        }
                        function i(t, e) {
                            try {
                                return e in t;
                            } catch (t) {
                                return !1;
                            }
                        }
                        function s(e, c, a) {
                            ((a = a || {}).arrayMerge = a.arrayMerge || r),
                                (a.isMergeableObject =
                                    a.isMergeableObject || t),
                                (a.cloneUnlessOtherwiseSpecified = n);
                            var u = Array.isArray(c);
                            return u === Array.isArray(e)
                                ? u
                                    ? a.arrayMerge(e, c, a)
                                    : (function (t, e, r) {
                                          var c = {};
                                          return (
                                              r.isMergeableObject(t) &&
                                                  o(t).forEach(function (e) {
                                                      c[e] = n(t[e], r);
                                                  }),
                                              o(e).forEach(function (o) {
                                                  (function (t, e) {
                                                      return (
                                                          i(t, e) &&
                                                          !(
                                                              Object.hasOwnProperty.call(
                                                                  t,
                                                                  e
                                                              ) &&
                                                              Object.propertyIsEnumerable.call(
                                                                  t,
                                                                  e
                                                              )
                                                          )
                                                      );
                                                  })(t, o) ||
                                                      (i(t, o) &&
                                                      r.isMergeableObject(e[o])
                                                          ? (c[o] = (function (
                                                                t,
                                                                e
                                                            ) {
                                                                if (
                                                                    !e.customMerge
                                                                )
                                                                    return s;
                                                                var n =
                                                                    e.customMerge(
                                                                        t
                                                                    );
                                                                return "function" ==
                                                                    typeof n
                                                                    ? n
                                                                    : s;
                                                            })(o, r)(
                                                                t[o],
                                                                e[o],
                                                                r
                                                            ))
                                                          : (c[o] = n(
                                                                e[o],
                                                                r
                                                            )));
                                              }),
                                              c
                                          );
                                      })(e, c, a)
                                : n(c, a);
                        }
                        s.all = function (t, e) {
                            if (!Array.isArray(t))
                                throw new Error(
                                    "first argument should be an array"
                                );
                            return t.reduce(function (t, n) {
                                return s(t, n, e);
                            }, {});
                        };
                        var u = s;
                        function p(t) {
                            return t instanceof HTMLElement;
                        }
                        function v(t) {
                            return "function" == typeof t;
                        }
                        function m(t) {
                            return "string" == typeof t;
                        }
                        function b(t) {
                            return void 0 === t;
                        }
                        var $ = (function () {
                            function t() {
                                w(this, t);
                            }
                            return (
                                k(t, [
                                    {
                                        key: "on",
                                        value: function (t, e, n) {
                                            var r =
                                                arguments.length > 3 &&
                                                void 0 !== arguments[3] &&
                                                arguments[3];
                                            return (
                                                b(this.bindings) &&
                                                    (this.bindings = {}),
                                                b(this.bindings[t]) &&
                                                    (this.bindings[t] = []),
                                                this.bindings[t].push({
                                                    handler: e,
                                                    ctx: n,
                                                    once: r,
                                                }),
                                                this
                                            );
                                        },
                                    },
                                    {
                                        key: "once",
                                        value: function (t, e, n) {
                                            return this.on(t, e, n, !0);
                                        },
                                    },
                                    {
                                        key: "off",
                                        value: function (t, e) {
                                            var n = this;
                                            return (
                                                b(this.bindings) ||
                                                    b(this.bindings[t]) ||
                                                    (b(e)
                                                        ? delete this.bindings[
                                                              t
                                                          ]
                                                        : this.bindings[
                                                              t
                                                          ].forEach(function (
                                                              r,
                                                              o
                                                          ) {
                                                              r.handler === e &&
                                                                  n.bindings[
                                                                      t
                                                                  ].splice(
                                                                      o,
                                                                      1
                                                                  );
                                                          })),
                                                this
                                            );
                                        },
                                    },
                                    {
                                        key: "trigger",
                                        value: function (t) {
                                            for (
                                                var e = this,
                                                    n = arguments.length,
                                                    r = new Array(
                                                        n > 1 ? n - 1 : 0
                                                    ),
                                                    o = 1;
                                                o < n;
                                                o++
                                            )
                                                r[o - 1] = arguments[o];
                                            return (
                                                !b(this.bindings) &&
                                                    this.bindings[t] &&
                                                    this.bindings[t].forEach(
                                                        function (n, o) {
                                                            var i = n.ctx,
                                                                c = n.handler,
                                                                a = n.once,
                                                                s = i || e;
                                                            c.apply(s, r),
                                                                a &&
                                                                    e.bindings[
                                                                        t
                                                                    ].splice(
                                                                        o,
                                                                        1
                                                                    );
                                                        }
                                                    ),
                                                this
                                            );
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                        function O(t) {
                            for (
                                var e = Object.getOwnPropertyNames(
                                        t.constructor.prototype
                                    ),
                                    n = 0;
                                n < e.length;
                                n++
                            ) {
                                var r = e[n],
                                    o = t[r];
                                "constructor" !== r &&
                                    "function" == typeof o &&
                                    (t[r] = o.bind(t));
                            }
                            return t;
                        }
                        function S(t) {
                            return m(t) && "" !== t
                                ? "-" !== t.charAt(t.length - 1)
                                    ? "".concat(t, "-")
                                    : t
                                : "";
                        }
                        function T(t) {
                            return null == t || !t.element || !t.on;
                        }
                        function _() {
                            var t = Date.now();
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                                /[xy]/g,
                                function (e) {
                                    var n = (t + 16 * Math.random()) % 16 | 0;
                                    return (
                                        (t = Math.floor(t / 16)),
                                        ("x" == e ? n : (3 & n) | 8).toString(
                                            16
                                        )
                                    );
                                }
                            );
                        }
                        function L() {
                            return (
                                (L = Object.assign
                                    ? Object.assign.bind()
                                    : function (t) {
                                          for (
                                              var e = 1;
                                              e < arguments.length;
                                              e++
                                          ) {
                                              var n = arguments[e];
                                              for (var r in n)
                                                  Object.prototype.hasOwnProperty.call(
                                                      n,
                                                      r
                                                  ) && (t[r] = n[r]);
                                          }
                                          return t;
                                      }),
                                L.apply(this, arguments)
                            );
                        }
                        function A(t, e) {
                            if (null == t) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++)
                                (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o;
                        }
                        var I = Math.min,
                            P = Math.max,
                            j = Math.round,
                            C = Math.floor,
                            R = function (t) {
                                return { x: t, y: t };
                            },
                            M = {
                                left: "right",
                                right: "left",
                                bottom: "top",
                                top: "bottom",
                            },
                            F = { start: "end", end: "start" };
                        function D(t, e, n) {
                            return P(t, I(e, n));
                        }
                        function H(t, e) {
                            return "function" == typeof t ? t(e) : t;
                        }
                        function N(t) {
                            return t.split("-")[0];
                        }
                        function B(t) {
                            return t.split("-")[1];
                        }
                        function V(t) {
                            return "x" === t ? "y" : "x";
                        }
                        function W(t) {
                            return "y" === t ? "height" : "width";
                        }
                        function q(t) {
                            return ["top", "bottom"].includes(N(t)) ? "y" : "x";
                        }
                        function G(t) {
                            return V(q(t));
                        }
                        function z(t, e, n) {
                            void 0 === n && (n = !1);
                            var r = B(t),
                                o = G(t),
                                i = W(o),
                                c =
                                    "x" === o
                                        ? r === (n ? "end" : "start")
                                            ? "right"
                                            : "left"
                                        : "start" === r
                                        ? "bottom"
                                        : "top";
                            return (
                                e.reference[i] > e.floating[i] && (c = Z(c)),
                                [c, Z(c)]
                            );
                        }
                        function U(t) {
                            var e = Z(t);
                            return [Y(t), e, Y(e)];
                        }
                        function Y(t) {
                            return t.replace(/start|end/g, function (t) {
                                return F[t];
                            });
                        }
                        function X(t, e, n, r) {
                            var o = B(t),
                                i = (function (t, e, n) {
                                    var r = ["left", "right"],
                                        o = ["right", "left"];
                                    switch (t) {
                                        case "top":
                                        case "bottom":
                                            return n ? (e ? o : r) : e ? r : o;
                                        case "left":
                                        case "right":
                                            return e
                                                ? ["top", "bottom"]
                                                : ["bottom", "top"];
                                        default:
                                            return [];
                                    }
                                })(N(t), "start" === n, r);
                            return (
                                o &&
                                    ((i = i.map(function (t) {
                                        return t + "-" + o;
                                    })),
                                    e && (i = i.concat(i.map(Y)))),
                                i
                            );
                        }
                        function Z(t) {
                            return t.replace(
                                /left|right|bottom|top/g,
                                function (t) {
                                    return M[t];
                                }
                            );
                        }
                        function K(t) {
                            return "number" != typeof t
                                ? (function (t) {
                                      return L(
                                          {
                                              top: 0,
                                              right: 0,
                                              bottom: 0,
                                              left: 0,
                                          },
                                          t
                                      );
                                  })(t)
                                : { top: t, right: t, bottom: t, left: t };
                        }
                        function J(t) {
                            return L({}, t, {
                                top: t.y,
                                left: t.x,
                                right: t.x + t.width,
                                bottom: t.y + t.height,
                            });
                        }
                        var Q = [
                                "mainAxis",
                                "crossAxis",
                                "fallbackPlacements",
                                "fallbackStrategy",
                                "fallbackAxisSideDirection",
                                "flipAlignment",
                            ],
                            tt = ["mainAxis", "crossAxis", "limiter"];
                        function et(t, e, n) {
                            var r,
                                o = t.reference,
                                i = t.floating,
                                c = q(e),
                                a = G(e),
                                s = W(a),
                                u = N(e),
                                l = "y" === c,
                                f = o.x + o.width / 2 - i.width / 2,
                                p = o.y + o.height / 2 - i.height / 2,
                                h = o[s] / 2 - i[s] / 2;
                            switch (u) {
                                case "top":
                                    r = { x: f, y: o.y - i.height };
                                    break;
                                case "bottom":
                                    r = { x: f, y: o.y + o.height };
                                    break;
                                case "right":
                                    r = { x: o.x + o.width, y: p };
                                    break;
                                case "left":
                                    r = { x: o.x - i.width, y: p };
                                    break;
                                default:
                                    r = { x: o.x, y: o.y };
                            }
                            switch (B(e)) {
                                case "start":
                                    r[a] -= h * (n && l ? -1 : 1);
                                    break;
                                case "end":
                                    r[a] += h * (n && l ? -1 : 1);
                            }
                            return r;
                        }
                        var nt = (function () {
                            var t = x(
                                y().mark(function t(e, n, r) {
                                    var o,
                                        i,
                                        c,
                                        a,
                                        s,
                                        u,
                                        l,
                                        f,
                                        p,
                                        h,
                                        d,
                                        v,
                                        m,
                                        b,
                                        x,
                                        w,
                                        $,
                                        k,
                                        O,
                                        S,
                                        T,
                                        _,
                                        A,
                                        I,
                                        P,
                                        j;
                                    return y().wrap(function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (
                                                        (o = r.placement),
                                                        (i =
                                                            void 0 === o
                                                                ? "bottom"
                                                                : o),
                                                        (c = r.strategy),
                                                        (a =
                                                            void 0 === c
                                                                ? "absolute"
                                                                : c),
                                                        (s = r.middleware),
                                                        (u =
                                                            void 0 === s
                                                                ? []
                                                                : s),
                                                        (l = r.platform),
                                                        (f = u.filter(Boolean)),
                                                        (t.next = 4),
                                                        null == l.isRTL
                                                            ? void 0
                                                            : l.isRTL(n)
                                                    );
                                                case 4:
                                                    return (
                                                        (p = t.sent),
                                                        (t.next = 7),
                                                        l.getElementRects({
                                                            reference: e,
                                                            floating: n,
                                                            strategy: a,
                                                        })
                                                    );
                                                case 7:
                                                    (h = t.sent),
                                                        (d = et(h, i, p)),
                                                        (v = d.x),
                                                        (m = d.y),
                                                        (b = i),
                                                        (x = {}),
                                                        (w = 0),
                                                        ($ = 0);
                                                case 13:
                                                    if (!($ < f.length)) {
                                                        t.next = 46;
                                                        break;
                                                    }
                                                    return (
                                                        (k = f[$]),
                                                        (O = k.name),
                                                        (S = k.fn),
                                                        (t.next = 17),
                                                        S({
                                                            x: v,
                                                            y: m,
                                                            initialPlacement: i,
                                                            placement: b,
                                                            strategy: a,
                                                            middlewareData: x,
                                                            rects: h,
                                                            platform: l,
                                                            elements: {
                                                                reference: e,
                                                                floating: n,
                                                            },
                                                        })
                                                    );
                                                case 17:
                                                    if (
                                                        ((T = t.sent),
                                                        (_ = T.x),
                                                        (A = T.y),
                                                        (I = T.data),
                                                        (P = T.reset),
                                                        (v = null != _ ? _ : v),
                                                        (m = null != A ? A : m),
                                                        (x = L(
                                                            {},
                                                            x,
                                                            g(
                                                                {},
                                                                O,
                                                                L({}, x[O], I)
                                                            )
                                                        )),
                                                        !(P && w <= 50))
                                                    ) {
                                                        t.next = 43;
                                                        break;
                                                    }
                                                    if (
                                                        (w++, "object" !== E(P))
                                                    ) {
                                                        t.next = 41;
                                                        break;
                                                    }
                                                    if (
                                                        (P.placement &&
                                                            (b = P.placement),
                                                        !P.rects)
                                                    ) {
                                                        t.next = 38;
                                                        break;
                                                    }
                                                    if (!0 !== P.rects) {
                                                        t.next = 36;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 33),
                                                        l.getElementRects({
                                                            reference: e,
                                                            floating: n,
                                                            strategy: a,
                                                        })
                                                    );
                                                case 33:
                                                    (t.t0 = t.sent),
                                                        (t.next = 37);
                                                    break;
                                                case 36:
                                                    t.t0 = P.rects;
                                                case 37:
                                                    h = t.t0;
                                                case 38:
                                                    (j = et(h, b, p)),
                                                        (v = j.x),
                                                        (m = j.y);
                                                case 41:
                                                    return (
                                                        ($ = -1),
                                                        t.abrupt("continue", 43)
                                                    );
                                                case 43:
                                                    $++, (t.next = 13);
                                                    break;
                                                case 46:
                                                    return t.abrupt("return", {
                                                        x: v,
                                                        y: m,
                                                        placement: b,
                                                        strategy: a,
                                                        middlewareData: x,
                                                    });
                                                case 47:
                                                case "end":
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function (e, n, r) {
                                return t.apply(this, arguments);
                            };
                        })();
                        function rt(t, e) {
                            return ot.apply(this, arguments);
                        }
                        function ot() {
                            return (
                                (ot = x(
                                    y().mark(function t(e, n) {
                                        var r,
                                            o,
                                            i,
                                            c,
                                            a,
                                            s,
                                            u,
                                            l,
                                            f,
                                            p,
                                            h,
                                            d,
                                            v,
                                            m,
                                            g,
                                            b,
                                            x,
                                            w,
                                            $,
                                            k,
                                            O,
                                            E,
                                            S,
                                            T,
                                            _;
                                        return y().wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (
                                                            void 0 === n &&
                                                                (n = {}),
                                                            (o = e.x),
                                                            (i = e.y),
                                                            (c = e.platform),
                                                            (a = e.rects),
                                                            (s = e.elements),
                                                            (u = e.strategy),
                                                            (l = H(n, e)),
                                                            (f = l.boundary),
                                                            (p =
                                                                void 0 === f
                                                                    ? "clippingAncestors"
                                                                    : f),
                                                            (h =
                                                                l.rootBoundary),
                                                            (d =
                                                                void 0 === h
                                                                    ? "viewport"
                                                                    : h),
                                                            (v =
                                                                l.elementContext),
                                                            (m =
                                                                void 0 === v
                                                                    ? "floating"
                                                                    : v),
                                                            (g = l.altBoundary),
                                                            (b =
                                                                void 0 !== g &&
                                                                g),
                                                            (x = l.padding),
                                                            (w = K(
                                                                void 0 === x
                                                                    ? 0
                                                                    : x
                                                            )),
                                                            ($ =
                                                                "floating" === m
                                                                    ? "reference"
                                                                    : "floating"),
                                                            (k = s[b ? $ : m]),
                                                            (t.t0 = J),
                                                            (t.t1 = c),
                                                            (t.next = 10),
                                                            null == c.isElement
                                                                ? void 0
                                                                : c.isElement(k)
                                                        );
                                                    case 10:
                                                        if (
                                                            ((t.t2 = r =
                                                                t.sent),
                                                            null == t.t2)
                                                        ) {
                                                            t.next = 15;
                                                            break;
                                                        }
                                                        (t.t3 = r),
                                                            (t.next = 16);
                                                        break;
                                                    case 15:
                                                        t.t3 = !0;
                                                    case 16:
                                                        if (!t.t3) {
                                                            t.next = 20;
                                                            break;
                                                        }
                                                        (t.t4 = k),
                                                            (t.next = 26);
                                                        break;
                                                    case 20:
                                                        if (
                                                            ((t.t5 =
                                                                k.contextElement),
                                                            t.t5)
                                                        ) {
                                                            t.next = 25;
                                                            break;
                                                        }
                                                        return (
                                                            (t.next = 24),
                                                            null ==
                                                            c.getDocumentElement
                                                                ? void 0
                                                                : c.getDocumentElement(
                                                                      s.floating
                                                                  )
                                                        );
                                                    case 24:
                                                        t.t5 = t.sent;
                                                    case 25:
                                                        t.t4 = t.t5;
                                                    case 26:
                                                        return (
                                                            (t.t6 = t.t4),
                                                            (t.t7 = p),
                                                            (t.t8 = d),
                                                            (t.t9 = u),
                                                            (t.t10 = {
                                                                element: t.t6,
                                                                boundary: t.t7,
                                                                rootBoundary:
                                                                    t.t8,
                                                                strategy: t.t9,
                                                            }),
                                                            (t.next = 33),
                                                            t.t1.getClippingRect.call(
                                                                t.t1,
                                                                t.t10
                                                            )
                                                        );
                                                    case 33:
                                                        return (
                                                            (t.t11 = t.sent),
                                                            (O = (0, t.t0)(
                                                                t.t11
                                                            )),
                                                            (E =
                                                                "floating" === m
                                                                    ? L(
                                                                          {},
                                                                          a.floating,
                                                                          {
                                                                              x: o,
                                                                              y: i,
                                                                          }
                                                                      )
                                                                    : a.reference),
                                                            (t.next = 38),
                                                            null ==
                                                            c.getOffsetParent
                                                                ? void 0
                                                                : c.getOffsetParent(
                                                                      s.floating
                                                                  )
                                                        );
                                                    case 38:
                                                        return (
                                                            (S = t.sent),
                                                            (t.next = 41),
                                                            null == c.isElement
                                                                ? void 0
                                                                : c.isElement(S)
                                                        );
                                                    case 41:
                                                        if (!t.sent) {
                                                            t.next = 50;
                                                            break;
                                                        }
                                                        return (
                                                            (t.next = 44),
                                                            null == c.getScale
                                                                ? void 0
                                                                : c.getScale(S)
                                                        );
                                                    case 44:
                                                        if (
                                                            ((t.t13 = t.sent),
                                                            t.t13)
                                                        ) {
                                                            t.next = 47;
                                                            break;
                                                        }
                                                        t.t13 = { x: 1, y: 1 };
                                                    case 47:
                                                        (t.t12 = t.t13),
                                                            (t.next = 51);
                                                        break;
                                                    case 50:
                                                        t.t12 = { x: 1, y: 1 };
                                                    case 51:
                                                        if (
                                                            ((T = t.t12),
                                                            (t.t14 = J),
                                                            !c.convertOffsetParentRelativeRectToViewportRelativeRect)
                                                        ) {
                                                            t.next = 59;
                                                            break;
                                                        }
                                                        return (
                                                            (t.next = 56),
                                                            c.convertOffsetParentRelativeRectToViewportRelativeRect(
                                                                {
                                                                    rect: E,
                                                                    offsetParent:
                                                                        S,
                                                                    strategy: u,
                                                                }
                                                            )
                                                        );
                                                    case 56:
                                                        (t.t15 = t.sent),
                                                            (t.next = 60);
                                                        break;
                                                    case 59:
                                                        t.t15 = E;
                                                    case 60:
                                                        return (
                                                            (t.t16 = t.t15),
                                                            (_ = (0, t.t14)(
                                                                t.t16
                                                            )),
                                                            t.abrupt("return", {
                                                                top:
                                                                    (O.top -
                                                                        _.top +
                                                                        w.top) /
                                                                    T.y,
                                                                bottom:
                                                                    (_.bottom -
                                                                        O.bottom +
                                                                        w.bottom) /
                                                                    T.y,
                                                                left:
                                                                    (O.left -
                                                                        _.left +
                                                                        w.left) /
                                                                    T.x,
                                                                right:
                                                                    (_.right -
                                                                        O.right +
                                                                        w.right) /
                                                                    T.x,
                                                            })
                                                        );
                                                    case 63:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                )),
                                ot.apply(this, arguments)
                            );
                        }
                        var it = function (t) {
                            return (
                                void 0 === t && (t = {}),
                                {
                                    options: t,
                                    fn: function (e) {
                                        var n = e.x,
                                            r = e.y,
                                            o = e.placement,
                                            i = e.rects,
                                            c = e.middlewareData,
                                            a = H(t, e),
                                            s = a.offset,
                                            u = void 0 === s ? 0 : s,
                                            l = a.mainAxis,
                                            f = void 0 === l || l,
                                            p = a.crossAxis,
                                            h = void 0 === p || p,
                                            d = { x: n, y: r },
                                            v = q(o),
                                            m = V(v),
                                            y = d[m],
                                            b = d[v],
                                            x = H(u, e),
                                            w =
                                                "number" == typeof x
                                                    ? {
                                                          mainAxis: x,
                                                          crossAxis: 0,
                                                      }
                                                    : L(
                                                          {
                                                              mainAxis: 0,
                                                              crossAxis: 0,
                                                          },
                                                          x
                                                      );
                                        if (f) {
                                            var $ =
                                                    "y" === m
                                                        ? "height"
                                                        : "width",
                                                k =
                                                    i.reference[m] -
                                                    i.floating[$] +
                                                    w.mainAxis,
                                                O =
                                                    i.reference[m] +
                                                    i.reference[$] -
                                                    w.mainAxis;
                                            y < k ? (y = k) : y > O && (y = O);
                                        }
                                        if (h) {
                                            var E,
                                                S,
                                                T =
                                                    "y" === m
                                                        ? "width"
                                                        : "height",
                                                _ = ["top", "left"].includes(
                                                    N(o)
                                                ),
                                                A =
                                                    i.reference[v] -
                                                    i.floating[T] +
                                                    ((_ &&
                                                        (null == (E = c.offset)
                                                            ? void 0
                                                            : E[v])) ||
                                                        0) +
                                                    (_ ? 0 : w.crossAxis),
                                                I =
                                                    i.reference[v] +
                                                    i.reference[T] +
                                                    (_
                                                        ? 0
                                                        : (null ==
                                                          (S = c.offset)
                                                              ? void 0
                                                              : S[v]) || 0) -
                                                    (_ ? w.crossAxis : 0);
                                            b < A ? (b = A) : b > I && (b = I);
                                        }
                                        return g(g({}, m, y), v, b);
                                    },
                                }
                            );
                        };
                        function ct(t) {
                            return ut(t)
                                ? (t.nodeName || "").toLowerCase()
                                : "#document";
                        }
                        function at(t) {
                            var e;
                            return (
                                (null == t || null == (e = t.ownerDocument)
                                    ? void 0
                                    : e.defaultView) || window
                            );
                        }
                        function st(t) {
                            var e;
                            return null ==
                                (e =
                                    (ut(t) ? t.ownerDocument : t.document) ||
                                    window.document)
                                ? void 0
                                : e.documentElement;
                        }
                        function ut(t) {
                            return t instanceof Node || t instanceof at(t).Node;
                        }
                        function lt(t) {
                            return (
                                t instanceof Element ||
                                t instanceof at(t).Element
                            );
                        }
                        function ft(t) {
                            return (
                                t instanceof HTMLElement ||
                                t instanceof at(t).HTMLElement
                            );
                        }
                        function pt(t) {
                            return (
                                "undefined" != typeof ShadowRoot &&
                                (t instanceof ShadowRoot ||
                                    t instanceof at(t).ShadowRoot)
                            );
                        }
                        function ht(t) {
                            var e = gt(t),
                                n = e.overflow,
                                r = e.overflowX,
                                o = e.overflowY,
                                i = e.display;
                            return (
                                /auto|scroll|overlay|hidden|clip/.test(
                                    n + o + r
                                ) && !["inline", "contents"].includes(i)
                            );
                        }
                        function dt(t) {
                            return ["table", "td", "th"].includes(ct(t));
                        }
                        function vt(t) {
                            var e = mt(),
                                n = gt(t);
                            return (
                                "none" !== n.transform ||
                                "none" !== n.perspective ||
                                (!!n.containerType &&
                                    "normal" !== n.containerType) ||
                                (!e &&
                                    !!n.backdropFilter &&
                                    "none" !== n.backdropFilter) ||
                                (!e && !!n.filter && "none" !== n.filter) ||
                                ["transform", "perspective", "filter"].some(
                                    function (t) {
                                        return (n.willChange || "").includes(t);
                                    }
                                ) ||
                                ["paint", "layout", "strict", "content"].some(
                                    function (t) {
                                        return (n.contain || "").includes(t);
                                    }
                                )
                            );
                        }
                        function mt() {
                            return (
                                !("undefined" == typeof CSS || !CSS.supports) &&
                                CSS.supports("-webkit-backdrop-filter", "none")
                            );
                        }
                        function yt(t) {
                            return ["html", "body", "#document"].includes(
                                ct(t)
                            );
                        }
                        function gt(t) {
                            return at(t).getComputedStyle(t);
                        }
                        function bt(t) {
                            return lt(t)
                                ? {
                                      scrollLeft: t.scrollLeft,
                                      scrollTop: t.scrollTop,
                                  }
                                : {
                                      scrollLeft: t.pageXOffset,
                                      scrollTop: t.pageYOffset,
                                  };
                        }
                        function xt(t) {
                            if ("html" === ct(t)) return t;
                            var e =
                                t.assignedSlot ||
                                t.parentNode ||
                                (pt(t) && t.host) ||
                                st(t);
                            return pt(e) ? e.host : e;
                        }
                        function wt(t) {
                            var e = xt(t);
                            return yt(e)
                                ? t.ownerDocument
                                    ? t.ownerDocument.body
                                    : t.body
                                : ft(e) && ht(e)
                                ? e
                                : wt(e);
                        }
                        function $t(t, e) {
                            var n;
                            void 0 === e && (e = []);
                            var r = wt(t),
                                o =
                                    r ===
                                    (null == (n = t.ownerDocument)
                                        ? void 0
                                        : n.body),
                                i = at(r);
                            return o
                                ? e.concat(
                                      i,
                                      i.visualViewport || [],
                                      ht(r) ? r : []
                                  )
                                : e.concat(r, $t(r));
                        }
                        function kt(t) {
                            var e = gt(t),
                                n = parseFloat(e.width) || 0,
                                r = parseFloat(e.height) || 0,
                                o = ft(t),
                                i = o ? t.offsetWidth : n,
                                c = o ? t.offsetHeight : r,
                                a = j(n) !== i || j(r) !== c;
                            return (
                                a && ((n = i), (r = c)),
                                { width: n, height: r, $: a }
                            );
                        }
                        function Ot(t) {
                            return lt(t) ? t : t.contextElement;
                        }
                        function Et(t) {
                            var e = Ot(t);
                            if (!ft(e)) return R(1);
                            var n = e.getBoundingClientRect(),
                                r = kt(e),
                                o = r.width,
                                i = r.height,
                                c = r.$,
                                a = (c ? j(n.width) : n.width) / o,
                                s = (c ? j(n.height) : n.height) / i;
                            return (
                                (a && Number.isFinite(a)) || (a = 1),
                                (s && Number.isFinite(s)) || (s = 1),
                                { x: a, y: s }
                            );
                        }
                        var St = R(0);
                        function Tt(t) {
                            var e = at(t);
                            return mt() && e.visualViewport
                                ? {
                                      x: e.visualViewport.offsetLeft,
                                      y: e.visualViewport.offsetTop,
                                  }
                                : St;
                        }
                        function _t(t, e, n, r) {
                            void 0 === e && (e = !1), void 0 === n && (n = !1);
                            var o = t.getBoundingClientRect(),
                                i = Ot(t),
                                c = R(1);
                            e && (r ? lt(r) && (c = Et(r)) : (c = Et(t)));
                            var a = (function (t, e, n) {
                                    return (
                                        void 0 === e && (e = !1),
                                        !(!n || (e && n !== at(t))) && e
                                    );
                                })(i, n, r)
                                    ? Tt(i)
                                    : R(0),
                                s = (o.left + a.x) / c.x,
                                u = (o.top + a.y) / c.y,
                                l = o.width / c.x,
                                f = o.height / c.y;
                            if (i)
                                for (
                                    var p = at(i),
                                        h = r && lt(r) ? at(r) : r,
                                        d = p.frameElement;
                                    d && r && h !== p;

                                ) {
                                    var v = Et(d),
                                        m = d.getBoundingClientRect(),
                                        y = gt(d),
                                        g =
                                            m.left +
                                            (d.clientLeft +
                                                parseFloat(y.paddingLeft)) *
                                                v.x,
                                        b =
                                            m.top +
                                            (d.clientTop +
                                                parseFloat(y.paddingTop)) *
                                                v.y;
                                    (s *= v.x),
                                        (u *= v.y),
                                        (l *= v.x),
                                        (f *= v.y),
                                        (s += g),
                                        (u += b),
                                        (d = at(d).frameElement);
                                }
                            return J({ width: l, height: f, x: s, y: u });
                        }
                        function Lt(t) {
                            return _t(st(t)).left + bt(t).scrollLeft;
                        }
                        function At(t, e, n) {
                            var r;
                            if ("viewport" === e)
                                r = (function (t, e) {
                                    var n = at(t),
                                        r = st(t),
                                        o = n.visualViewport,
                                        i = r.clientWidth,
                                        c = r.clientHeight,
                                        a = 0,
                                        s = 0;
                                    if (o) {
                                        (i = o.width), (c = o.height);
                                        var u = mt();
                                        (!u || (u && "fixed" === e)) &&
                                            ((a = o.offsetLeft),
                                            (s = o.offsetTop));
                                    }
                                    return { width: i, height: c, x: a, y: s };
                                })(t, n);
                            else if ("document" === e)
                                r = (function (t) {
                                    var e = st(t),
                                        n = bt(t),
                                        r = t.ownerDocument.body,
                                        o = P(
                                            e.scrollWidth,
                                            e.clientWidth,
                                            r.scrollWidth,
                                            r.clientWidth
                                        ),
                                        i = P(
                                            e.scrollHeight,
                                            e.clientHeight,
                                            r.scrollHeight,
                                            r.clientHeight
                                        ),
                                        c = -n.scrollLeft + Lt(t),
                                        a = -n.scrollTop;
                                    return (
                                        "rtl" === gt(r).direction &&
                                            (c +=
                                                P(
                                                    e.clientWidth,
                                                    r.clientWidth
                                                ) - o),
                                        { width: o, height: i, x: c, y: a }
                                    );
                                })(st(t));
                            else if (lt(e))
                                r = (function (t, e) {
                                    var n = _t(t, !0, "fixed" === e),
                                        r = n.top + t.clientTop,
                                        o = n.left + t.clientLeft,
                                        i = ft(t) ? Et(t) : R(1);
                                    return {
                                        width: t.clientWidth * i.x,
                                        height: t.clientHeight * i.y,
                                        x: o * i.x,
                                        y: r * i.y,
                                    };
                                })(e, n);
                            else {
                                var o = Tt(t);
                                r = L({}, e, { x: e.x - o.x, y: e.y - o.y });
                            }
                            return J(r);
                        }
                        function It(t, e) {
                            var n = xt(t);
                            return (
                                !(n === e || !lt(n) || yt(n)) &&
                                ("fixed" === gt(n).position || It(n, e))
                            );
                        }
                        function Pt(t, e, n) {
                            var r = ft(e),
                                o = st(e),
                                i = "fixed" === n,
                                c = _t(t, !0, i, e),
                                a = { scrollLeft: 0, scrollTop: 0 },
                                s = R(0);
                            if (r || (!r && !i))
                                if (
                                    (("body" !== ct(e) || ht(o)) && (a = bt(e)),
                                    r)
                                ) {
                                    var u = _t(e, !0, i, e);
                                    (s.x = u.x + e.clientLeft),
                                        (s.y = u.y + e.clientTop);
                                } else o && (s.x = Lt(o));
                            return {
                                x: c.left + a.scrollLeft - s.x,
                                y: c.top + a.scrollTop - s.y,
                                width: c.width,
                                height: c.height,
                            };
                        }
                        function jt(t, e) {
                            return ft(t) && "fixed" !== gt(t).position
                                ? e
                                    ? e(t)
                                    : t.offsetParent
                                : null;
                        }
                        function Ct(t, e) {
                            var n = at(t);
                            if (!ft(t)) return n;
                            for (
                                var r = jt(t, e);
                                r && dt(r) && "static" === gt(r).position;

                            )
                                r = jt(r, e);
                            return r &&
                                ("html" === ct(r) ||
                                    ("body" === ct(r) &&
                                        "static" === gt(r).position &&
                                        !vt(r)))
                                ? n
                                : r ||
                                      (function (t) {
                                          for (
                                              var e = xt(t);
                                              ft(e) && !yt(e);

                                          ) {
                                              if (vt(e)) return e;
                                              e = xt(e);
                                          }
                                          return null;
                                      })(t) ||
                                      n;
                        }
                        var Rt = (function () {
                                var t = x(
                                    y().mark(function t(e) {
                                        var n, r, o, i, c;
                                        return y().wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (
                                                                (n =
                                                                    e.reference),
                                                                (r =
                                                                    e.floating),
                                                                (o =
                                                                    e.strategy),
                                                                (i =
                                                                    this
                                                                        .getOffsetParent ||
                                                                    Ct),
                                                                (c =
                                                                    this
                                                                        .getDimensions),
                                                                (t.t0 = Pt),
                                                                (t.t1 = n),
                                                                (t.next = 7),
                                                                i(r)
                                                            );
                                                        case 7:
                                                            return (
                                                                (t.t2 = t.sent),
                                                                (t.t3 = o),
                                                                (t.t4 = (0,
                                                                t.t0)(
                                                                    t.t1,
                                                                    t.t2,
                                                                    t.t3
                                                                )),
                                                                (t.t5 = L),
                                                                (t.t6 = {
                                                                    x: 0,
                                                                    y: 0,
                                                                }),
                                                                (t.next = 14),
                                                                c(r)
                                                            );
                                                        case 14:
                                                            return (
                                                                (t.t7 = t.sent),
                                                                (t.t8 = (0,
                                                                t.t5)(
                                                                    t.t6,
                                                                    t.t7
                                                                )),
                                                                t.abrupt(
                                                                    "return",
                                                                    {
                                                                        reference:
                                                                            t.t4,
                                                                        floating:
                                                                            t.t8,
                                                                    }
                                                                )
                                                            );
                                                        case 17:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            this
                                        );
                                    })
                                );
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                            Mt = {
                                convertOffsetParentRelativeRectToViewportRelativeRect:
                                    function (t) {
                                        var e = t.rect,
                                            n = t.offsetParent,
                                            r = t.strategy,
                                            o = ft(n),
                                            i = st(n);
                                        if (n === i) return e;
                                        var c = { scrollLeft: 0, scrollTop: 0 },
                                            a = R(1),
                                            s = R(0);
                                        if (
                                            (o || (!o && "fixed" !== r)) &&
                                            (("body" !== ct(n) || ht(i)) &&
                                                (c = bt(n)),
                                            ft(n))
                                        ) {
                                            var u = _t(n);
                                            (a = Et(n)),
                                                (s.x = u.x + n.clientLeft),
                                                (s.y = u.y + n.clientTop);
                                        }
                                        return {
                                            width: e.width * a.x,
                                            height: e.height * a.y,
                                            x:
                                                e.x * a.x -
                                                c.scrollLeft * a.x +
                                                s.x,
                                            y:
                                                e.y * a.y -
                                                c.scrollTop * a.y +
                                                s.y,
                                        };
                                    },
                                getDocumentElement: st,
                                getClippingRect: function (t) {
                                    var e = t.element,
                                        n = t.boundary,
                                        r = t.rootBoundary,
                                        o = t.strategy,
                                        i =
                                            "clippingAncestors" === n
                                                ? (function (t, e) {
                                                      var n = e.get(t);
                                                      if (n) return n;
                                                      for (
                                                          var r = $t(t).filter(
                                                                  function (t) {
                                                                      return (
                                                                          lt(
                                                                              t
                                                                          ) &&
                                                                          "body" !==
                                                                              ct(
                                                                                  t
                                                                              )
                                                                      );
                                                                  }
                                                              ),
                                                              o = null,
                                                              i =
                                                                  "fixed" ===
                                                                  gt(t)
                                                                      .position,
                                                              c = i ? xt(t) : t;
                                                          lt(c) && !yt(c);

                                                      ) {
                                                          var a = gt(c),
                                                              s = vt(c);
                                                          s ||
                                                              "fixed" !==
                                                                  a.position ||
                                                              (o = null),
                                                              (
                                                                  i
                                                                      ? !s && !o
                                                                      : (!s &&
                                                                            "static" ===
                                                                                a.position &&
                                                                            o &&
                                                                            [
                                                                                "absolute",
                                                                                "fixed",
                                                                            ].includes(
                                                                                o.position
                                                                            )) ||
                                                                        (ht(
                                                                            c
                                                                        ) &&
                                                                            !s &&
                                                                            It(
                                                                                t,
                                                                                c
                                                                            ))
                                                              )
                                                                  ? (r =
                                                                        r.filter(
                                                                            function (
                                                                                t
                                                                            ) {
                                                                                return (
                                                                                    t !==
                                                                                    c
                                                                                );
                                                                            }
                                                                        ))
                                                                  : (o = a),
                                                              (c = xt(c));
                                                      }
                                                      return e.set(t, r), r;
                                                  })(e, this._c)
                                                : [].concat(n),
                                        c = [].concat(d(i), [r]),
                                        a = c[0],
                                        s = c.reduce(function (t, n) {
                                            var r = At(e, n, o);
                                            return (
                                                (t.top = P(r.top, t.top)),
                                                (t.right = I(r.right, t.right)),
                                                (t.bottom = I(
                                                    r.bottom,
                                                    t.bottom
                                                )),
                                                (t.left = P(r.left, t.left)),
                                                t
                                            );
                                        }, At(e, a, o));
                                    return {
                                        width: s.right - s.left,
                                        height: s.bottom - s.top,
                                        x: s.left,
                                        y: s.top,
                                    };
                                },
                                getOffsetParent: Ct,
                                getElementRects: Rt,
                                getClientRects: function (t) {
                                    return Array.from(t.getClientRects());
                                },
                                getDimensions: function (t) {
                                    return kt(t);
                                },
                                getScale: Et,
                                isElement: lt,
                                isRTL: function (t) {
                                    return "rtl" === gt(t).direction;
                                },
                            };
                        function Ft(t) {
                            t.cleanup && t.cleanup();
                            var e = t._getResolvedAttachToOptions(),
                                n = e.element,
                                r = (function (t, e) {
                                    var n = {
                                            strategy: "absolute",
                                            middleware: [],
                                        },
                                        r = (function (t) {
                                            return (
                                                !(!t.options.arrow || !t.el) &&
                                                t.el.querySelector(
                                                    ".shepherd-arrow"
                                                )
                                            );
                                        })(e);
                                    return (
                                        T(t) ||
                                            (n.middleware.push(
                                                (function (t) {
                                                    return (
                                                        void 0 === t &&
                                                            (t = {}),
                                                        {
                                                            name: "flip",
                                                            options: t,
                                                            fn: function (e) {
                                                                return x(
                                                                    y().mark(
                                                                        function n() {
                                                                            var r,
                                                                                o,
                                                                                i,
                                                                                c,
                                                                                a,
                                                                                s,
                                                                                u,
                                                                                l,
                                                                                f,
                                                                                p,
                                                                                h,
                                                                                v,
                                                                                m,
                                                                                g,
                                                                                b,
                                                                                x,
                                                                                w,
                                                                                $,
                                                                                k,
                                                                                O,
                                                                                E,
                                                                                S,
                                                                                T,
                                                                                _,
                                                                                L,
                                                                                I,
                                                                                P,
                                                                                j,
                                                                                C,
                                                                                R,
                                                                                M,
                                                                                F,
                                                                                D,
                                                                                B,
                                                                                V,
                                                                                W;
                                                                            return y().wrap(
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (n.prev =
                                                                                                n.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (o =
                                                                                                        e.placement),
                                                                                                    (i =
                                                                                                        e.middlewareData),
                                                                                                    (c =
                                                                                                        e.rects),
                                                                                                    (a =
                                                                                                        e.initialPlacement),
                                                                                                    (s =
                                                                                                        e.platform),
                                                                                                    (u =
                                                                                                        e.elements),
                                                                                                    (l =
                                                                                                        H(
                                                                                                            t,
                                                                                                            e
                                                                                                        )),
                                                                                                    (f =
                                                                                                        l.mainAxis),
                                                                                                    (p =
                                                                                                        void 0 ===
                                                                                                            f ||
                                                                                                        f),
                                                                                                    (h =
                                                                                                        l.crossAxis),
                                                                                                    (v =
                                                                                                        void 0 ===
                                                                                                            h ||
                                                                                                        h),
                                                                                                    (m =
                                                                                                        l.fallbackPlacements),
                                                                                                    (g =
                                                                                                        l.fallbackStrategy),
                                                                                                    (b =
                                                                                                        void 0 ===
                                                                                                        g
                                                                                                            ? "bestFit"
                                                                                                            : g),
                                                                                                    (x =
                                                                                                        l.fallbackAxisSideDirection),
                                                                                                    (w =
                                                                                                        void 0 ===
                                                                                                        x
                                                                                                            ? "none"
                                                                                                            : x),
                                                                                                    ($ =
                                                                                                        l.flipAlignment),
                                                                                                    (k =
                                                                                                        void 0 ===
                                                                                                            $ ||
                                                                                                        $),
                                                                                                    (O =
                                                                                                        A(
                                                                                                            l,
                                                                                                            Q
                                                                                                        )),
                                                                                                    (E =
                                                                                                        N(
                                                                                                            o
                                                                                                        )),
                                                                                                    (S =
                                                                                                        N(
                                                                                                            a
                                                                                                        ) ===
                                                                                                        a),
                                                                                                    (n.next = 6),
                                                                                                    null ==
                                                                                                    s.isRTL
                                                                                                        ? void 0
                                                                                                        : s.isRTL(
                                                                                                              u.floating
                                                                                                          )
                                                                                                );
                                                                                            case 6:
                                                                                                return (
                                                                                                    (T =
                                                                                                        n.sent),
                                                                                                    (_ =
                                                                                                        m ||
                                                                                                        (S ||
                                                                                                        !k
                                                                                                            ? [
                                                                                                                  Z(
                                                                                                                      a
                                                                                                                  ),
                                                                                                              ]
                                                                                                            : U(
                                                                                                                  a
                                                                                                              ))),
                                                                                                    m ||
                                                                                                        "none" ===
                                                                                                            w ||
                                                                                                        _.push.apply(
                                                                                                            _,
                                                                                                            d(
                                                                                                                X(
                                                                                                                    a,
                                                                                                                    k,
                                                                                                                    w,
                                                                                                                    T
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                    (L =
                                                                                                        [
                                                                                                            a,
                                                                                                        ].concat(
                                                                                                            d(
                                                                                                                _
                                                                                                            )
                                                                                                        )),
                                                                                                    (n.next = 12),
                                                                                                    rt(
                                                                                                        e,
                                                                                                        O
                                                                                                    )
                                                                                                );
                                                                                            case 12:
                                                                                                if (
                                                                                                    ((I =
                                                                                                        n.sent),
                                                                                                    (P =
                                                                                                        []),
                                                                                                    (j =
                                                                                                        (null ==
                                                                                                        (r =
                                                                                                            i.flip)
                                                                                                            ? void 0
                                                                                                            : r.overflows) ||
                                                                                                        []),
                                                                                                    p &&
                                                                                                        P.push(
                                                                                                            I[
                                                                                                                E
                                                                                                            ]
                                                                                                        ),
                                                                                                    v &&
                                                                                                        ((C =
                                                                                                            z(
                                                                                                                o,
                                                                                                                c,
                                                                                                                T
                                                                                                            )),
                                                                                                        P.push(
                                                                                                            I[
                                                                                                                C[0]
                                                                                                            ],
                                                                                                            I[
                                                                                                                C[1]
                                                                                                            ]
                                                                                                        )),
                                                                                                    (j =
                                                                                                        [].concat(
                                                                                                            d(
                                                                                                                j
                                                                                                            ),
                                                                                                            [
                                                                                                                {
                                                                                                                    placement:
                                                                                                                        o,
                                                                                                                    overflows:
                                                                                                                        P,
                                                                                                                },
                                                                                                            ]
                                                                                                        )),
                                                                                                    P.every(
                                                                                                        function (
                                                                                                            t
                                                                                                        ) {
                                                                                                            return (
                                                                                                                t <=
                                                                                                                0
                                                                                                            );
                                                                                                        }
                                                                                                    ))
                                                                                                ) {
                                                                                                    n.next = 35;
                                                                                                    break;
                                                                                                }
                                                                                                if (
                                                                                                    ((F =
                                                                                                        ((null ==
                                                                                                        (R =
                                                                                                            i.flip)
                                                                                                            ? void 0
                                                                                                            : R.index) ||
                                                                                                            0) +
                                                                                                        1),
                                                                                                    !(D =
                                                                                                        L[
                                                                                                            F
                                                                                                        ]))
                                                                                                ) {
                                                                                                    n.next = 23;
                                                                                                    break;
                                                                                                }
                                                                                                return n.abrupt(
                                                                                                    "return",
                                                                                                    {
                                                                                                        data: {
                                                                                                            index: F,
                                                                                                            overflows:
                                                                                                                j,
                                                                                                        },
                                                                                                        reset: {
                                                                                                            placement:
                                                                                                                D,
                                                                                                        },
                                                                                                    }
                                                                                                );
                                                                                            case 23:
                                                                                                if (
                                                                                                    (B =
                                                                                                        null ==
                                                                                                        (M =
                                                                                                            j
                                                                                                                .filter(
                                                                                                                    function (
                                                                                                                        t
                                                                                                                    ) {
                                                                                                                        return (
                                                                                                                            t
                                                                                                                                .overflows[0] <=
                                                                                                                            0
                                                                                                                        );
                                                                                                                    }
                                                                                                                )
                                                                                                                .sort(
                                                                                                                    function (
                                                                                                                        t,
                                                                                                                        e
                                                                                                                    ) {
                                                                                                                        return (
                                                                                                                            t
                                                                                                                                .overflows[1] -
                                                                                                                            e
                                                                                                                                .overflows[1]
                                                                                                                        );
                                                                                                                    }
                                                                                                                )[0])
                                                                                                            ? void 0
                                                                                                            : M.placement)
                                                                                                ) {
                                                                                                    n.next = 33;
                                                                                                    break;
                                                                                                }
                                                                                                (n.t0 =
                                                                                                    b),
                                                                                                    (n.next =
                                                                                                        "bestFit" ===
                                                                                                        n.t0
                                                                                                            ? 28
                                                                                                            : "initialPlacement" ===
                                                                                                              n.t0
                                                                                                            ? 31
                                                                                                            : 33);
                                                                                                break;
                                                                                            case 28:
                                                                                                return (
                                                                                                    (W =
                                                                                                        null ==
                                                                                                        (V =
                                                                                                            j
                                                                                                                .map(
                                                                                                                    function (
                                                                                                                        t
                                                                                                                    ) {
                                                                                                                        return [
                                                                                                                            t.placement,
                                                                                                                            t.overflows
                                                                                                                                .filter(
                                                                                                                                    function (
                                                                                                                                        t
                                                                                                                                    ) {
                                                                                                                                        return (
                                                                                                                                            t >
                                                                                                                                            0
                                                                                                                                        );
                                                                                                                                    }
                                                                                                                                )
                                                                                                                                .reduce(
                                                                                                                                    function (
                                                                                                                                        t,
                                                                                                                                        e
                                                                                                                                    ) {
                                                                                                                                        return (
                                                                                                                                            t +
                                                                                                                                            e
                                                                                                                                        );
                                                                                                                                    },
                                                                                                                                    0
                                                                                                                                ),
                                                                                                                        ];
                                                                                                                    }
                                                                                                                )
                                                                                                                .sort(
                                                                                                                    function (
                                                                                                                        t,
                                                                                                                        e
                                                                                                                    ) {
                                                                                                                        return (
                                                                                                                            t[1] -
                                                                                                                            e[1]
                                                                                                                        );
                                                                                                                    }
                                                                                                                )[0])
                                                                                                            ? void 0
                                                                                                            : V[0]),
                                                                                                    W &&
                                                                                                        (B =
                                                                                                            W),
                                                                                                    n.abrupt(
                                                                                                        "break",
                                                                                                        33
                                                                                                    )
                                                                                                );
                                                                                            case 31:
                                                                                                return (
                                                                                                    (B =
                                                                                                        a),
                                                                                                    n.abrupt(
                                                                                                        "break",
                                                                                                        33
                                                                                                    )
                                                                                                );
                                                                                            case 33:
                                                                                                if (
                                                                                                    o ===
                                                                                                    B
                                                                                                ) {
                                                                                                    n.next = 35;
                                                                                                    break;
                                                                                                }
                                                                                                return n.abrupt(
                                                                                                    "return",
                                                                                                    {
                                                                                                        reset: {
                                                                                                            placement:
                                                                                                                B,
                                                                                                        },
                                                                                                    }
                                                                                                );
                                                                                            case 35:
                                                                                                return n.abrupt(
                                                                                                    "return",
                                                                                                    {}
                                                                                                );
                                                                                            case 36:
                                                                                            case "end":
                                                                                                return n.stop();
                                                                                        }
                                                                                },
                                                                                n
                                                                            );
                                                                        }
                                                                    )
                                                                )();
                                                            },
                                                        }
                                                    );
                                                })(),
                                                (function (t) {
                                                    return (
                                                        void 0 === t &&
                                                            (t = {}),
                                                        {
                                                            name: "shift",
                                                            options: t,
                                                            fn: function (e) {
                                                                return x(
                                                                    y().mark(
                                                                        function n() {
                                                                            var r,
                                                                                o,
                                                                                i,
                                                                                c,
                                                                                a,
                                                                                s,
                                                                                u,
                                                                                l,
                                                                                f,
                                                                                p,
                                                                                h,
                                                                                d,
                                                                                v,
                                                                                m,
                                                                                b,
                                                                                x,
                                                                                w,
                                                                                $,
                                                                                k,
                                                                                O,
                                                                                E,
                                                                                S,
                                                                                T,
                                                                                _;
                                                                            return y().wrap(
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (n.prev =
                                                                                                n.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (r =
                                                                                                        e.x),
                                                                                                    (o =
                                                                                                        e.y),
                                                                                                    (i =
                                                                                                        e.placement),
                                                                                                    (c =
                                                                                                        H(
                                                                                                            t,
                                                                                                            e
                                                                                                        )),
                                                                                                    (a =
                                                                                                        c.mainAxis),
                                                                                                    (s =
                                                                                                        void 0 ===
                                                                                                            a ||
                                                                                                        a),
                                                                                                    (u =
                                                                                                        c.crossAxis),
                                                                                                    (l =
                                                                                                        void 0 !==
                                                                                                            u &&
                                                                                                        u),
                                                                                                    (f =
                                                                                                        c.limiter),
                                                                                                    (p =
                                                                                                        void 0 ===
                                                                                                        f
                                                                                                            ? {
                                                                                                                  fn: function (
                                                                                                                      t
                                                                                                                  ) {
                                                                                                                      return {
                                                                                                                          x: t.x,
                                                                                                                          y: t.y,
                                                                                                                      };
                                                                                                                  },
                                                                                                              }
                                                                                                            : f),
                                                                                                    (h =
                                                                                                        A(
                                                                                                            c,
                                                                                                            tt
                                                                                                        )),
                                                                                                    (d =
                                                                                                        {
                                                                                                            x: r,
                                                                                                            y: o,
                                                                                                        }),
                                                                                                    (n.next = 5),
                                                                                                    rt(
                                                                                                        e,
                                                                                                        h
                                                                                                    )
                                                                                                );
                                                                                            case 5:
                                                                                                return (
                                                                                                    (v =
                                                                                                        n.sent),
                                                                                                    (m =
                                                                                                        q(
                                                                                                            N(
                                                                                                                i
                                                                                                            )
                                                                                                        )),
                                                                                                    (b =
                                                                                                        V(
                                                                                                            m
                                                                                                        )),
                                                                                                    (x =
                                                                                                        d[
                                                                                                            b
                                                                                                        ]),
                                                                                                    (w =
                                                                                                        d[
                                                                                                            m
                                                                                                        ]),
                                                                                                    s &&
                                                                                                        (($ =
                                                                                                            "y" ===
                                                                                                            b
                                                                                                                ? "bottom"
                                                                                                                : "right"),
                                                                                                        (k =
                                                                                                            x +
                                                                                                            v[
                                                                                                                "y" ===
                                                                                                                b
                                                                                                                    ? "top"
                                                                                                                    : "left"
                                                                                                            ]),
                                                                                                        (O =
                                                                                                            x -
                                                                                                            v[
                                                                                                                $
                                                                                                            ]),
                                                                                                        (x =
                                                                                                            D(
                                                                                                                k,
                                                                                                                x,
                                                                                                                O
                                                                                                            ))),
                                                                                                    l &&
                                                                                                        ((E =
                                                                                                            "y" ===
                                                                                                            m
                                                                                                                ? "bottom"
                                                                                                                : "right"),
                                                                                                        (S =
                                                                                                            w +
                                                                                                            v[
                                                                                                                "y" ===
                                                                                                                m
                                                                                                                    ? "top"
                                                                                                                    : "left"
                                                                                                            ]),
                                                                                                        (T =
                                                                                                            w -
                                                                                                            v[
                                                                                                                E
                                                                                                            ]),
                                                                                                        (w =
                                                                                                            D(
                                                                                                                S,
                                                                                                                w,
                                                                                                                T
                                                                                                            ))),
                                                                                                    (_ =
                                                                                                        p.fn(
                                                                                                            L(
                                                                                                                {},
                                                                                                                e,
                                                                                                                g(
                                                                                                                    g(
                                                                                                                        {},
                                                                                                                        b,
                                                                                                                        x
                                                                                                                    ),
                                                                                                                    m,
                                                                                                                    w
                                                                                                                )
                                                                                                            )
                                                                                                        )),
                                                                                                    n.abrupt(
                                                                                                        "return",
                                                                                                        L(
                                                                                                            {},
                                                                                                            _,
                                                                                                            {
                                                                                                                data: {
                                                                                                                    x:
                                                                                                                        _.x -
                                                                                                                        r,
                                                                                                                    y:
                                                                                                                        _.y -
                                                                                                                        o,
                                                                                                                },
                                                                                                            }
                                                                                                        )
                                                                                                    )
                                                                                                );
                                                                                            case 14:
                                                                                            case "end":
                                                                                                return n.stop();
                                                                                        }
                                                                                },
                                                                                n
                                                                            );
                                                                        }
                                                                    )
                                                                )();
                                                            },
                                                        }
                                                    );
                                                })({
                                                    limiter: it(),
                                                    crossAxis: !0,
                                                })
                                            ),
                                            r &&
                                                n.middleware.push(
                                                    (function (t) {
                                                        return {
                                                            name: "arrow",
                                                            options: t,
                                                            fn: function (e) {
                                                                return x(
                                                                    y().mark(
                                                                        function n() {
                                                                            var r,
                                                                                o,
                                                                                i,
                                                                                c,
                                                                                a,
                                                                                s,
                                                                                u,
                                                                                l,
                                                                                f,
                                                                                p,
                                                                                h,
                                                                                d,
                                                                                v,
                                                                                m,
                                                                                b,
                                                                                x,
                                                                                w,
                                                                                $,
                                                                                k,
                                                                                O,
                                                                                E,
                                                                                S,
                                                                                T,
                                                                                _,
                                                                                L,
                                                                                A,
                                                                                P,
                                                                                j,
                                                                                C,
                                                                                R,
                                                                                M,
                                                                                F,
                                                                                N;
                                                                            return y().wrap(
                                                                                function (
                                                                                    n
                                                                                ) {
                                                                                    for (;;)
                                                                                        switch (
                                                                                            (n.prev =
                                                                                                n.next)
                                                                                        ) {
                                                                                            case 0:
                                                                                                if (
                                                                                                    ((r =
                                                                                                        e.x),
                                                                                                    (o =
                                                                                                        e.y),
                                                                                                    (i =
                                                                                                        e.placement),
                                                                                                    (c =
                                                                                                        e.rects),
                                                                                                    (a =
                                                                                                        e.platform),
                                                                                                    (s =
                                                                                                        e.elements),
                                                                                                    (u =
                                                                                                        H(
                                                                                                            t,
                                                                                                            e
                                                                                                        ) ||
                                                                                                        {}),
                                                                                                    (l =
                                                                                                        u.element),
                                                                                                    (f =
                                                                                                        u.padding),
                                                                                                    (p =
                                                                                                        void 0 ===
                                                                                                        f
                                                                                                            ? 0
                                                                                                            : f),
                                                                                                    null !=
                                                                                                        l)
                                                                                                ) {
                                                                                                    n.next = 4;
                                                                                                    break;
                                                                                                }
                                                                                                return n.abrupt(
                                                                                                    "return",
                                                                                                    {}
                                                                                                );
                                                                                            case 4:
                                                                                                return (
                                                                                                    (h =
                                                                                                        K(
                                                                                                            p
                                                                                                        )),
                                                                                                    (d =
                                                                                                        {
                                                                                                            x: r,
                                                                                                            y: o,
                                                                                                        }),
                                                                                                    (v =
                                                                                                        G(
                                                                                                            i
                                                                                                        )),
                                                                                                    (m =
                                                                                                        W(
                                                                                                            v
                                                                                                        )),
                                                                                                    (n.next = 10),
                                                                                                    a.getDimensions(
                                                                                                        l
                                                                                                    )
                                                                                                );
                                                                                            case 10:
                                                                                                return (
                                                                                                    (b =
                                                                                                        n.sent),
                                                                                                    (w =
                                                                                                        (x =
                                                                                                            "y" ===
                                                                                                            v)
                                                                                                            ? "top"
                                                                                                            : "left"),
                                                                                                    ($ =
                                                                                                        x
                                                                                                            ? "bottom"
                                                                                                            : "right"),
                                                                                                    (k =
                                                                                                        x
                                                                                                            ? "clientHeight"
                                                                                                            : "clientWidth"),
                                                                                                    (O =
                                                                                                        c
                                                                                                            .reference[
                                                                                                            m
                                                                                                        ] +
                                                                                                        c
                                                                                                            .reference[
                                                                                                            v
                                                                                                        ] -
                                                                                                        d[
                                                                                                            v
                                                                                                        ] -
                                                                                                        c
                                                                                                            .floating[
                                                                                                            m
                                                                                                        ]),
                                                                                                    (E =
                                                                                                        d[
                                                                                                            v
                                                                                                        ] -
                                                                                                        c
                                                                                                            .reference[
                                                                                                            v
                                                                                                        ]),
                                                                                                    (n.next = 19),
                                                                                                    null ==
                                                                                                    a.getOffsetParent
                                                                                                        ? void 0
                                                                                                        : a.getOffsetParent(
                                                                                                              l
                                                                                                          )
                                                                                                );
                                                                                            case 19:
                                                                                                if (
                                                                                                    ((S =
                                                                                                        n.sent),
                                                                                                    (T =
                                                                                                        S
                                                                                                            ? S[
                                                                                                                  k
                                                                                                              ]
                                                                                                            : 0),
                                                                                                    (n.t0 =
                                                                                                        !T),
                                                                                                    n.t0)
                                                                                                ) {
                                                                                                    n.next = 26;
                                                                                                    break;
                                                                                                }
                                                                                                return (
                                                                                                    (n.next = 25),
                                                                                                    null ==
                                                                                                    a.isElement
                                                                                                        ? void 0
                                                                                                        : a.isElement(
                                                                                                              S
                                                                                                          )
                                                                                                );
                                                                                            case 25:
                                                                                                n.t0 =
                                                                                                    !n.sent;
                                                                                            case 26:
                                                                                                if (
                                                                                                    !n.t0
                                                                                                ) {
                                                                                                    n.next = 28;
                                                                                                    break;
                                                                                                }
                                                                                                T =
                                                                                                    s
                                                                                                        .floating[
                                                                                                        k
                                                                                                    ] ||
                                                                                                    c
                                                                                                        .floating[
                                                                                                        m
                                                                                                    ];
                                                                                            case 28:
                                                                                                return (
                                                                                                    (_ =
                                                                                                        O /
                                                                                                            2 -
                                                                                                        E /
                                                                                                            2),
                                                                                                    (L =
                                                                                                        T /
                                                                                                            2 -
                                                                                                        b[
                                                                                                            m
                                                                                                        ] /
                                                                                                            2 -
                                                                                                        1),
                                                                                                    (A =
                                                                                                        I(
                                                                                                            h[
                                                                                                                w
                                                                                                            ],
                                                                                                            L
                                                                                                        )),
                                                                                                    (P =
                                                                                                        I(
                                                                                                            h[
                                                                                                                $
                                                                                                            ],
                                                                                                            L
                                                                                                        )),
                                                                                                    (j =
                                                                                                        A),
                                                                                                    (C =
                                                                                                        T -
                                                                                                        b[
                                                                                                            m
                                                                                                        ] -
                                                                                                        P),
                                                                                                    (R =
                                                                                                        T /
                                                                                                            2 -
                                                                                                        b[
                                                                                                            m
                                                                                                        ] /
                                                                                                            2 +
                                                                                                        _),
                                                                                                    (M =
                                                                                                        D(
                                                                                                            j,
                                                                                                            R,
                                                                                                            C
                                                                                                        )),
                                                                                                    (F =
                                                                                                        null !=
                                                                                                            B(
                                                                                                                i
                                                                                                            ) &&
                                                                                                        R !=
                                                                                                            M &&
                                                                                                        c
                                                                                                            .reference[
                                                                                                            m
                                                                                                        ] /
                                                                                                            2 -
                                                                                                            (R <
                                                                                                            j
                                                                                                                ? A
                                                                                                                : P) -
                                                                                                            b[
                                                                                                                m
                                                                                                            ] /
                                                                                                                2 <
                                                                                                            0),
                                                                                                    (N =
                                                                                                        F
                                                                                                            ? R <
                                                                                                              j
                                                                                                                ? j -
                                                                                                                  R
                                                                                                                : C -
                                                                                                                  R
                                                                                                            : 0),
                                                                                                    n.abrupt(
                                                                                                        "return",
                                                                                                        g(
                                                                                                            g(
                                                                                                                {},
                                                                                                                v,
                                                                                                                d[
                                                                                                                    v
                                                                                                                ] -
                                                                                                                    N
                                                                                                            ),
                                                                                                            "data",
                                                                                                            g(
                                                                                                                g(
                                                                                                                    {},
                                                                                                                    v,
                                                                                                                    M
                                                                                                                ),
                                                                                                                "centerOffset",
                                                                                                                R -
                                                                                                                    M +
                                                                                                                    N
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                );
                                                                                            case 39:
                                                                                            case "end":
                                                                                                return n.stop();
                                                                                        }
                                                                                },
                                                                                n
                                                                            );
                                                                        }
                                                                    )
                                                                )();
                                                            },
                                                        };
                                                    })({ element: r })
                                                ),
                                            (n.placement = t.on)),
                                        u(e.options.floatingUIOptions || {}, n)
                                    );
                                })(e, t),
                                o = T(e);
                            return (
                                o &&
                                    ((n = document.body),
                                    t.shepherdElementComponent
                                        .getElement()
                                        .classList.add("shepherd-centered")),
                                (t.cleanup = (function (t, e, n, r) {
                                    void 0 === r && (r = {});
                                    var o = r,
                                        i = o.ancestorScroll,
                                        c = void 0 === i || i,
                                        a = o.ancestorResize,
                                        s = void 0 === a || a,
                                        u = o.elementResize,
                                        l =
                                            void 0 === u
                                                ? "function" ==
                                                  typeof ResizeObserver
                                                : u,
                                        f = o.layoutShift,
                                        p =
                                            void 0 === f
                                                ? "function" ==
                                                  typeof IntersectionObserver
                                                : f,
                                        v = o.animationFrame,
                                        m = void 0 !== v && v,
                                        y = Ot(t),
                                        g =
                                            c || s
                                                ? [].concat(
                                                      d(y ? $t(y) : []),
                                                      d($t(e))
                                                  )
                                                : [];
                                    g.forEach(function (t) {
                                        c &&
                                            t.addEventListener("scroll", n, {
                                                passive: !0,
                                            }),
                                            s &&
                                                t.addEventListener("resize", n);
                                    });
                                    var b,
                                        x =
                                            y && p
                                                ? (function (t, e) {
                                                      var n,
                                                          r = null,
                                                          o = st(t);
                                                      function i() {
                                                          clearTimeout(n),
                                                              r &&
                                                                  r.disconnect(),
                                                              (r = null);
                                                      }
                                                      return (
                                                          (function c(a, s) {
                                                              void 0 === a &&
                                                                  (a = !1),
                                                                  void 0 ===
                                                                      s &&
                                                                      (s = 1),
                                                                  i();
                                                              var u =
                                                                      t.getBoundingClientRect(),
                                                                  l = u.left,
                                                                  f = u.top,
                                                                  p = u.width,
                                                                  h = u.height;
                                                              if (
                                                                  (a || e(),
                                                                  p && h)
                                                              ) {
                                                                  var d = {
                                                                          rootMargin:
                                                                              -C(
                                                                                  f
                                                                              ) +
                                                                              "px " +
                                                                              -C(
                                                                                  o.clientWidth -
                                                                                      (l +
                                                                                          p)
                                                                              ) +
                                                                              "px " +
                                                                              -C(
                                                                                  o.clientHeight -
                                                                                      (f +
                                                                                          h)
                                                                              ) +
                                                                              "px " +
                                                                              -C(
                                                                                  l
                                                                              ) +
                                                                              "px",
                                                                          threshold:
                                                                              P(
                                                                                  0,
                                                                                  I(
                                                                                      1,
                                                                                      s
                                                                                  )
                                                                              ) ||
                                                                              1,
                                                                      },
                                                                      v = !0;
                                                                  try {
                                                                      r =
                                                                          new IntersectionObserver(
                                                                              m,
                                                                              L(
                                                                                  {},
                                                                                  d,
                                                                                  {
                                                                                      root: o.ownerDocument,
                                                                                  }
                                                                              )
                                                                          );
                                                                  } catch (t) {
                                                                      r =
                                                                          new IntersectionObserver(
                                                                              m,
                                                                              d
                                                                          );
                                                                  }
                                                                  r.observe(t);
                                                              }
                                                              function m(t) {
                                                                  var e =
                                                                      t[0]
                                                                          .intersectionRatio;
                                                                  if (e !== s) {
                                                                      if (!v)
                                                                          return c();
                                                                      e
                                                                          ? c(
                                                                                !1,
                                                                                e
                                                                            )
                                                                          : (n =
                                                                                setTimeout(
                                                                                    function () {
                                                                                        c(
                                                                                            !1,
                                                                                            1e-7
                                                                                        );
                                                                                    },
                                                                                    100
                                                                                ));
                                                                  }
                                                                  v = !1;
                                                              }
                                                          })(!0),
                                                          i
                                                      );
                                                  })(y, n)
                                                : null,
                                        w = -1,
                                        $ = null;
                                    l &&
                                        (($ = new ResizeObserver(function (t) {
                                            var r = h(t, 1)[0];
                                            r &&
                                                r.target === y &&
                                                $ &&
                                                ($.unobserve(e),
                                                cancelAnimationFrame(w),
                                                (w = requestAnimationFrame(
                                                    function () {
                                                        $ && $.observe(e);
                                                    }
                                                ))),
                                                n();
                                        })),
                                        y && !m && $.observe(y),
                                        $.observe(e));
                                    var k = m ? _t(t) : null;
                                    return (
                                        m &&
                                            (function e() {
                                                var r = _t(t);
                                                !k ||
                                                    (r.x === k.x &&
                                                        r.y === k.y &&
                                                        r.width === k.width &&
                                                        r.height ===
                                                            k.height) ||
                                                    n(),
                                                    (k = r),
                                                    (b =
                                                        requestAnimationFrame(
                                                            e
                                                        ));
                                            })(),
                                        n(),
                                        function () {
                                            g.forEach(function (t) {
                                                c &&
                                                    t.removeEventListener(
                                                        "scroll",
                                                        n
                                                    ),
                                                    s &&
                                                        t.removeEventListener(
                                                            "resize",
                                                            n
                                                        );
                                            }),
                                                x && x(),
                                                $ && $.disconnect(),
                                                ($ = null),
                                                m && cancelAnimationFrame(b);
                                        }
                                    );
                                })(n, t.el, function () {
                                    t.el
                                        ? (function (t, e, n, r) {
                                              var o, i, c, a, s, u;
                                              ((o = t),
                                              (i = e.el),
                                              (c = n),
                                              (a = new Map()),
                                              (s = L({ platform: Mt }, c)),
                                              (u = L({}, s.platform, {
                                                  _c: a,
                                              })),
                                              nt(
                                                  o,
                                                  i,
                                                  L({}, s, { platform: u })
                                              ))
                                                  .then(
                                                      (function (t, e) {
                                                          return function (n) {
                                                              var r = n.x,
                                                                  o = n.y,
                                                                  i =
                                                                      n.placement,
                                                                  c =
                                                                      n.middlewareData;
                                                              return t.el
                                                                  ? (e
                                                                        ? Object.assign(
                                                                              t
                                                                                  .el
                                                                                  .style,
                                                                              {
                                                                                  position:
                                                                                      "fixed",
                                                                                  left: "50%",
                                                                                  top: "50%",
                                                                                  transform:
                                                                                      "translate(-50%, -50%)",
                                                                              }
                                                                          )
                                                                        : Object.assign(
                                                                              t
                                                                                  .el
                                                                                  .style,
                                                                              {
                                                                                  position:
                                                                                      "absolute",
                                                                                  left: "".concat(
                                                                                      r,
                                                                                      "px"
                                                                                  ),
                                                                                  top: "".concat(
                                                                                      o,
                                                                                      "px"
                                                                                  ),
                                                                              }
                                                                          ),
                                                                    (t.el.dataset.popperPlacement =
                                                                        i),
                                                                    (function (
                                                                        t,
                                                                        e
                                                                    ) {
                                                                        var n =
                                                                            t.querySelector(
                                                                                ".shepherd-arrow"
                                                                            );
                                                                        if (
                                                                            n &&
                                                                            e.arrow
                                                                        ) {
                                                                            var r =
                                                                                    e.arrow,
                                                                                o =
                                                                                    r.x,
                                                                                i =
                                                                                    r.y;
                                                                            Object.assign(
                                                                                n.style,
                                                                                {
                                                                                    left:
                                                                                        null !=
                                                                                        o
                                                                                            ? "".concat(
                                                                                                  o,
                                                                                                  "px"
                                                                                              )
                                                                                            : "",
                                                                                    top:
                                                                                        null !=
                                                                                        i
                                                                                            ? "".concat(
                                                                                                  i,
                                                                                                  "px"
                                                                                              )
                                                                                            : "",
                                                                                }
                                                                            );
                                                                        }
                                                                    })(t.el, c),
                                                                    t)
                                                                  : t;
                                                          };
                                                      })(e, r)
                                                  )
                                                  .then(function (t) {
                                                      return new Promise(
                                                          function (e) {
                                                              setTimeout(
                                                                  function () {
                                                                      return e(
                                                                          t
                                                                      );
                                                                  },
                                                                  300
                                                              );
                                                          }
                                                      );
                                                  })
                                                  .then(function (t) {
                                                      t &&
                                                          t.el &&
                                                          t.el.focus({
                                                              preventScroll: !0,
                                                          });
                                                  });
                                          })(n, t, r, o)
                                        : t.cleanup();
                                })),
                                (t.target = e.element),
                                r
                            );
                        }
                        function Dt() {}
                        function Ht(t, e) {
                            for (var n in e) t[n] = e[n];
                            return t;
                        }
                        function Nt(t) {
                            return t();
                        }
                        function Bt() {
                            return Object.create(null);
                        }
                        function Vt(t) {
                            t.forEach(Nt);
                        }
                        function Wt(t) {
                            return "function" == typeof t;
                        }
                        function qt(t, e) {
                            return t != t
                                ? e == e
                                : t !== e ||
                                      (t && "object" === E(t)) ||
                                      "function" == typeof t;
                        }
                        function Gt(t, e) {
                            t.appendChild(e);
                        }
                        function zt(t, e, n) {
                            t.insertBefore(e, n || null);
                        }
                        function Ut(t) {
                            t.parentNode && t.parentNode.removeChild(t);
                        }
                        function Yt(t) {
                            return document.createElement(t);
                        }
                        function Xt(t) {
                            return document.createElementNS(
                                "http://www.w3.org/2000/svg",
                                t
                            );
                        }
                        function Zt(t) {
                            return document.createTextNode(t);
                        }
                        function Kt() {
                            return Zt(" ");
                        }
                        function Jt(t, e, n, r) {
                            return (
                                t.addEventListener(e, n, r),
                                function () {
                                    return t.removeEventListener(e, n, r);
                                }
                            );
                        }
                        function Qt(t, e, n) {
                            null == n
                                ? t.removeAttribute(e)
                                : t.getAttribute(e) !== n &&
                                  t.setAttribute(e, n);
                        }
                        var te,
                            ee = ["width", "height"];
                        function ne(t, e) {
                            var n = Object.getOwnPropertyDescriptors(
                                t.__proto__
                            );
                            for (var r in e)
                                null == e[r]
                                    ? t.removeAttribute(r)
                                    : "style" === r
                                    ? (t.style.cssText = e[r])
                                    : "__value" === r
                                    ? (t.value = t[r] = e[r])
                                    : n[r] && n[r].set && -1 === ee.indexOf(r)
                                    ? (t[r] = e[r])
                                    : Qt(t, r, e[r]);
                        }
                        function re(t, e, n) {
                            t.classList[n ? "add" : "remove"](e);
                        }
                        function oe(t) {
                            te = t;
                        }
                        function ie() {
                            if (!te)
                                throw new Error(
                                    "Function called outside component initialization"
                                );
                            return te;
                        }
                        function ce(t) {
                            ie().$$.after_update.push(t);
                        }
                        var ae = [],
                            se = [],
                            ue = [],
                            le = [],
                            fe = Promise.resolve(),
                            pe = !1;
                        function he(t) {
                            ue.push(t);
                        }
                        var de = new Set(),
                            ve = 0;
                        function me() {
                            if (0 === ve) {
                                var t = te;
                                do {
                                    try {
                                        for (; ve < ae.length; ) {
                                            var e = ae[ve];
                                            ve++, oe(e), ye(e.$$);
                                        }
                                    } catch (t) {
                                        throw ((ae.length = 0), (ve = 0), t);
                                    }
                                    for (
                                        oe(null), ae.length = 0, ve = 0;
                                        se.length;

                                    )
                                        se.pop()();
                                    for (var n = 0; n < ue.length; n += 1) {
                                        var r = ue[n];
                                        de.has(r) || (de.add(r), r());
                                    }
                                    ue.length = 0;
                                } while (ae.length);
                                for (; le.length; ) le.pop()();
                                (pe = !1), de.clear(), oe(t);
                            }
                        }
                        function ye(t) {
                            if (null !== t.fragment) {
                                t.update(), Vt(t.before_update);
                                var e = t.dirty;
                                (t.dirty = [-1]),
                                    t.fragment && t.fragment.p(t.ctx, e),
                                    t.after_update.forEach(he);
                            }
                        }
                        var ge,
                            be = new Set();
                        function xe() {
                            ge = { r: 0, c: [], p: ge };
                        }
                        function we() {
                            ge.r || Vt(ge.c), (ge = ge.p);
                        }
                        function $e(t, e) {
                            t && t.i && (be.delete(t), t.i(e));
                        }
                        function ke(t, e, n, r) {
                            if (t && t.o) {
                                if (be.has(t)) return;
                                be.add(t),
                                    ge.c.push(function () {
                                        be.delete(t), r && (n && t.d(1), r());
                                    }),
                                    t.o(e);
                            } else r && r();
                        }
                        function Oe(t) {
                            t && t.c();
                        }
                        function Ee(t, e, n, r) {
                            var o = t.$$,
                                i = o.fragment,
                                c = o.after_update;
                            i && i.m(e, n),
                                r ||
                                    he(function () {
                                        var e,
                                            n = t.$$.on_mount
                                                .map(Nt)
                                                .filter(Wt);
                                        t.$$.on_destroy
                                            ? (e = t.$$.on_destroy).push.apply(
                                                  e,
                                                  d(n)
                                              )
                                            : Vt(n),
                                            (t.$$.on_mount = []);
                                    }),
                                c.forEach(he);
                        }
                        function Se(t, e) {
                            var n,
                                r,
                                o,
                                i = t.$$;
                            null !== i.fragment &&
                                ((n = i.after_update),
                                (r = []),
                                (o = []),
                                ue.forEach(function (t) {
                                    return -1 === n.indexOf(t)
                                        ? r.push(t)
                                        : o.push(t);
                                }),
                                o.forEach(function (t) {
                                    return t();
                                }),
                                (ue = r),
                                Vt(i.on_destroy),
                                i.fragment && i.fragment.d(e),
                                (i.on_destroy = i.fragment = null),
                                (i.ctx = []));
                        }
                        function Te(t, e, n, r, o, i, c) {
                            var a =
                                    arguments.length > 7 &&
                                    void 0 !== arguments[7]
                                        ? arguments[7]
                                        : [-1],
                                s = te;
                            oe(t);
                            var u = (t.$$ = {
                                fragment: null,
                                ctx: [],
                                props: i,
                                update: Dt,
                                not_equal: o,
                                bound: Bt(),
                                on_mount: [],
                                on_destroy: [],
                                on_disconnect: [],
                                before_update: [],
                                after_update: [],
                                context: new Map(
                                    e.context || (s ? s.$$.context : [])
                                ),
                                callbacks: Bt(),
                                dirty: a,
                                skip_bound: !1,
                                root: e.target || s.$$.root,
                            });
                            c && c(u.root);
                            var l = !1;
                            if (
                                ((u.ctx = n
                                    ? n(t, e.props || {}, function (e, n) {
                                          var r =
                                              !(arguments.length <= 2) &&
                                              arguments.length - 2
                                                  ? arguments.length <= 2
                                                      ? void 0
                                                      : arguments[2]
                                                  : n;
                                          return (
                                              u.ctx &&
                                                  o(u.ctx[e], (u.ctx[e] = r)) &&
                                                  (!u.skip_bound &&
                                                      u.bound[e] &&
                                                      u.bound[e](r),
                                                  l &&
                                                      (function (t, e) {
                                                          -1 ===
                                                              t.$$.dirty[0] &&
                                                              (ae.push(t),
                                                              pe ||
                                                                  ((pe = !0),
                                                                  fe.then(me)),
                                                              t.$$.dirty.fill(
                                                                  0
                                                              )),
                                                              (t.$$.dirty[
                                                                  (e / 31) | 0
                                                              ] |= 1 << e % 31);
                                                      })(t, e)),
                                              n
                                          );
                                      })
                                    : []),
                                u.update(),
                                (l = !0),
                                Vt(u.before_update),
                                (u.fragment = !!r && r(u.ctx)),
                                e.target)
                            ) {
                                if (e.hydrate) {
                                    var f = (function (t) {
                                        return Array.from(t.childNodes);
                                    })(e.target);
                                    u.fragment && u.fragment.l(f),
                                        f.forEach(Ut);
                                } else u.fragment && u.fragment.c();
                                e.intro && $e(t.$$.fragment),
                                    Ee(t, e.target, e.anchor, e.customElement),
                                    me();
                            }
                            oe(s);
                        }
                        var _e = (function () {
                            function t() {
                                w(this, t);
                            }
                            return (
                                k(t, [
                                    {
                                        key: "$destroy",
                                        value: function () {
                                            Se(this, 1), (this.$destroy = Dt);
                                        },
                                    },
                                    {
                                        key: "$on",
                                        value: function (t, e) {
                                            if (!Wt(e)) return Dt;
                                            var n =
                                                this.$$.callbacks[t] ||
                                                (this.$$.callbacks[t] = []);
                                            return (
                                                n.push(e),
                                                function () {
                                                    var t = n.indexOf(e);
                                                    -1 !== t && n.splice(t, 1);
                                                }
                                            );
                                        },
                                    },
                                    {
                                        key: "$set",
                                        value: function (t) {
                                            var e;
                                            this.$$set &&
                                                ((e = t),
                                                0 !== Object.keys(e).length) &&
                                                ((this.$$.skip_bound = !0),
                                                this.$$set(t),
                                                (this.$$.skip_bound = !1));
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                        function Le(t) {
                            var e, n, r, o, i;
                            return {
                                c: function () {
                                    Qt(
                                        (e = Yt("button")),
                                        "aria-label",
                                        (n = t[3] ? t[3] : null)
                                    ),
                                        Qt(
                                            e,
                                            "class",
                                            (r = ""
                                                .concat(
                                                    t[1] || "",
                                                    " shepherd-button "
                                                )
                                                .concat(
                                                    t[4]
                                                        ? "shepherd-button-secondary"
                                                        : ""
                                                ))
                                        ),
                                        (e.disabled = t[2]),
                                        Qt(e, "tabindex", "0");
                                },
                                m: function (n, r) {
                                    zt(n, e, r),
                                        (e.innerHTML = t[5]),
                                        o ||
                                            ((i = Jt(e, "click", function () {
                                                Wt(t[0]) &&
                                                    t[0].apply(this, arguments);
                                            })),
                                            (o = !0));
                                },
                                p: function (o, i) {
                                    var c = h(i, 1)[0];
                                    (t = o),
                                        32 & c && (e.innerHTML = t[5]),
                                        8 & c &&
                                            n !== (n = t[3] ? t[3] : null) &&
                                            Qt(e, "aria-label", n),
                                        18 & c &&
                                            r !==
                                                (r = ""
                                                    .concat(
                                                        t[1] || "",
                                                        " shepherd-button "
                                                    )
                                                    .concat(
                                                        t[4]
                                                            ? "shepherd-button-secondary"
                                                            : ""
                                                    )) &&
                                            Qt(e, "class", r),
                                        4 & c && (e.disabled = t[2]);
                                },
                                i: Dt,
                                o: Dt,
                                d: function (t) {
                                    t && Ut(e), (o = !1), i();
                                },
                            };
                        }
                        function Ae(t, e, n) {
                            var r,
                                o,
                                i,
                                c,
                                a,
                                s,
                                u = e.config,
                                l = e.step;
                            function f(t) {
                                return v(t) ? t.call(l) : t;
                            }
                            return (
                                (t.$$set = function (t) {
                                    "config" in t && n(6, (u = t.config)),
                                        "step" in t && n(7, (l = t.step));
                                }),
                                (t.$$.update = function () {
                                    192 & t.$$.dirty &&
                                        (n(
                                            0,
                                            (r = u.action
                                                ? u.action.bind(l.tour)
                                                : null)
                                        ),
                                        n(1, (o = u.classes)),
                                        n(
                                            2,
                                            (i = !!u.disabled && f(u.disabled))
                                        ),
                                        n(3, (c = u.label ? f(u.label) : null)),
                                        n(4, (a = u.secondary)),
                                        n(5, (s = u.text ? f(u.text) : null)));
                                }),
                                [r, o, i, c, a, s, u, l]
                            );
                        }
                        var Ie = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, Ae, Le, qt, {
                                        config: 6,
                                        step: 7,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function Pe(t, e, n) {
                            var r = t.slice();
                            return (r[2] = e[n]), r;
                        }
                        function je(t) {
                            for (
                                var e, n, r = t[1], o = [], i = 0;
                                i < r.length;
                                i += 1
                            )
                                o[i] = Ce(Pe(t, r, i));
                            var c = function (t) {
                                return ke(o[t], 1, 1, function () {
                                    o[t] = null;
                                });
                            };
                            return {
                                c: function () {
                                    for (var t = 0; t < o.length; t += 1)
                                        o[t].c();
                                    e = Zt("");
                                },
                                m: function (t, r) {
                                    for (var i = 0; i < o.length; i += 1)
                                        o[i] && o[i].m(t, r);
                                    zt(t, e, r), (n = !0);
                                },
                                p: function (t, n) {
                                    if (3 & n) {
                                        var i;
                                        for (
                                            r = t[1], i = 0;
                                            i < r.length;
                                            i += 1
                                        ) {
                                            var a = Pe(t, r, i);
                                            o[i]
                                                ? (o[i].p(a, n), $e(o[i], 1))
                                                : ((o[i] = Ce(a)),
                                                  o[i].c(),
                                                  $e(o[i], 1),
                                                  o[i].m(e.parentNode, e));
                                        }
                                        for (
                                            xe(), i = r.length;
                                            i < o.length;
                                            i += 1
                                        )
                                            c(i);
                                        we();
                                    }
                                },
                                i: function (t) {
                                    if (!n) {
                                        for (var e = 0; e < r.length; e += 1)
                                            $e(o[e]);
                                        n = !0;
                                    }
                                },
                                o: function (t) {
                                    o = o.filter(Boolean);
                                    for (var e = 0; e < o.length; e += 1)
                                        ke(o[e]);
                                    n = !1;
                                },
                                d: function (t) {
                                    !(function (t, e) {
                                        for (var n = 0; n < t.length; n += 1)
                                            t[n] && t[n].d(e);
                                    })(o, t),
                                        t && Ut(e);
                                },
                            };
                        }
                        function Ce(t) {
                            var e, n;
                            return (
                                (e = new Ie({
                                    props: { config: t[2], step: t[0] },
                                })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        2 & n && (r.config = t[2]),
                                            1 & n && (r.step = t[0]),
                                            e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function Re(t) {
                            var e,
                                n,
                                r = t[1] && je(t);
                            return {
                                c: function () {
                                    (e = Yt("footer")),
                                        r && r.c(),
                                        Qt(e, "class", "shepherd-footer");
                                },
                                m: function (t, o) {
                                    zt(t, e, o), r && r.m(e, null), (n = !0);
                                },
                                p: function (t, n) {
                                    var o = h(n, 1)[0];
                                    t[1]
                                        ? r
                                            ? (r.p(t, o), 2 & o && $e(r, 1))
                                            : ((r = je(t)).c(),
                                              $e(r, 1),
                                              r.m(e, null))
                                        : r &&
                                          (xe(),
                                          ke(r, 1, 1, function () {
                                              r = null;
                                          }),
                                          we());
                                },
                                i: function (t) {
                                    n || ($e(r), (n = !0));
                                },
                                o: function (t) {
                                    ke(r), (n = !1);
                                },
                                d: function (t) {
                                    t && Ut(e), r && r.d();
                                },
                            };
                        }
                        function Me(t, e, n) {
                            var r,
                                o = e.step;
                            return (
                                (t.$$set = function (t) {
                                    "step" in t && n(0, (o = t.step));
                                }),
                                (t.$$.update = function () {
                                    1 & t.$$.dirty &&
                                        n(1, (r = o.options.buttons));
                                }),
                                [o, r]
                            );
                        }
                        var Fe = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, Me, Re, qt, {
                                        step: 0,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function De(t) {
                            var e, n, r, o, i;
                            return {
                                c: function () {
                                    (e = Yt("button")),
                                        ((n = Yt("span")).textContent = "×"),
                                        Qt(n, "aria-hidden", "true"),
                                        Qt(
                                            e,
                                            "aria-label",
                                            (r = t[0].label
                                                ? t[0].label
                                                : "Close Tour")
                                        ),
                                        Qt(e, "class", "shepherd-cancel-icon"),
                                        Qt(e, "type", "button");
                                },
                                m: function (r, c) {
                                    zt(r, e, c),
                                        Gt(e, n),
                                        o ||
                                            ((i = Jt(e, "click", t[1])),
                                            (o = !0));
                                },
                                p: function (t, n) {
                                    1 & h(n, 1)[0] &&
                                        r !==
                                            (r = t[0].label
                                                ? t[0].label
                                                : "Close Tour") &&
                                        Qt(e, "aria-label", r);
                                },
                                i: Dt,
                                o: Dt,
                                d: function (t) {
                                    t && Ut(e), (o = !1), i();
                                },
                            };
                        }
                        function He(t, e, n) {
                            var r = e.cancelIcon,
                                o = e.step;
                            return (
                                (t.$$set = function (t) {
                                    "cancelIcon" in t &&
                                        n(0, (r = t.cancelIcon)),
                                        "step" in t && n(2, (o = t.step));
                                }),
                                [
                                    r,
                                    function (t) {
                                        t.preventDefault(), o.cancel();
                                    },
                                    o,
                                ]
                            );
                        }
                        var Ne = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, He, De, qt, {
                                        cancelIcon: 0,
                                        step: 2,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function Be(t) {
                            var e;
                            return {
                                c: function () {
                                    Qt((e = Yt("h3")), "id", t[1]),
                                        Qt(e, "class", "shepherd-title");
                                },
                                m: function (n, r) {
                                    zt(n, e, r), t[3](e);
                                },
                                p: function (t, n) {
                                    2 & h(n, 1)[0] && Qt(e, "id", t[1]);
                                },
                                i: Dt,
                                o: Dt,
                                d: function (n) {
                                    n && Ut(e), t[3](null);
                                },
                            };
                        }
                        function Ve(t, e, n) {
                            var r = e.labelId,
                                o = e.element,
                                i = e.title;
                            return (
                                ce(function () {
                                    v(i) && n(2, (i = i())),
                                        n(0, (o.innerHTML = i), o);
                                }),
                                (t.$$set = function (t) {
                                    "labelId" in t && n(1, (r = t.labelId)),
                                        "element" in t && n(0, (o = t.element)),
                                        "title" in t && n(2, (i = t.title));
                                }),
                                [
                                    o,
                                    r,
                                    i,
                                    function (t) {
                                        se[t ? "unshift" : "push"](function () {
                                            n(0, (o = t));
                                        });
                                    },
                                ]
                            );
                        }
                        var We = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, Ve, Be, qt, {
                                        labelId: 1,
                                        element: 0,
                                        title: 2,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function qe(t) {
                            var e, n;
                            return (
                                (e = new We({
                                    props: { labelId: t[0], title: t[2] },
                                })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        1 & n && (r.labelId = t[0]),
                                            4 & n && (r.title = t[2]),
                                            e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function Ge(t) {
                            var e, n;
                            return (
                                (e = new Ne({
                                    props: { cancelIcon: t[3], step: t[1] },
                                })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        8 & n && (r.cancelIcon = t[3]),
                                            2 & n && (r.step = t[1]),
                                            e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function ze(t) {
                            var e,
                                n,
                                r,
                                o = t[2] && qe(t),
                                i = t[3] && t[3].enabled && Ge(t);
                            return {
                                c: function () {
                                    (e = Yt("header")),
                                        o && o.c(),
                                        (n = Kt()),
                                        i && i.c(),
                                        Qt(e, "class", "shepherd-header");
                                },
                                m: function (t, c) {
                                    zt(t, e, c),
                                        o && o.m(e, null),
                                        Gt(e, n),
                                        i && i.m(e, null),
                                        (r = !0);
                                },
                                p: function (t, r) {
                                    var c = h(r, 1)[0];
                                    t[2]
                                        ? o
                                            ? (o.p(t, c), 4 & c && $e(o, 1))
                                            : ((o = qe(t)).c(),
                                              $e(o, 1),
                                              o.m(e, n))
                                        : o &&
                                          (xe(),
                                          ke(o, 1, 1, function () {
                                              o = null;
                                          }),
                                          we()),
                                        t[3] && t[3].enabled
                                            ? i
                                                ? (i.p(t, c), 8 & c && $e(i, 1))
                                                : ((i = Ge(t)).c(),
                                                  $e(i, 1),
                                                  i.m(e, null))
                                            : i &&
                                              (xe(),
                                              ke(i, 1, 1, function () {
                                                  i = null;
                                              }),
                                              we());
                                },
                                i: function (t) {
                                    r || ($e(o), $e(i), (r = !0));
                                },
                                o: function (t) {
                                    ke(o), ke(i), (r = !1);
                                },
                                d: function (t) {
                                    t && Ut(e), o && o.d(), i && i.d();
                                },
                            };
                        }
                        function Ue(t, e, n) {
                            var r,
                                o,
                                i = e.labelId,
                                c = e.step;
                            return (
                                (t.$$set = function (t) {
                                    "labelId" in t && n(0, (i = t.labelId)),
                                        "step" in t && n(1, (c = t.step));
                                }),
                                (t.$$.update = function () {
                                    2 & t.$$.dirty &&
                                        (n(2, (r = c.options.title)),
                                        n(3, (o = c.options.cancelIcon)));
                                }),
                                [i, c, r, o]
                            );
                        }
                        var Ye = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, Ue, ze, qt, {
                                        labelId: 0,
                                        step: 1,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function Xe(t) {
                            var e;
                            return {
                                c: function () {
                                    Qt(
                                        (e = Yt("div")),
                                        "class",
                                        "shepherd-text"
                                    ),
                                        Qt(e, "id", t[1]);
                                },
                                m: function (n, r) {
                                    zt(n, e, r), t[3](e);
                                },
                                p: function (t, n) {
                                    2 & h(n, 1)[0] && Qt(e, "id", t[1]);
                                },
                                i: Dt,
                                o: Dt,
                                d: function (n) {
                                    n && Ut(e), t[3](null);
                                },
                            };
                        }
                        function Ze(t, e, n) {
                            var r = e.descriptionId,
                                o = e.element,
                                i = e.step;
                            return (
                                ce(function () {
                                    var t = i.options.text;
                                    v(t) && (t = t.call(i)),
                                        p(t)
                                            ? o.appendChild(t)
                                            : n(0, (o.innerHTML = t), o);
                                }),
                                (t.$$set = function (t) {
                                    "descriptionId" in t &&
                                        n(1, (r = t.descriptionId)),
                                        "element" in t && n(0, (o = t.element)),
                                        "step" in t && n(2, (i = t.step));
                                }),
                                [
                                    o,
                                    r,
                                    i,
                                    function (t) {
                                        se[t ? "unshift" : "push"](function () {
                                            n(0, (o = t));
                                        });
                                    },
                                ]
                            );
                        }
                        var Ke = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, Ze, Xe, qt, {
                                        descriptionId: 1,
                                        element: 0,
                                        step: 2,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function Je(t) {
                            var e, n;
                            return (
                                (e = new Ye({
                                    props: { labelId: t[1], step: t[2] },
                                })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        2 & n && (r.labelId = t[1]),
                                            4 & n && (r.step = t[2]),
                                            e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function Qe(t) {
                            var e, n;
                            return (
                                (e = new Ke({
                                    props: { descriptionId: t[0], step: t[2] },
                                })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        1 & n && (r.descriptionId = t[0]),
                                            4 & n && (r.step = t[2]),
                                            e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function tn(t) {
                            var e, n;
                            return (
                                (e = new Fe({ props: { step: t[2] } })),
                                {
                                    c: function () {
                                        Oe(e.$$.fragment);
                                    },
                                    m: function (t, r) {
                                        Ee(e, t, r), (n = !0);
                                    },
                                    p: function (t, n) {
                                        var r = {};
                                        4 & n && (r.step = t[2]), e.$set(r);
                                    },
                                    i: function (t) {
                                        n || ($e(e.$$.fragment, t), (n = !0));
                                    },
                                    o: function (t) {
                                        ke(e.$$.fragment, t), (n = !1);
                                    },
                                    d: function (t) {
                                        Se(e, t);
                                    },
                                }
                            );
                        }
                        function en(t) {
                            var e,
                                n,
                                r,
                                o,
                                i =
                                    !b(t[2].options.title) ||
                                    (t[2].options.cancelIcon &&
                                        t[2].options.cancelIcon.enabled),
                                c = !b(t[2].options.text),
                                a =
                                    Array.isArray(t[2].options.buttons) &&
                                    t[2].options.buttons.length,
                                s = i && Je(t),
                                u = c && Qe(t),
                                l = a && tn(t);
                            return {
                                c: function () {
                                    (e = Yt("div")),
                                        s && s.c(),
                                        (n = Kt()),
                                        u && u.c(),
                                        (r = Kt()),
                                        l && l.c(),
                                        Qt(e, "class", "shepherd-content");
                                },
                                m: function (t, i) {
                                    zt(t, e, i),
                                        s && s.m(e, null),
                                        Gt(e, n),
                                        u && u.m(e, null),
                                        Gt(e, r),
                                        l && l.m(e, null),
                                        (o = !0);
                                },
                                p: function (t, o) {
                                    var f = h(o, 1)[0];
                                    4 & f &&
                                        (i =
                                            !b(t[2].options.title) ||
                                            (t[2].options.cancelIcon &&
                                                t[2].options.cancelIcon
                                                    .enabled)),
                                        i
                                            ? s
                                                ? (s.p(t, f), 4 & f && $e(s, 1))
                                                : ((s = Je(t)).c(),
                                                  $e(s, 1),
                                                  s.m(e, n))
                                            : s &&
                                              (xe(),
                                              ke(s, 1, 1, function () {
                                                  s = null;
                                              }),
                                              we()),
                                        4 & f && (c = !b(t[2].options.text)),
                                        c
                                            ? u
                                                ? (u.p(t, f), 4 & f && $e(u, 1))
                                                : ((u = Qe(t)).c(),
                                                  $e(u, 1),
                                                  u.m(e, r))
                                            : u &&
                                              (xe(),
                                              ke(u, 1, 1, function () {
                                                  u = null;
                                              }),
                                              we()),
                                        4 & f &&
                                            (a =
                                                Array.isArray(
                                                    t[2].options.buttons
                                                ) &&
                                                t[2].options.buttons.length),
                                        a
                                            ? l
                                                ? (l.p(t, f), 4 & f && $e(l, 1))
                                                : ((l = tn(t)).c(),
                                                  $e(l, 1),
                                                  l.m(e, null))
                                            : l &&
                                              (xe(),
                                              ke(l, 1, 1, function () {
                                                  l = null;
                                              }),
                                              we());
                                },
                                i: function (t) {
                                    o || ($e(s), $e(u), $e(l), (o = !0));
                                },
                                o: function (t) {
                                    ke(s), ke(u), ke(l), (o = !1);
                                },
                                d: function (t) {
                                    t && Ut(e),
                                        s && s.d(),
                                        u && u.d(),
                                        l && l.d();
                                },
                            };
                        }
                        function nn(t, e, n) {
                            var r = e.descriptionId,
                                o = e.labelId,
                                i = e.step;
                            return (
                                (t.$$set = function (t) {
                                    "descriptionId" in t &&
                                        n(0, (r = t.descriptionId)),
                                        "labelId" in t && n(1, (o = t.labelId)),
                                        "step" in t && n(2, (i = t.step));
                                }),
                                [r, o, i]
                            );
                        }
                        var rn = (function (t) {
                            function e(t) {
                                var n;
                                return (
                                    w(this, e),
                                    Te(l((n = c(this, e))), t, nn, en, qt, {
                                        descriptionId: 0,
                                        labelId: 1,
                                        step: 2,
                                    }),
                                    n
                                );
                            }
                            return f(e, t), k(e);
                        })(_e);
                        function on(t) {
                            var e;
                            return {
                                c: function () {
                                    Qt(
                                        (e = Yt("div")),
                                        "class",
                                        "shepherd-arrow"
                                    ),
                                        Qt(e, "data-popper-arrow", "");
                                },
                                m: function (t, n) {
                                    zt(t, e, n);
                                },
                                d: function (t) {
                                    t && Ut(e);
                                },
                            };
                        }
                        function cn(t) {
                            var e,
                                n,
                                r,
                                o,
                                i,
                                c,
                                a,
                                s,
                                u =
                                    t[4].options.arrow &&
                                    t[4].options.attachTo &&
                                    t[4].options.attachTo.element &&
                                    t[4].options.attachTo.on &&
                                    on();
                            r = new rn({
                                props: {
                                    descriptionId: t[2],
                                    labelId: t[3],
                                    step: t[4],
                                },
                            });
                            for (
                                var l = [
                                        {
                                            "aria-describedby": (o = b(
                                                t[4].options.text
                                            )
                                                ? null
                                                : t[2]),
                                        },
                                        {
                                            "aria-labelledby": (i = t[4].options
                                                .title
                                                ? t[3]
                                                : null),
                                        },
                                        t[1],
                                        { role: "dialog" },
                                        { tabindex: "0" },
                                    ],
                                    f = {},
                                    p = 0;
                                p < l.length;
                                p += 1
                            )
                                f = Ht(f, l[p]);
                            return {
                                c: function () {
                                    (e = Yt("div")),
                                        u && u.c(),
                                        (n = Kt()),
                                        Oe(r.$$.fragment),
                                        ne(e, f),
                                        re(e, "shepherd-has-cancel-icon", t[5]),
                                        re(e, "shepherd-has-title", t[6]),
                                        re(e, "shepherd-element", !0);
                                },
                                m: function (o, i) {
                                    zt(o, e, i),
                                        u && u.m(e, null),
                                        Gt(e, n),
                                        Ee(r, e, null),
                                        t[13](e),
                                        (c = !0),
                                        a ||
                                            ((s = Jt(e, "keydown", t[7])),
                                            (a = !0));
                                },
                                p: function (t, a) {
                                    var s = h(a, 1)[0];
                                    t[4].options.arrow &&
                                    t[4].options.attachTo &&
                                    t[4].options.attachTo.element &&
                                    t[4].options.attachTo.on
                                        ? u || ((u = on()).c(), u.m(e, n))
                                        : u && (u.d(1), (u = null));
                                    var p = {};
                                    4 & s && (p.descriptionId = t[2]),
                                        8 & s && (p.labelId = t[3]),
                                        16 & s && (p.step = t[4]),
                                        r.$set(p),
                                        ne(
                                            e,
                                            (f = (function (t, e) {
                                                for (
                                                    var n = {},
                                                        r = {},
                                                        o = { $$scope: 1 },
                                                        i = t.length;
                                                    i--;

                                                ) {
                                                    var c = t[i],
                                                        a = e[i];
                                                    if (a) {
                                                        for (var s in c)
                                                            s in a ||
                                                                (r[s] = 1);
                                                        for (var u in a)
                                                            o[u] ||
                                                                ((n[u] = a[u]),
                                                                (o[u] = 1));
                                                        t[i] = a;
                                                    } else
                                                        for (var l in c)
                                                            o[l] = 1;
                                                }
                                                for (var f in r)
                                                    f in n || (n[f] = void 0);
                                                return n;
                                            })(l, [
                                                (!c ||
                                                    (20 & s &&
                                                        o !==
                                                            (o = b(
                                                                t[4].options
                                                                    .text
                                                            )
                                                                ? null
                                                                : t[2]))) && {
                                                    "aria-describedby": o,
                                                },
                                                (!c ||
                                                    (24 & s &&
                                                        i !==
                                                            (i = t[4].options
                                                                .title
                                                                ? t[3]
                                                                : null))) && {
                                                    "aria-labelledby": i,
                                                },
                                                2 & s && t[1],
                                                { role: "dialog" },
                                                { tabindex: "0" },
                                            ]))
                                        ),
                                        re(e, "shepherd-has-cancel-icon", t[5]),
                                        re(e, "shepherd-has-title", t[6]),
                                        re(e, "shepherd-element", !0);
                                },
                                i: function (t) {
                                    c || ($e(r.$$.fragment, t), (c = !0));
                                },
                                o: function (t) {
                                    ke(r.$$.fragment, t), (c = !1);
                                },
                                d: function (n) {
                                    n && Ut(e),
                                        u && u.d(),
                                        Se(r),
                                        t[13](null),
                                        (a = !1),
                                        s();
                                },
                            };
                        }
                        function an(t) {
                            return t.split(" ").filter(function (t) {
                                return !!t.length;
                            });
                        }
                        function sn(t, e, n) {
                            var r,
                                o,
                                i,
                                c,
                                a = e.classPrefix,
                                s = e.element,
                                u = e.descriptionId,
                                l = e.firstFocusableElement,
                                f = e.focusableElements,
                                p = e.labelId,
                                h = e.lastFocusableElement,
                                v = e.step,
                                y = e.dataStepId;
                            return (
                                (c = function () {
                                    n(
                                        1,
                                        (y = g(
                                            {},
                                            "data-".concat(
                                                a,
                                                "shepherd-step-id"
                                            ),
                                            v.id
                                        ))
                                    ),
                                        n(
                                            9,
                                            (f = s.querySelectorAll(
                                                'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
                                            ))
                                        ),
                                        n(8, (l = f[0])),
                                        n(10, (h = f[f.length - 1]));
                                }),
                                ie().$$.on_mount.push(c),
                                ce(function () {
                                    i !== v.options.classes &&
                                        ((function (t) {
                                            if (m(t)) {
                                                var e,
                                                    n = an(t);
                                                n.length &&
                                                    (e =
                                                        s.classList).remove.apply(
                                                        e,
                                                        d(n)
                                                    );
                                            }
                                        })(i),
                                        (function (t) {
                                            if (m(t)) {
                                                var e,
                                                    n = an(t);
                                                n.length &&
                                                    (e = s.classList).add.apply(
                                                        e,
                                                        d(n)
                                                    );
                                            }
                                        })((i = v.options.classes)));
                                }),
                                (t.$$set = function (t) {
                                    "classPrefix" in t &&
                                        n(11, (a = t.classPrefix)),
                                        "element" in t && n(0, (s = t.element)),
                                        "descriptionId" in t &&
                                            n(2, (u = t.descriptionId)),
                                        "firstFocusableElement" in t &&
                                            n(8, (l = t.firstFocusableElement)),
                                        "focusableElements" in t &&
                                            n(9, (f = t.focusableElements)),
                                        "labelId" in t && n(3, (p = t.labelId)),
                                        "lastFocusableElement" in t &&
                                            n(10, (h = t.lastFocusableElement)),
                                        "step" in t && n(4, (v = t.step)),
                                        "dataStepId" in t &&
                                            n(1, (y = t.dataStepId));
                                }),
                                (t.$$.update = function () {
                                    16 & t.$$.dirty &&
                                        (n(
                                            5,
                                            (r =
                                                v.options &&
                                                v.options.cancelIcon &&
                                                v.options.cancelIcon.enabled)
                                        ),
                                        n(
                                            6,
                                            (o = v.options && v.options.title)
                                        ));
                                }),
                                [
                                    s,
                                    y,
                                    u,
                                    p,
                                    v,
                                    r,
                                    o,
                                    function (t) {
                                        var e = v.tour;
                                        switch (t.keyCode) {
                                            case 9:
                                                if (0 === f.length) {
                                                    t.preventDefault();
                                                    break;
                                                }
                                                t.shiftKey
                                                    ? (document.activeElement ===
                                                          l ||
                                                          document.activeElement.classList.contains(
                                                              "shepherd-element"
                                                          )) &&
                                                      (t.preventDefault(),
                                                      h.focus())
                                                    : document.activeElement ===
                                                          h &&
                                                      (t.preventDefault(),
                                                      l.focus());
                                                break;
                                            case 27:
                                                e.options.exitOnEsc &&
                                                    (t.stopPropagation(),
                                                    v.cancel());
                                                break;
                                            case 37:
                                                e.options.keyboardNavigation &&
                                                    (t.stopPropagation(),
                                                    e.back());
                                                break;
                                            case 39:
                                                e.options.keyboardNavigation &&
                                                    (t.stopPropagation(),
                                                    e.next());
                                        }
                                    },
                                    l,
                                    f,
                                    h,
                                    a,
                                    function () {
                                        return s;
                                    },
                                    function (t) {
                                        se[t ? "unshift" : "push"](function () {
                                            n(0, (s = t));
                                        });
                                    },
                                ]
                            );
                        }
                        var un = (function (t) {
                                function e(t) {
                                    var n;
                                    return (
                                        w(this, e),
                                        Te(l((n = c(this, e))), t, sn, cn, qt, {
                                            classPrefix: 11,
                                            element: 0,
                                            descriptionId: 2,
                                            firstFocusableElement: 8,
                                            focusableElements: 9,
                                            labelId: 3,
                                            lastFocusableElement: 10,
                                            step: 4,
                                            dataStepId: 1,
                                            getElement: 12,
                                        }),
                                        n
                                    );
                                }
                                return (
                                    f(e, t),
                                    k(e, [
                                        {
                                            key: "getElement",
                                            get: function () {
                                                return this.$$.ctx[12];
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })(_e),
                            ln = (function (t) {
                                function e(t) {
                                    var n,
                                        r =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {};
                                    return (
                                        w(this, e),
                                        ((n = c(this, e, [t, r])).tour = t),
                                        (n.classPrefix = n.tour.options
                                            ? S(n.tour.options.classPrefix)
                                            : ""),
                                        (n.styles = t.styles),
                                        (n._resolvedAttachTo = null),
                                        O(l(n)),
                                        n._setOptions(r),
                                        a(n, l(n))
                                    );
                                }
                                return (
                                    f(e, t),
                                    k(e, [
                                        {
                                            key: "cancel",
                                            value: function () {
                                                this.tour.cancel(),
                                                    this.trigger("cancel");
                                            },
                                        },
                                        {
                                            key: "complete",
                                            value: function () {
                                                this.tour.complete(),
                                                    this.trigger("complete");
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                this.cleanup && this.cleanup(),
                                                    (this.cleanup = null),
                                                    p(this.el) &&
                                                        (this.el.remove(),
                                                        (this.el = null)),
                                                    this._updateStepTargetOnHide(),
                                                    this.trigger("destroy");
                                            },
                                        },
                                        {
                                            key: "getTour",
                                            value: function () {
                                                return this.tour;
                                            },
                                        },
                                        {
                                            key: "hide",
                                            value: function () {
                                                this.tour.modal.hide(),
                                                    this.trigger("before-hide"),
                                                    this.el &&
                                                        (this.el.hidden = !0),
                                                    this._updateStepTargetOnHide(),
                                                    this.trigger("hide");
                                            },
                                        },
                                        {
                                            key: "_resolveAttachToOptions",
                                            value: function () {
                                                return (
                                                    (this._resolvedAttachTo =
                                                        (function (t) {
                                                            var e =
                                                                    t.options
                                                                        .attachTo ||
                                                                    {},
                                                                n =
                                                                    Object.assign(
                                                                        {},
                                                                        e
                                                                    );
                                                            if (
                                                                (v(n.element) &&
                                                                    (n.element =
                                                                        n.element.call(
                                                                            t
                                                                        )),
                                                                m(n.element))
                                                            ) {
                                                                try {
                                                                    n.element =
                                                                        document.querySelector(
                                                                            n.element
                                                                        );
                                                                } catch (t) {}
                                                                n.element ||
                                                                    console.error(
                                                                        "The element for this Shepherd step was not found ".concat(
                                                                            e.element
                                                                        )
                                                                    );
                                                            }
                                                            return n;
                                                        })(this)),
                                                    this._resolvedAttachTo
                                                );
                                            },
                                        },
                                        {
                                            key: "_getResolvedAttachToOptions",
                                            value: function () {
                                                return null ===
                                                    this._resolvedAttachTo
                                                    ? this._resolveAttachToOptions()
                                                    : this._resolvedAttachTo;
                                            },
                                        },
                                        {
                                            key: "isOpen",
                                            value: function () {
                                                return Boolean(
                                                    this.el && !this.el.hidden
                                                );
                                            },
                                        },
                                        {
                                            key: "show",
                                            value: function () {
                                                var t = this;
                                                return v(
                                                    this.options
                                                        .beforeShowPromise
                                                )
                                                    ? Promise.resolve(
                                                          this.options.beforeShowPromise()
                                                      ).then(function () {
                                                          return t._show();
                                                      })
                                                    : Promise.resolve(
                                                          this._show()
                                                      );
                                            },
                                        },
                                        {
                                            key: "updateStepOptions",
                                            value: function (t) {
                                                Object.assign(this.options, t),
                                                    this
                                                        .shepherdElementComponent &&
                                                        this.shepherdElementComponent.$set(
                                                            { step: this }
                                                        );
                                            },
                                        },
                                        {
                                            key: "getElement",
                                            value: function () {
                                                return this.el;
                                            },
                                        },
                                        {
                                            key: "getTarget",
                                            value: function () {
                                                return this.target;
                                            },
                                        },
                                        {
                                            key: "_createTooltipContent",
                                            value: function () {
                                                var t = "".concat(
                                                        this.id,
                                                        "-description"
                                                    ),
                                                    e = "".concat(
                                                        this.id,
                                                        "-label"
                                                    );
                                                return (
                                                    (this.shepherdElementComponent =
                                                        new un({
                                                            target:
                                                                this.tour
                                                                    .options
                                                                    .stepsContainer ||
                                                                document.body,
                                                            props: {
                                                                classPrefix:
                                                                    this
                                                                        .classPrefix,
                                                                descriptionId:
                                                                    t,
                                                                labelId: e,
                                                                step: this,
                                                                styles: this
                                                                    .styles,
                                                            },
                                                        })),
                                                    this.shepherdElementComponent.getElement()
                                                );
                                            },
                                        },
                                        {
                                            key: "_scrollTo",
                                            value: function (t) {
                                                var e =
                                                    this._getResolvedAttachToOptions()
                                                        .element;
                                                v(this.options.scrollToHandler)
                                                    ? this.options.scrollToHandler(
                                                          e
                                                      )
                                                    : e instanceof Element &&
                                                      "function" ==
                                                          typeof e.scrollIntoView &&
                                                      e.scrollIntoView(t);
                                            },
                                        },
                                        {
                                            key: "_getClassOptions",
                                            value: function (t) {
                                                var e =
                                                        this.tour &&
                                                        this.tour.options &&
                                                        this.tour.options
                                                            .defaultStepOptions,
                                                    n = t.classes
                                                        ? t.classes
                                                        : "",
                                                    r =
                                                        e && e.classes
                                                            ? e.classes
                                                            : "",
                                                    o = [].concat(
                                                        d(n.split(" ")),
                                                        d(r.split(" "))
                                                    ),
                                                    i = new Set(o);
                                                return Array.from(i)
                                                    .join(" ")
                                                    .trim();
                                            },
                                        },
                                        {
                                            key: "_setOptions",
                                            value: function () {
                                                var t = this,
                                                    e =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : {},
                                                    n =
                                                        this.tour &&
                                                        this.tour.options &&
                                                        this.tour.options
                                                            .defaultStepOptions;
                                                (n = u({}, n || {})),
                                                    (this.options =
                                                        Object.assign(
                                                            { arrow: !0 },
                                                            n,
                                                            e,
                                                            (function (t, e) {
                                                                return {
                                                                    floatingUIOptions:
                                                                        u(
                                                                            t.floatingUIOptions ||
                                                                                {},
                                                                            e.floatingUIOptions ||
                                                                                {}
                                                                        ),
                                                                };
                                                            })(n, e)
                                                        ));
                                                var r = this.options.when;
                                                (this.options.classes =
                                                    this._getClassOptions(e)),
                                                    this.destroy(),
                                                    (this.id =
                                                        this.options.id ||
                                                        "step-".concat(_())),
                                                    r &&
                                                        Object.keys(r).forEach(
                                                            function (e) {
                                                                t.on(
                                                                    e,
                                                                    r[e],
                                                                    t
                                                                );
                                                            }
                                                        );
                                            },
                                        },
                                        {
                                            key: "_setupElements",
                                            value: function () {
                                                b(this.el) || this.destroy(),
                                                    (this.el =
                                                        this._createTooltipContent()),
                                                    this.options.advanceOn &&
                                                        (function (t) {
                                                            var e =
                                                                    t.options
                                                                        .advanceOn ||
                                                                    {},
                                                                n = e.event,
                                                                r = e.selector;
                                                            if (!n)
                                                                return console.error(
                                                                    "advanceOn was defined, but no event name was passed."
                                                                );
                                                            var o,
                                                                i = (function (
                                                                    t,
                                                                    e
                                                                ) {
                                                                    return function (
                                                                        n
                                                                    ) {
                                                                        if (
                                                                            e.isOpen()
                                                                        ) {
                                                                            var r =
                                                                                e.el &&
                                                                                n.currentTarget ===
                                                                                    e.el;
                                                                            ((!b(
                                                                                t
                                                                            ) &&
                                                                                n.currentTarget.matches(
                                                                                    t
                                                                                )) ||
                                                                                r) &&
                                                                                e.tour.next();
                                                                        }
                                                                    };
                                                                })(r, t);
                                                            try {
                                                                o =
                                                                    document.querySelector(
                                                                        r
                                                                    );
                                                            } catch (t) {}
                                                            if (!b(r) && !o)
                                                                return console.error(
                                                                    "No element was found for the selector supplied to advanceOn: ".concat(
                                                                        r
                                                                    )
                                                                );
                                                            o
                                                                ? (o.addEventListener(
                                                                      n,
                                                                      i
                                                                  ),
                                                                  t.on(
                                                                      "destroy",
                                                                      function () {
                                                                          return o.removeEventListener(
                                                                              n,
                                                                              i
                                                                          );
                                                                      }
                                                                  ))
                                                                : (document.body.addEventListener(
                                                                      n,
                                                                      i,
                                                                      !0
                                                                  ),
                                                                  t.on(
                                                                      "destroy",
                                                                      function () {
                                                                          return document.body.removeEventListener(
                                                                              n,
                                                                              i,
                                                                              !0
                                                                          );
                                                                      }
                                                                  ));
                                                        })(this),
                                                    Ft(this);
                                            },
                                        },
                                        {
                                            key: "_show",
                                            value: function () {
                                                var t = this;
                                                this.trigger("before-show"),
                                                    this._resolveAttachToOptions(),
                                                    this._setupElements(),
                                                    this.tour.modal ||
                                                        this.tour._setupModal(),
                                                    this.tour.modal.setupForStep(
                                                        this
                                                    ),
                                                    this._styleTargetElementForStep(
                                                        this
                                                    ),
                                                    (this.el.hidden = !1),
                                                    this.options.scrollTo &&
                                                        setTimeout(function () {
                                                            t._scrollTo(
                                                                t.options
                                                                    .scrollTo
                                                            );
                                                        }),
                                                    (this.el.hidden = !1);
                                                var e =
                                                        this.shepherdElementComponent.getElement(),
                                                    n =
                                                        this.target ||
                                                        document.body;
                                                n.classList.add(
                                                    "".concat(
                                                        this.classPrefix,
                                                        "shepherd-enabled"
                                                    )
                                                ),
                                                    n.classList.add(
                                                        "".concat(
                                                            this.classPrefix,
                                                            "shepherd-target"
                                                        )
                                                    ),
                                                    e.classList.add(
                                                        "shepherd-enabled"
                                                    ),
                                                    this.trigger("show");
                                            },
                                        },
                                        {
                                            key: "_styleTargetElementForStep",
                                            value: function (t) {
                                                var e = t.target;
                                                e &&
                                                    (t.options.highlightClass &&
                                                        e.classList.add(
                                                            t.options
                                                                .highlightClass
                                                        ),
                                                    e.classList.remove(
                                                        "shepherd-target-click-disabled"
                                                    ),
                                                    !1 ===
                                                        t.options
                                                            .canClickTarget &&
                                                        e.classList.add(
                                                            "shepherd-target-click-disabled"
                                                        ));
                                            },
                                        },
                                        {
                                            key: "_updateStepTargetOnHide",
                                            value: function () {
                                                var t =
                                                    this.target ||
                                                    document.body;
                                                this.options.highlightClass &&
                                                    t.classList.remove(
                                                        this.options
                                                            .highlightClass
                                                    ),
                                                    t.classList.remove(
                                                        "shepherd-target-click-disabled",
                                                        "".concat(
                                                            this.classPrefix,
                                                            "shepherd-enabled"
                                                        ),
                                                        "".concat(
                                                            this.classPrefix,
                                                            "shepherd-target"
                                                        )
                                                    );
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })($);
                        function fn(t) {
                            var e, n, r, o, i;
                            return {
                                c: function () {
                                    (e = Xt("svg")),
                                        Qt((n = Xt("path")), "d", t[2]),
                                        Qt(
                                            e,
                                            "class",
                                            (r = "".concat(
                                                t[1]
                                                    ? "shepherd-modal-is-visible"
                                                    : "",
                                                " shepherd-modal-overlay-container"
                                            ))
                                        );
                                },
                                m: function (r, c) {
                                    zt(r, e, c),
                                        Gt(e, n),
                                        t[11](e),
                                        o ||
                                            ((i = Jt(e, "touchmove", t[3])),
                                            (o = !0));
                                },
                                p: function (t, o) {
                                    var i = h(o, 1)[0];
                                    4 & i && Qt(n, "d", t[2]),
                                        2 & i &&
                                            r !==
                                                (r = "".concat(
                                                    t[1]
                                                        ? "shepherd-modal-is-visible"
                                                        : "",
                                                    " shepherd-modal-overlay-container"
                                                )) &&
                                            Qt(e, "class", r);
                                },
                                i: Dt,
                                o: Dt,
                                d: function (n) {
                                    n && Ut(e), t[11](null), (o = !1), i();
                                },
                            };
                        }
                        function pn(t) {
                            if (!t) return null;
                            var e =
                                t instanceof HTMLElement &&
                                window.getComputedStyle(t).overflowY;
                            return "hidden" !== e &&
                                "visible" !== e &&
                                t.scrollHeight >= t.clientHeight
                                ? t
                                : pn(t.parentElement);
                        }
                        function hn(t, e, n) {
                            var r = e.element,
                                o = e.openingProperties;
                            _();
                            var i,
                                c = !1,
                                a = void 0;
                            function s() {
                                n(
                                    4,
                                    (o = {
                                        width: 0,
                                        height: 0,
                                        x: 0,
                                        y: 0,
                                        r: 0,
                                    })
                                );
                            }
                            function u() {
                                n(1, (c = !1)), h();
                            }
                            function l() {
                                var t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 0,
                                    e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 0,
                                    r =
                                        arguments.length > 3
                                            ? arguments[3]
                                            : void 0;
                                if (r) {
                                    var i = (function (t, e) {
                                            var n = t.getBoundingClientRect(),
                                                r = n.y || n.top,
                                                o = n.bottom || r + n.height;
                                            if (e) {
                                                var i =
                                                        e.getBoundingClientRect(),
                                                    c = i.y || i.top,
                                                    a =
                                                        i.bottom ||
                                                        c + i.height;
                                                (r = Math.max(r, c)),
                                                    (o = Math.min(o, a));
                                            }
                                            return {
                                                y: r,
                                                height: Math.max(o - r, 0),
                                            };
                                        })(
                                            r,
                                            arguments.length > 2
                                                ? arguments[2]
                                                : void 0
                                        ),
                                        c = i.y,
                                        a = i.height,
                                        u = r.getBoundingClientRect(),
                                        l = u.x,
                                        f = u.width,
                                        p = u.left;
                                    n(
                                        4,
                                        (o = {
                                            width: f + 2 * t,
                                            height: a + 2 * t,
                                            x: (l || p) - t,
                                            y: c - t,
                                            r: e,
                                        })
                                    );
                                } else s();
                            }
                            function f() {
                                n(1, (c = !0));
                            }
                            s();
                            var p = function (t) {
                                t.preventDefault();
                            };
                            function h() {
                                a && (cancelAnimationFrame(a), (a = void 0)),
                                    window.removeEventListener("touchmove", p, {
                                        passive: !1,
                                    });
                            }
                            return (
                                (t.$$set = function (t) {
                                    "element" in t && n(0, (r = t.element)),
                                        "openingProperties" in t &&
                                            n(4, (o = t.openingProperties));
                                }),
                                (t.$$.update = function () {
                                    var e,
                                        r,
                                        c,
                                        a,
                                        s,
                                        u,
                                        l,
                                        f,
                                        p,
                                        h,
                                        d,
                                        v,
                                        m,
                                        y,
                                        g,
                                        b,
                                        x,
                                        w,
                                        $,
                                        k,
                                        O;
                                    16 & t.$$.dirty &&
                                        n(
                                            2,
                                            ((r = (e = o).width),
                                            (c = e.height),
                                            (s = void 0 === (a = e.x) ? 0 : a),
                                            (l = void 0 === (u = e.y) ? 0 : u),
                                            (p = void 0 === (f = e.r) ? 0 : f),
                                            (d = (h = window).innerWidth),
                                            (v = h.innerHeight),
                                            (g =
                                                void 0 ===
                                                (y = (m =
                                                    "number" == typeof p
                                                        ? {
                                                              topLeft: p,
                                                              topRight: p,
                                                              bottomRight: p,
                                                              bottomLeft: p,
                                                          }
                                                        : p).topLeft)
                                                    ? 0
                                                    : y),
                                            (x =
                                                void 0 === (b = m.topRight)
                                                    ? 0
                                                    : b),
                                            ($ =
                                                void 0 === (w = m.bottomRight)
                                                    ? 0
                                                    : w),
                                            (O =
                                                void 0 === (k = m.bottomLeft)
                                                    ? 0
                                                    : k),
                                            (i = "M"
                                                .concat(d, ",")
                                                .concat(v, "H0V0H")
                                                .concat(d, "V")
                                                .concat(v, "ZM")
                                                .concat(s + g, ",")
                                                .concat(l, "a")
                                                .concat(g, ",")
                                                .concat(g, ",0,0,0-")
                                                .concat(g, ",")
                                                .concat(g, "V")
                                                .concat(c + l - O, "a")
                                                .concat(O, ",")
                                                .concat(O, ",0,0,0,")
                                                .concat(O, ",")
                                                .concat(O, "H")
                                                .concat(r + s - $, "a")
                                                .concat($, ",")
                                                .concat($, ",0,0,0,")
                                                .concat($, "-")
                                                .concat($, "V")
                                                .concat(l + x, "a")
                                                .concat(x, ",")
                                                .concat(x, ",0,0,0-")
                                                .concat(x, "-")
                                                .concat(x, "Z")))
                                        );
                                }),
                                [
                                    r,
                                    c,
                                    i,
                                    function (t) {
                                        t.stopPropagation();
                                    },
                                    o,
                                    function () {
                                        return r;
                                    },
                                    s,
                                    u,
                                    l,
                                    function (t) {
                                        h(),
                                            t.tour.options.useModalOverlay
                                                ? ((function (t) {
                                                      var e = t.options,
                                                          n =
                                                              e.modalOverlayOpeningPadding,
                                                          r =
                                                              e.modalOverlayOpeningRadius,
                                                          o = pn(t.target);
                                                      (function e() {
                                                          (a = void 0),
                                                              l(
                                                                  n,
                                                                  r,
                                                                  o,
                                                                  t.target
                                                              ),
                                                              (a =
                                                                  requestAnimationFrame(
                                                                      e
                                                                  ));
                                                      })(),
                                                          window.addEventListener(
                                                              "touchmove",
                                                              p,
                                                              { passive: !1 }
                                                          );
                                                  })(t),
                                                  f())
                                                : u();
                                    },
                                    f,
                                    function (t) {
                                        se[t ? "unshift" : "push"](function () {
                                            n(0, (r = t));
                                        });
                                    },
                                ]
                            );
                        }
                        var dn = (function (t) {
                                function e(t) {
                                    var n;
                                    return (
                                        w(this, e),
                                        Te(l((n = c(this, e))), t, hn, fn, qt, {
                                            element: 0,
                                            openingProperties: 4,
                                            getElement: 5,
                                            closeModalOpening: 6,
                                            hide: 7,
                                            positionModal: 8,
                                            setupForStep: 9,
                                            show: 10,
                                        }),
                                        n
                                    );
                                }
                                return (
                                    f(e, t),
                                    k(e, [
                                        {
                                            key: "getElement",
                                            get: function () {
                                                return this.$$.ctx[5];
                                            },
                                        },
                                        {
                                            key: "closeModalOpening",
                                            get: function () {
                                                return this.$$.ctx[6];
                                            },
                                        },
                                        {
                                            key: "hide",
                                            get: function () {
                                                return this.$$.ctx[7];
                                            },
                                        },
                                        {
                                            key: "positionModal",
                                            get: function () {
                                                return this.$$.ctx[8];
                                            },
                                        },
                                        {
                                            key: "setupForStep",
                                            get: function () {
                                                return this.$$.ctx[9];
                                            },
                                        },
                                        {
                                            key: "show",
                                            get: function () {
                                                return this.$$.ctx[10];
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })(_e),
                            vn = new $(),
                            mn = (function (t) {
                                function e() {
                                    var t,
                                        n =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {};
                                    return (
                                        w(this, e),
                                        O(l((t = c(this, e, [n])))),
                                        (t.options = Object.assign(
                                            {},
                                            {
                                                exitOnEsc: !0,
                                                keyboardNavigation: !0,
                                            },
                                            n
                                        )),
                                        (t.classPrefix = S(
                                            t.options.classPrefix
                                        )),
                                        (t.steps = []),
                                        t.addSteps(t.options.steps),
                                        [
                                            "active",
                                            "cancel",
                                            "complete",
                                            "inactive",
                                            "show",
                                            "start",
                                        ].map(function (e) {
                                            var n;
                                            (n = e),
                                                t.on(n, function (e) {
                                                    ((e = e || {}).tour = l(t)),
                                                        vn.trigger(n, e);
                                                });
                                        }),
                                        t._setTourID(),
                                        a(t, l(t))
                                    );
                                }
                                var n;
                                return (
                                    f(e, t),
                                    k(e, [
                                        {
                                            key: "addStep",
                                            value: function (t, e) {
                                                var n = t;
                                                return (
                                                    n instanceof ln
                                                        ? (n.tour = this)
                                                        : (n = new ln(this, n)),
                                                    b(e)
                                                        ? this.steps.push(n)
                                                        : this.steps.splice(
                                                              e,
                                                              0,
                                                              n
                                                          ),
                                                    n
                                                );
                                            },
                                        },
                                        {
                                            key: "addSteps",
                                            value: function (t) {
                                                var e = this;
                                                return (
                                                    Array.isArray(t) &&
                                                        t.forEach(function (t) {
                                                            e.addStep(t);
                                                        }),
                                                    this
                                                );
                                            },
                                        },
                                        {
                                            key: "back",
                                            value: function () {
                                                var t = this.steps.indexOf(
                                                    this.currentStep
                                                );
                                                this.show(t - 1, !1);
                                            },
                                        },
                                        {
                                            key: "cancel",
                                            value:
                                                ((n = x(
                                                    y().mark(function t() {
                                                        var e, n;
                                                        return y().wrap(
                                                            function (t) {
                                                                for (;;)
                                                                    switch (
                                                                        (t.prev =
                                                                            t.next)
                                                                    ) {
                                                                        case 0:
                                                                            if (
                                                                                !this
                                                                                    .options
                                                                                    .confirmCancel
                                                                            ) {
                                                                                t.next = 14;
                                                                                break;
                                                                            }
                                                                            if (
                                                                                ((e =
                                                                                    "function" ==
                                                                                    typeof this
                                                                                        .options
                                                                                        .confirmCancel),
                                                                                (n =
                                                                                    this
                                                                                        .options
                                                                                        .confirmCancelMessage ||
                                                                                    "Are you sure you want to stop the tour?"),
                                                                                !e)
                                                                            ) {
                                                                                t.next = 9;
                                                                                break;
                                                                            }
                                                                            return (
                                                                                (t.next = 6),
                                                                                this.options.confirmCancel()
                                                                            );
                                                                        case 6:
                                                                            (t.t0 =
                                                                                t.sent),
                                                                                (t.next = 10);
                                                                            break;
                                                                        case 9:
                                                                            t.t0 =
                                                                                window.confirm(
                                                                                    n
                                                                                );
                                                                        case 10:
                                                                            t.t0 &&
                                                                                this._done(
                                                                                    "cancel"
                                                                                ),
                                                                                (t.next = 15);
                                                                            break;
                                                                        case 14:
                                                                            this._done(
                                                                                "cancel"
                                                                            );
                                                                        case 15:
                                                                        case "end":
                                                                            return t.stop();
                                                                    }
                                                            },
                                                            t,
                                                            this
                                                        );
                                                    })
                                                )),
                                                function () {
                                                    return n.apply(
                                                        this,
                                                        arguments
                                                    );
                                                }),
                                        },
                                        {
                                            key: "complete",
                                            value: function () {
                                                this._done("complete");
                                            },
                                        },
                                        {
                                            key: "getById",
                                            value: function (t) {
                                                return this.steps.find(
                                                    function (e) {
                                                        return e.id === t;
                                                    }
                                                );
                                            },
                                        },
                                        {
                                            key: "getCurrentStep",
                                            value: function () {
                                                return this.currentStep;
                                            },
                                        },
                                        {
                                            key: "hide",
                                            value: function () {
                                                var t = this.getCurrentStep();
                                                if (t) return t.hide();
                                            },
                                        },
                                        {
                                            key: "isActive",
                                            value: function () {
                                                return vn.activeTour === this;
                                            },
                                        },
                                        {
                                            key: "next",
                                            value: function () {
                                                var t = this.steps.indexOf(
                                                    this.currentStep
                                                );
                                                t === this.steps.length - 1
                                                    ? this.complete()
                                                    : this.show(t + 1, !0);
                                            },
                                        },
                                        {
                                            key: "removeStep",
                                            value: function (t) {
                                                var e = this,
                                                    n = this.getCurrentStep();
                                                this.steps.some(function (
                                                    n,
                                                    r
                                                ) {
                                                    if (n.id === t)
                                                        return (
                                                            n.isOpen() &&
                                                                n.hide(),
                                                            n.destroy(),
                                                            e.steps.splice(
                                                                r,
                                                                1
                                                            ),
                                                            !0
                                                        );
                                                }),
                                                    n &&
                                                        n.id === t &&
                                                        ((this.currentStep =
                                                            void 0),
                                                        this.steps.length
                                                            ? this.show(0)
                                                            : this.cancel());
                                            },
                                        },
                                        {
                                            key: "show",
                                            value: function () {
                                                var t =
                                                        arguments.length > 0 &&
                                                        void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : 0,
                                                    e =
                                                        !(
                                                            arguments.length >
                                                                1 &&
                                                            void 0 !==
                                                                arguments[1]
                                                        ) || arguments[1],
                                                    n = m(t)
                                                        ? this.getById(t)
                                                        : this.steps[t];
                                                n &&
                                                    (this._updateStateBeforeShow(),
                                                    v(n.options.showOn) &&
                                                    !n.options.showOn()
                                                        ? this._skipStep(n, e)
                                                        : (this.trigger(
                                                              "show",
                                                              {
                                                                  step: n,
                                                                  previous:
                                                                      this
                                                                          .currentStep,
                                                              }
                                                          ),
                                                          (this.currentStep =
                                                              n),
                                                          n.show()));
                                            },
                                        },
                                        {
                                            key: "start",
                                            value: function () {
                                                this.trigger("start"),
                                                    (this.focusedElBeforeOpen =
                                                        document.activeElement),
                                                    (this.currentStep = null),
                                                    this._setupModal(),
                                                    this._setupActiveTour(),
                                                    this.next();
                                            },
                                        },
                                        {
                                            key: "_done",
                                            value: function (t) {
                                                var e = this.steps.indexOf(
                                                    this.currentStep
                                                );
                                                if (
                                                    (Array.isArray(
                                                        this.steps
                                                    ) &&
                                                        this.steps.forEach(
                                                            function (t) {
                                                                return t.destroy();
                                                            }
                                                        ),
                                                    this &&
                                                        this.steps.forEach(
                                                            function (t) {
                                                                t.options &&
                                                                    !1 ===
                                                                        t
                                                                            .options
                                                                            .canClickTarget &&
                                                                    t.options
                                                                        .attachTo &&
                                                                    t.target instanceof
                                                                        HTMLElement &&
                                                                    t.target.classList.remove(
                                                                        "shepherd-target-click-disabled"
                                                                    );
                                                            }
                                                        ),
                                                    this.trigger(t, {
                                                        index: e,
                                                    }),
                                                    (vn.activeTour = null),
                                                    this.trigger("inactive", {
                                                        tour: this,
                                                    }),
                                                    this.modal &&
                                                        this.modal.hide(),
                                                    ("cancel" === t ||
                                                        "complete" === t) &&
                                                        this.modal)
                                                ) {
                                                    var n =
                                                        document.querySelector(
                                                            ".shepherd-modal-overlay-container"
                                                        );
                                                    n && n.remove();
                                                }
                                                p(this.focusedElBeforeOpen) &&
                                                    this.focusedElBeforeOpen.focus();
                                            },
                                        },
                                        {
                                            key: "_setupActiveTour",
                                            value: function () {
                                                this.trigger("active", {
                                                    tour: this,
                                                }),
                                                    (vn.activeTour = this);
                                            },
                                        },
                                        {
                                            key: "_setupModal",
                                            value: function () {
                                                this.modal = new dn({
                                                    target:
                                                        this.options
                                                            .modalContainer ||
                                                        document.body,
                                                    props: {
                                                        classPrefix:
                                                            this.classPrefix,
                                                        styles: this.styles,
                                                    },
                                                });
                                            },
                                        },
                                        {
                                            key: "_skipStep",
                                            value: function (t, e) {
                                                var n = this.steps.indexOf(t);
                                                if (n === this.steps.length - 1)
                                                    this.complete();
                                                else {
                                                    var r = e ? n + 1 : n - 1;
                                                    this.show(r, e);
                                                }
                                            },
                                        },
                                        {
                                            key: "_updateStateBeforeShow",
                                            value: function () {
                                                this.currentStep &&
                                                    this.currentStep.hide(),
                                                    this.isActive() ||
                                                        this._setupActiveTour();
                                            },
                                        },
                                        {
                                            key: "_setTourID",
                                            value: function () {
                                                var t =
                                                    this.options.tourName ||
                                                    "tour";
                                                this.id = ""
                                                    .concat(t, "--")
                                                    .concat(_());
                                            },
                                        },
                                    ]),
                                    e
                                );
                            })($),
                            yn = "undefined" == typeof window,
                            gn = k(function t() {
                                w(this, t);
                            });
                        return (
                            yn
                                ? Object.assign(vn, { Tour: gn, Step: gn })
                                : Object.assign(vn, { Tour: mn, Step: ln }),
                            vn
                        );
                    }),
                        "object" === E(e)
                            ? (t.exports = i())
                            : void 0 ===
                                  (o =
                                      "function" == typeof (r = i)
                                          ? r.call(e, n, e, t)
                                          : r) || (t.exports = o);
                },
            },
            e = {};
        function n(r) {
            var o = e[r];
            if (void 0 !== o) return o.exports;
            var i = (e[r] = { exports: {} });
            return t[r].call(i.exports, i, i.exports, n), i.exports;
        }
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, { a: e }), e;
        }),
            (n.d = function (t, e) {
                for (var r in e)
                    n.o(e, r) &&
                        !n.o(t, r) &&
                        Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: e[r],
                        });
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var r = {};
        return (
            (function () {
                "use strict";
                n.r(r),
                    n.d(r, {
                        Shepherd: function () {
                            return e.a;
                        },
                    });
                var t = n(4992),
                    e = n.n(t);
                try {
                    window.Shepherd = e();
                } catch (t) {}
            })(),
            r
        );
    })();
});
