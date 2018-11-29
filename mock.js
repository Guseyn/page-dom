'use strict'

const { AsyncObject } = require('@cuties/cutie');

global.document = {
  createElement: (tagName) => {
    let elm = {
      tagName: tagName,
      attributes: [],
      children: [],
      setAttribute: (name, value) => {
        let index = elm.attributes.findIndex(
          (elm) => {
            return elm.name === name
          }
        );
        if (index >= 0) {
          elm.attributes[index].name = name;
          elm.attributes[index].value = value;
        } else {
          elm.attributes.push({
            name: name,
            value: value
          });
        }
      },
      appendChild: (child) => {
        elm.children.push(child);
      }
    }
    return elm;
  },
  createTextNode: (text) => {
    return {
      text: text
    }
  }
}

class ObjWithNoFuncs extends AsyncObject {

  constructor(elm) {
    super(elm);
  }

  definedSyncCall() {
    return (elm) => {
      this.objWithNoFuncs(elm);
      return elm
    }
  }

  objWithNoFuncs(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        delete obj[key];
      } else if (typeof obj[key] === 'object') {
        this.objWithNoFuncs(obj[key]);
      }
    }
  }

}

module.exports = {
  ObjWithNoFuncs
}

