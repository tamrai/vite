import "./chunk-UTYXKD5H.js";
import {
  _,
  l,
  x
} from "./chunk-LMR347MO.js";

// node_modules/.deno/preact@10.12.1/node_modules/preact/debug/dist/debug.module.js
var o = {};
function r() {
  o = {};
}
function a(e) {
  return e.type === _ ? "Fragment" : "function" == typeof e.type ? e.type.displayName || e.type.name : "string" == typeof e.type ? e.type : "#text";
}
var i = [];
var c = [];
function s() {
  return i.length > 0 ? i[i.length - 1] : null;
}
var u = false;
function l2(e) {
  return "function" == typeof e.type && e.type != _;
}
function f(n) {
  for (var e = [n], t = n; null != t.__o; )
    e.push(t.__o), t = t.__o;
  return e.reduce(function(n2, e2) {
    n2 += "  in " + a(e2);
    var t2 = e2.__source;
    return t2 ? n2 += " (at " + t2.fileName + ":" + t2.lineNumber + ")" : u || (u = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n2 + "\n";
  }, "");
}
var p = "function" == typeof WeakMap;
function d(n) {
  return n ? "function" == typeof n.type ? d(n.__) : n : {};
}
var h = x.prototype.setState;
x.prototype.setState = function(n, e) {
  return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(s())), h.call(this, n, e);
};
var y = x.prototype.forceUpdate;
function v(n) {
  var e = n.props, t = a(n), o2 = "";
  for (var r2 in e)
    if (e.hasOwnProperty(r2) && "children" !== r2) {
      var i2 = e[r2];
      "function" == typeof i2 && (i2 = "function " + (i2.displayName || i2.name) + "() {}"), i2 = Object(i2) !== i2 || i2.toString ? i2 + "" : Object.prototype.toString.call(i2), o2 += " " + r2 + "=" + JSON.stringify(i2);
    }
  var c2 = e.children;
  return "<" + t + o2 + (c2 && c2.length ? ">..</" + t + ">" : " />");
}
x.prototype.forceUpdate = function(n) {
  return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(s())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f(this.__v)), y.call(this, n);
}, function() {
  !function() {
    var n2 = l.__b, t2 = l.diffed, o2 = l.__, r3 = l.vnode, a2 = l.__r;
    l.diffed = function(n3) {
      l2(n3) && c.pop(), i.pop(), t2 && t2(n3);
    }, l.__b = function(e) {
      l2(e) && i.push(e), n2 && n2(e);
    }, l.__ = function(n3, e) {
      c = [], o2 && o2(n3, e);
    }, l.vnode = function(n3) {
      n3.__o = c.length > 0 ? c[c.length - 1] : null, r3 && r3(n3);
    }, l.__r = function(n3) {
      l2(n3) && c.push(n3), a2 && a2(n3);
    };
  }();
  var n = false, t = l.__b, r2 = l.diffed, s2 = l.vnode, u2 = l.__e, h2 = l.__, y2 = l.__h, m = p ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, b = [];
  l.__e = function(n2, e, t2, o2) {
    if (e && e.__c && "function" == typeof n2.then) {
      var r3 = n2;
      n2 = new Error("Missing Suspense. The throwing component was: " + a(e));
      for (var i2 = e; i2; i2 = i2.__)
        if (i2.__c && i2.__c.__c) {
          n2 = r3;
          break;
        }
      if (n2 instanceof Error)
        throw n2;
    }
    try {
      (o2 = o2 || {}).componentStack = f(e), u2(n2, e, t2, o2), "function" != typeof n2.then && setTimeout(function() {
        throw n2;
      });
    } catch (n3) {
      throw n3;
    }
  }, l.__ = function(n2, e) {
    if (!e)
      throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var t2;
    switch (e.nodeType) {
      case 1:
      case 11:
      case 9:
        t2 = true;
        break;
      default:
        t2 = false;
    }
    if (!t2) {
      var o2 = a(n2);
      throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e + " instead: render(<" + o2 + " />, " + e + ");");
    }
    h2 && h2(n2, e);
  }, l.__b = function(e) {
    var r3 = e.type, i2 = d(e.__);
    if (n = true, void 0 === r3)
      throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + v(e) + "\n\n" + f(e));
    if (null != r3 && "object" == typeof r3) {
      if (void 0 !== r3.__k && void 0 !== r3.__e)
        throw new Error("Invalid type passed to createElement(): " + r3 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a(e) + " = " + v(r3) + ";\n  let vnode = <My" + a(e) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(e));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r3) ? "array" : r3));
    }
    if ("thead" !== r3 && "tfoot" !== r3 && "tbody" !== r3 || "table" === i2.type ? "tr" === r3 && "thead" !== i2.type && "tfoot" !== i2.type && "tbody" !== i2.type && "table" !== i2.type ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + v(e) + "\n\n" + f(e)) : "td" === r3 && "tr" !== i2.type ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + v(e) + "\n\n" + f(e)) : "th" === r3 && "tr" !== i2.type && console.error("Improper nesting of table. Your <th> should have a <tr>." + v(e) + "\n\n" + f(e)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + v(e) + "\n\n" + f(e)), void 0 !== e.ref && "function" != typeof e.ref && "object" != typeof e.ref && !("$$typeof" in e))
      throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e.ref + "] instead\n" + v(e) + "\n\n" + f(e));
    if ("string" == typeof e.type) {
      for (var c2 in e.props)
        if ("o" === c2[0] && "n" === c2[1] && "function" != typeof e.props[c2] && null != e.props[c2])
          throw new Error(`Component's "` + c2 + '" property should be a function, but got [' + typeof e.props[c2] + "] instead\n" + v(e) + "\n\n" + f(e));
    }
    if ("function" == typeof e.type && e.type.propTypes) {
      if ("Lazy" === e.type.displayName && m && !m.lazyPropTypes.has(e.type)) {
        var s3 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var u3 = e.type();
          m.lazyPropTypes.set(e.type, true), console.warn(s3 + "Component wrapped in lazy() is " + a(u3));
        } catch (n2) {
          console.warn(s3 + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var l3 = e.props;
      e.type.__f && delete (l3 = function(n2, e2) {
        for (var t2 in e2)
          n2[t2] = e2[t2];
        return n2;
      }({}, l3)).ref, function(n2, e2, t2, r4, a2) {
        Object.keys(n2).forEach(function(t3) {
          var i3;
          try {
            i3 = n2[t3](e2, t3, r4, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n3) {
            i3 = n3;
          }
          i3 && !(i3.message in o) && (o[i3.message] = true, console.error("Failed prop type: " + i3.message + (a2 && "\n" + a2() || "")));
        });
      }(e.type.propTypes, l3, 0, a(e), function() {
        return f(e);
      });
    }
    t && t(e);
  }, l.__h = function(e, t2, o2) {
    if (!e || !n)
      throw new Error("Hook can only be invoked from render methods.");
    y2 && y2(e, t2, o2);
  };
  var w = function(n2, e) {
    return { get: function() {
      var t2 = "get" + n2 + e;
      b && b.indexOf(t2) < 0 && (b.push(t2), console.warn("getting vnode." + n2 + " is deprecated, " + e));
    }, set: function() {
      var t2 = "set" + n2 + e;
      b && b.indexOf(t2) < 0 && (b.push(t2), console.warn("setting vnode." + n2 + " is not allowed, " + e));
    } };
  }, g = { nodeName: w("nodeName", "use vnode.type"), attributes: w("attributes", "use vnode.props"), children: w("children", "use vnode.props.children") }, E = Object.create({}, g);
  l.vnode = function(n2) {
    var e = n2.props;
    if (null !== n2.type && null != e && ("__source" in e || "__self" in e)) {
      var t2 = n2.props = {};
      for (var o2 in e) {
        var r3 = e[o2];
        "__source" === o2 ? n2.__source = r3 : "__self" === o2 ? n2.__self = r3 : t2[o2] = r3;
      }
    }
    n2.__proto__ = E, s2 && s2(n2);
  }, l.diffed = function(e) {
    if (e.__k && e.__k.forEach(function(n2) {
      if ("object" == typeof n2 && n2 && void 0 === n2.type) {
        var t3 = Object.keys(n2).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t3 + "}.\n\n" + f(e));
      }
    }), n = false, r2 && r2(e), null != e.__k)
      for (var t2 = [], o2 = 0; o2 < e.__k.length; o2++) {
        var a2 = e.__k[o2];
        if (a2 && null != a2.key) {
          var i2 = a2.key;
          if (-1 !== t2.indexOf(i2)) {
            console.error('Following component has two or more children with the same key attribute: "' + i2 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + v(e) + "\n\n" + f(e));
            break;
          }
          t2.push(i2);
        }
      }
  };
}();
export {
  r as resetPropWarnings
};
//# sourceMappingURL=preact_debug.js.map