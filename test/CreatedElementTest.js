'use strict'

const { ObjWithNoFuncs } = require('./../mock')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { CreatedElement } = require('./../src/index')

new DeepStrictEqualAssertion(
  new ObjWithNoFuncs(
    new CreatedElement(
      'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
    )
  ),
  {
    tagName: 'tag',
    innerHTML: '',
    attributes: [
      { name: 'attr1', value: 'value1' },
      { name: 'attr2', value: 'value2' },
      { name: 'attr3', value: 'value3' }
    ],
    children: [
      { text: 'text' }
    ],
    firstChild: { text: 'text' },
    parentNode: {}
  }
).call()
