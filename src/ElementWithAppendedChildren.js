'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class ElementWithAppendedChildren extends AsyncObject {
  constructor (elm, ...children) {
    super(elm, ...children)
  }

  syncCall () {
    return (elm, ...children) => {
      elm.append(...children)
      return elm
    }
  }
}

module.exports = ElementWithAppendedChildren
