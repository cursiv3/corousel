export const moveToStart = state => {
  return Object.assign({}, state, {
    fwdEnter: "corouselEnterFromRight",
    exitMove: "corouselExitToLeft",
    activeDot: 0,
    isActive: false
  });
};
export const moveToEnd = state =>
  Object.assign({}, state, {
    backEnter: "corouselEnterFromLeft",
    exitMove: "corouselExitToRight",
    activeDot: state.imageList.length - 1,
    isActive: false
  });

export const forwardClick = state =>
  Object.assign({}, state, {
    fwdEnter: "corouselEnterFromRight",
    exitMove: "corouselExitToLeft",
    activeDot: state.currentIdx + 1,
    isActive: false
  });

export const backwardClick = state =>
  Object.assign({}, state, {
    backEnter: "corouselEnterFromLeft",
    exitMove: "corouselExitToRight",
    activeDot: state.currentIdx - 1,
    isActive: false
  });
