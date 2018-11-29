'use strict'

const { ObjWithNoFuncs } = require('./../mock');
const { AsyncObject } = require('@cuties/cutie');
const { DeepEqualAssertion } = require('@cuties/assert');
const { CreatedElement, ElementWithAttributes } = require('./../src/index');
Object.setPrototypeOf(CreatedElement.prototype, AsyncObject.prototype);
Object.setPrototypeOf(CreatedElement, AsyncObject);
Object.setPrototypeOf(ElementWithAttributes.prototype, AsyncObject.prototype);
Object.setPrototypeOf(ElementWithAttributes, AsyncObject);

new DeepEqualAssertion(
  new ObjWithNoFuncs(
    new ElementWithAttributes(
      new CreatedElement(
        'tag', 'attr1="value1" attr2=\'value2\' attr3="value3"', "text"
      ), 'attr1="value111111" attr4=\'value4\''
    )
  ),
  {
    tagName: 'tag',
    attributes: [
      {name: 'attr1', value: 'value111111'},
      {name: 'attr2', value: 'value2'},
      {name: 'attr3', value: 'value3'},
      {name: 'attr4', value: 'value4'}
    ],
    children: [
      {text: "text"}
    ]
  }
).call();