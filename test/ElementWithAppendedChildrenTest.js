'use strict'

const { ObjWithNoFuncs } = require('./../mock');
const { AsyncObject } = require('@cuties/cutie');
const { DeepEqualAssertion } = require('@cuties/assert');
const { CreatedElement, ElementWithAppendedChildren } = require('./../src/index');
Object.setPrototypeOf(CreatedElement.prototype, AsyncObject.prototype);
Object.setPrototypeOf(CreatedElement, AsyncObject);
Object.setPrototypeOf(ElementWithAppendedChildren.prototype, AsyncObject.prototype);
Object.setPrototypeOf(ElementWithAppendedChildren, AsyncObject);

new DeepEqualAssertion(
  new ObjWithNoFuncs(
    new ElementWithAppendedChildren(
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
      ),
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
      ),
      new ElementWithAppendedChildren(
        new CreatedElement(
          'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
        ),
        new CreatedElement(
          'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
        )
      ),
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
      )
    )
  ),
  {
    tagName: 'tag',
    attributes: [
      {name: 'attr1', value: 'value1'},
      {name: 'attr2', value: 'value2'},
      {name: 'attr3', value: 'value3'}
    ],
    children: [
      {text: "text"},
      {
        tagName: 'tag',
        attributes: [
          {name: 'attr1', value: 'value1'},
          {name: 'attr2', value: 'value2'},
          {name: 'attr3', value: 'value3'}
        ],
        children: [
          {text: "text"}
        ]
      },
      {
        tagName: 'tag',
        attributes: [
          {name: 'attr1', value: 'value1'},
          {name: 'attr2', value: 'value2'},
          {name: 'attr3', value: 'value3'}
        ],
        children: [
          {text: "text"},
          {
            tagName: 'tag',
            attributes: [
              {name: 'attr1', value: 'value1'},
              {name: 'attr2', value: 'value2'},
              {name: 'attr3', value: 'value3'}
            ],
            children: [
              {text: "text"}
            ]
          }
        ]
      },
      {
        tagName: 'tag',
        attributes: [
          {name: 'attr1', value: 'value1'},
          {name: 'attr2', value: 'value2'},
          {name: 'attr3', value: 'value3'}
        ],
        children: [
          {text: "text"}
        ]
      }
    ]
  }
).call();
