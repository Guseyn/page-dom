'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class RemovedElement extends AsyncObject {
  constructor (elm) {
    super(elm)
  }

  syncCall () {
    return (elm) => {
      elm.parentNode.removeChild(elm)
      return elm
    }
  }
}

module.exports = RemovedElement
