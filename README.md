# page-dom

[![NPM Version](https://img.shields.io/npm/v/@page-libs/dom.svg)](https://npmjs.org/package/@page-libs/dom)
[![Build Status](https://travis-ci.org/Guseyn/page-dom.svg?branch=master)](https://travis-ci.org/Guseyn/page-dom)
[![codecov](https://codecov.io/gh/Guseyn/page-dom/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/page-dom)

Set of async objects for creating DOM elements in [Page](https://github.com/Guseyn/page) framework.  It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Install

`npm install @page-libs/dom`

## Run test

`npm test`

## Run build

`npm run build`

Package is already built. So, for using in Page you just need to install it.

## Usage

```js
const { 

  // Async objects from the list below

} = require('@page-libs/dom');

```

# Async objects

## `CreatedElement(tagName, attrStr[, text])`

```js
new CreatedElement(
  'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"', "text"
).call()

```

## `ElementWithAppendedChildren(elm, ...children)`

```js
new ElementWithAppendedChildren(
  document.getElementById('elm-id'),
  new CreatedElement(
    'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"', "text"
  )
).call()

```

## `ElementWithAppendedText(elm, text)`

```js
new ElementWithAppendedText(
  new CreatedElement(
    'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"', "text"
  ), "additional text"
).call()

```

## `ElementWithAttributes(elm, attrStr)`

```js
new ElementWithAttributes(
  new CreatedElement(
    'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"', "text"
  ), 'name="div"'
).call();

```

## `ElementWithInnerHTML(elm, attrStr)`

```js
new ElementWithInnerHTML(
  new CreatedElement(
    'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"'
  ), '<div>content</div>'
).call();

```

## `ElementWithTextContent(elm, attrStr)`

```js
new ElementWithTextContent(
  new CreatedElement(
    'div', 'class="div" id="div1" style="color: deepskyblue; border: 1px solid solid;"'
  ), 'content'
).call();

```

## `a, abbr, acronym, address, applet, area, article, aside, audio, b, base, basefont, bdo, big, blockquote, body, br, button, canvas, caption, center, cite, code, col, colgroup, datalist, dd, del, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, font, footer, form, frame, frameset, head, header, h1, h2, h3, h4, h5, h6, hr, html, i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, meta, meter, nav, noscript, object, ol, optgroup, option, p, param, pre, progress, q, s, samp, script, section, select, small, source, span, strike, strong, style, sub, sup, table, tbody, td, textarea, tfoot, th, thead, time, title, tr, u, ul, var, video, wbr`

```js
// Simple example
// tagName(attrStr, [text])(...children)
new ElementWithAppendedChildren(
  document.createElement('div'),
  div('class="div" id="div1"')(
    h1()(), 
    a('href="guseyn.com"')(),
    div('class="div" id="div2"')(
      img('src="image.png"')(),
      p('', 'text')()
    )
  )
).call();

```
