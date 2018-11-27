'use strict'

const { AsyncObject } = require('@page-libs/cutie');

class ElementWithAppendedChildren extends AsyncObject {

  constructor(elm, ...children) {
    super(elm, ...children);
  }

  definedSyncCall() {
    return (elm, ...children) => {
      children.forEach(child => {
        elm.appendChild(child);
      });
      return elm;
    }
  }

}

module.exports = ElementWithAppendedChildren;
