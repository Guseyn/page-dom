'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class ElementWithAdditionalHTML extends AsyncObject {
  constructor (elm, html) {
    super(elm, html)
  }

  syncCall () {
    return (elm, html) => {
      elm.innerHTML += html
      return elm
    }
  }
}

module.exports = ElementWithAdditionalHTML
