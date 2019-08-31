'use strict'

const { AsyncObject } = require('@page-libs/cutie')

class ReplacedElement extends AsyncObject {
  constructor (newElm, oldElm) {
    super(newElm, oldElm)
  }

  syncCall () {
    return (newElm, oldElm) => {
      oldElm.parentNode.replaceChild(newElm, oldElm)
      return newElm
    }
  }
}

module.exports = ReplacedElement
