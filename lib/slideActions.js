"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var moveToStart = exports.moveToStart = function moveToStart(state) {
  return Object.assign({}, state, {
    fwdEnter: "enterFromRight",
    exitMove: "exitToLeft",
    activeDot: 0,
    isActive: false
  });
};
var moveToEnd = exports.moveToEnd = function moveToEnd(state) {
  return Object.assign({}, state, {
    backEnter: "enterFromLeft",
    exitMove: "exitToRight",
    activeDot: state.imageList.length - 1,
    isActive: false
  });
};

var forwardClick = exports.forwardClick = function forwardClick(state) {
  return Object.assign({}, state, {
    fwdEnter: "enterFromRight",
    exitMove: "exitToLeft",
    activeDot: state.currentIdx + 1,
    isActive: false
  });
};

var backwardClick = exports.backwardClick = function backwardClick(state) {
  return Object.assign({}, state, {
    backEnter: "enterFromLeft",
    exitMove: "exitToRight",
    activeDot: state.currentIdx - 1,
    isActive: false
  });
};