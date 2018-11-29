'use strict'

const { AsyncObject } = require('@page-libs/cutie');

class ElementWithAttributes extends AsyncObject {

  constructor(elm, attrStr) {
    super(elm, attrStr);
  }

  definedSyncCall() {
    return (elm, attrStr) => {
      attrStr.split(' ').forEach(attrPair => {
        let nameAndValue = attrPair.split('=');
        let name = nameAndValue[0].trim();
        let value = nameAndValue[1].replace(/['"]+/g, '').trim();
        elm.setAttribute(name, value);
      });
      return elm;
    }
  }

}

module.exports = ElementWithAttributes;
