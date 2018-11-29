'use strict'

const { AsyncObject } = require('@page-libs/cutie');

class ElementWithText extends AsyncObject {

  constructor(elm, text) {
    super(elm, text);
  }

  definedSyncCall() {
    return (elm, text) => {
      elm.appendChild(document.createTextNode(text));
      return elm;
    }
  }

}

module.exports = ElementWithText;
