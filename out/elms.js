'use strict';

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CreatedElement = require('./CreatedElement');

var ElementWithAppendedChildren = require('./ElementWithAppendedChildren');

var tags = 'a, abbr, acronym, address, applet, area, article, aside, audio, b, base, basefont, bdo, big, blockquote, body, br, button, canvas, caption, center, cite, code, col, colgroup, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, font, footer, form, frame, frameset, head, header, h1, h2, h3, h4, h5, h6, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, meter, nav, noscript, object, ol, optgroup, option, p, param, pre, progress, q, s, samp, script, section, select, small, source, span, strike, strong, style, sub, sup, table, tbody, td, textarea, tfoot, th, thead, time, title, tr, u, ul, var, video, wbr'.split(', ');
var elms = {};
tags.forEach(function (tag) {
  elms[tag] = function (attrStr, text) {
    return function () {
      for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
      }

      return _construct(ElementWithAppendedChildren, [new CreatedElement(tag, attrStr, text)].concat(children));
    };
  };
});
module.exports = elms;
