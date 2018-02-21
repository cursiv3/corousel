export const moveToStart = state => {
  return Object.assign({}, state, {
    fwdEnter: "enterFromRight",
    exitMove: "exitToLeft",
    activeDot: 0,
    isActive: false
  });
};
export const moveToEnd = state =>
  Object.assign({}, state, {
    backEnter: "enterFromLeft",
    exitMove: "exitToRight",
    activeDot: state.imageList.length - 1,
    isActive: false
  });

export const forwardClick = state =>
  Object.assign({}, state, {
    fwdEnter: "enterFromRight",
    exitMove: "exitToLeft",
    activeDot: state.currentIdx + 1,
    isActive: false
  });

export const backwardClick = state =>
  Object.assign({}, state, {
    backEnter: "enterFromLeft",
    exitMove: "exitToRight",
    activeDot: state.currentIdx - 1,
    isActive: false
  });
