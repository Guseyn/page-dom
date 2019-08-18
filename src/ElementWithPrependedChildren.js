'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class ElementWithPrependedChildren extends AsyncObject {
  constructor (elm, ...children) {
    super(elm, ...children)
  }

  syncCall () {
    return (elm, ...children) => {
      elm.prepend(...children)
      return elm
    }
  }
}

module.exports = ElementWithPrependedChildren
