'use strict'

const { ObjWithNoFuncs } = require('./../mock')
const { DeepStrictEqualAssertion } = require('@cuties/assert')
const { CreatedElement, ElementWithPrependedChildren } = require('./../src/index')

new DeepStrictEqualAssertion(
  new ObjWithNoFuncs(
    new ElementWithPrependedChildren(
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
      ),
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
      ),
      new ElementWithPrependedChildren(
        new CreatedElement(
          'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
        ),
        new CreatedElement(
          'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
        )
      ),
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', 'text'
      )
    )
  ),
  { tagName: 'tag',
    attributes:
     [ { name: 'attr1', value: 'value1' },
       { name: 'attr2', value: 'value2' },
       { name: 'attr3', value: 'value3' } ],
    children:
     [ { text: 'text' },
       { tagName: 'tag',
         attributes:
          [ { name: 'attr1', value: 'value1' },
            { name: 'attr2', value: 'value2' },
            { name: 'attr3', value: 'value3' } ],
         children: [ { text: 'text' } ],
         parentNode: {},
         firstChild: { text: 'text' } },
       { tagName: 'tag',
         attributes:
          [ { name: 'attr1', value: 'value1' },
            { name: 'attr2', value: 'value2' },
            { name: 'attr3', value: 'value3' } ],
         children:
          [ { text: 'text' },
            { tagName: 'tag',
              attributes:
               [ { name: 'attr1', value: 'value1' },
                 { name: 'attr2', value: 'value2' },
                 { name: 'attr3', value: 'value3' } ],
              children: [ { text: 'text' } ],
              parentNode: {},
              firstChild: { text: 'text' } } ],
         parentNode: {},
         firstChild: { text: 'text' } },
       { tagName: 'tag',
         attributes:
          [ { name: 'attr1', value: 'value1' },
            { name: 'attr2', value: 'value2' },
            { name: 'attr3', value: 'value3' } ],
         children: [ { text: 'text' } ],
         parentNode: {},
         firstChild: { text: 'text' } } ],
    parentNode: {},
    firstChild: { text: 'text' } }
).call()
