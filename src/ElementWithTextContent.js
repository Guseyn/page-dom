
'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class ElementWithTextContent extends AsyncObject {
  constructor (elm, html) {
    super(elm, html)
  }

  syncCall () {
    return (elm, html) => {
      elm.textContent = html
      return elm
    }
  }
}

module.exports = ElementWithTextContent
