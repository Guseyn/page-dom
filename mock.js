'use strict'

const { AsyncObject } = require('@cuties/cutie')

// mock global document
global.document = {
  createElement: (tagName) => {
    const elm = {
      tagName: tagName,
      attributes: [],
      children: [],
      setAttribute: (name, value) => {
        let index = elm.attributes.findIndex(
          (elm) => {
            return elm.name === name
          }
        )
        if (index >= 0) {
          elm.attributes[index].name = name
          elm.attributes[index].value = value
        } else {
          elm.attributes.push({
            name: name,
            value: value
          })
        }
      },
      appendChild: (child) => {
        elm.children.push(child)
        elm.firstChild = elm.children[0]
      },
      removeChild: (child) => {
        const shifted = elm.children.shift()
        elm.firstChild = elm.children[0]
        return shifted
      },
      parentNode: {
        replaceChild: (newChild, oldChild) => {
          return newChild
        }
      }
    }
    elm.firstChild = elm.children[0]
    return elm
  },
  createTextNode: (text) => {
    return {
      text: text
    }
  },
  createDocumentFragment: () => {
    const frag = {
      elms: [],
      appendChild: (child) => {
        frag.elms.push(child)
      }
    }
    return frag
  }
}

// async object that gets only data from object
class ObjWithNoFuncs extends AsyncObject {
  constructor (elm) {
    super(elm)
  }

  syncCall () {
    return (elm) => {
      this.objWithNoFuncs(elm)
      return elm
    }
  }

  objWithNoFuncs (obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        delete obj[key]
      } else if (typeof obj[key] === 'object') {
        this.objWithNoFuncs(obj[key])
      }
    }
  }
}

module.exports = {
  ObjWithNoFuncs
}
