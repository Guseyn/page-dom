"use strict";

var exportsObj = require('./elms');

exportsObj.CreatedElement = require('./CreatedElement');
exportsObj.ElementWithAdditionalHTML = require('./ElementWithAdditionalHTML');
exportsObj.ElementWithAppendedChildren = require('./ElementWithAppendedChildren');
exportsObj.ElementWithAppendedText = require('./ElementWithAppendedText');
exportsObj.ElementWithAttributes = require('./ElementWithAttributes');
exportsObj.ElementWithInnerHTML = require('./ElementWithInnerHTML');
exportsObj.ElementWithPrependedChildren = require('./ElementWithPrependedChildren');
exportsObj.ElementWithTextContent = require('./ElementWithTextContent');
exportsObj.RemovedElement = require('./RemovedElement');
exportsObj.ReplacedElement = require('./ReplacedElement');
exportsObj.UnwrappedChildrenOfParent = require('./UnwrappedChildrenOfParent');
module.exports = exportsObj;
