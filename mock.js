'use strict'

const { AsyncObject } = require('@cuties/cutie');
const PageAsyncObject = require('@page-libs/cutie').AsyncObject;
const index = require('./src/index');

// mock global document

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

// async object that gets only data from object

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

// transform all async objects from @page-libs/cutie to @cuties/cutie for testing

for (let key in index) {
  if (index[key].prototype instanceof PageAsyncObject) {
    Object.setPrototypeOf(index[key].prototype, AsyncObject.prototype);
    Object.setPrototypeOf(index[key], AsyncObject);
  }
}

module.exports = {
  ObjWithNoFuncs
}

