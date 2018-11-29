'use strict'

const { AsyncObject } = require('@page-libs/cutie');

class ElementWithInnerHTML extends AsyncObject {

  constructor(elm, html) {
    super(elm, html);
  }

  definedSyncCall() {
    return (elm, html) => {
      elm.innerHTML = html;
      return elm;
    }
  }

}

module.exports = ElementWithInnerHTML;
