'use strict'

const { AsyncObject } = require('@page-libs/cutie');

class CreatedElement extends AsyncObject {

  constructor(tagName, attrStr, text) {
    super(tagName, attrStr, text);
  }

  definedSyncCall() {
    return (tagName, attrStr, text) => {
      let elm = document.createElement(tagName);
      if (attrStr) {
        attrStr.trim().split(' ').filter(str => str.trim().length !== 0).forEach(attrPair => {
        let nameAndValue = attrPair.split('=');
        let name = nameAndValue[0].trim();
        let value = nameAndValue[1].replace(/['"]+/g, '').trim();
        elm.setAttribute(name, value);
      });
      }
      if (text) {
        elm.appendChild(document.createTextNode(text));
      }
      return elm;
    }
  }

}

module.exports = CreatedElement;
