'use strict'

const { ObjWithNoFuncs } = require('./../mock')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { ElementWithAppendedChildren, h1, div, a, img, p } = require('./../src/index')

new DeepStrictEqualAssertion(
  new ObjWithNoFuncs(
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
    )
  ),
  {
    tagName: 'div',
    attributes: [],
    children: [
      { tagName: 'div',
        attributes: [
          { name: 'class', value: 'div' },
          { name: 'id', value: 'div1' } ],
        children: [
          { tagName: 'h1',
            attributes: [],
            children: [],
            parentNode: {},
            firstChild: undefined },
          { tagName: 'a',
            attributes: [ { name: 'href', value: 'guseyn.com' } ],
            children: [],
            parentNode: {},
            firstChild: undefined },
          { tagName: 'div',
            attributes: [
              { name: 'class', value: 'div' },
              { name: 'id', value: 'div2' } ],
            children: [
              { tagName: 'img',
                attributes: [ { name: 'src', value: 'image.png' } ],
                children: [],
                parentNode: {},
                firstChild: undefined },
              { tagName: 'p',
                attributes: [],
                children: [ { text: 'text' } ],
                parentNode: {},
                firstChild: { text: 'text' } } ],
            parentNode: {},
            firstChild: {
              tagName: 'img',
              attributes: [ { name: 'src', value: 'image.png' } ],
              children: [],
              parentNode: {},
              firstChild: undefined } } ],
        parentNode: {},
        firstChild: {
          tagName: 'h1',
          attributes: [],
          children: [],
          parentNode: {},
          firstChild: undefined } } ],
    parentNode: {},
    firstChild: {
      tagName: 'div',
      attributes:
       [ { name: 'class', value: 'div' },
         { name: 'id', value: 'div1' } ],
      children: [
        { tagName: 'h1',
          attributes: [],
          children: [],
          parentNode: {},
          firstChild: undefined },
        { tagName: 'a',
          attributes: [ { name: 'href', value: 'guseyn.com' } ],
          children: [],
          parentNode: {},
          firstChild: undefined },
        { tagName: 'div',
          attributes: [
            { name: 'class', value: 'div' },
            { name: 'id', value: 'div2' } ],
          children: [
            { tagName: 'img',
              attributes: [ { name: 'src', value: 'image.png' } ],
              children: [],
              parentNode: {},
              firstChild: undefined },
            { tagName: 'p',
              attributes: [],
              children: [ { text: 'text' } ],
              parentNode: {},
              firstChild: { text: 'text' } } ],
          parentNode: {},
          firstChild: {
            tagName: 'img',
            attributes: [ { name: 'src', value: 'image.png' } ],
            children: [],
            parentNode: {},
            firstChild: undefined } } ],
      parentNode: {},
      firstChild:
       { tagName: 'h1',
         attributes: [],
         children: [],
         parentNode: {},
         firstChild: undefined } } }
).call()
