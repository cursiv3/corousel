export const moveToStart = state => {
  return Object.assign({}, state, {
    enterMove: "enterFromRight",
    exitMove: "exitToLeft",
    nextIdx: 0,
    activeDot: 0,
    isActive: false
  });
};
export const moveToEnd = state =>
  Object.assign({}, state, {
    enterMove: "enterFromLeft",
    exitMove: "exitToRight",
    nextIdx: state.imageList.length - 1,
    activeDot: state.imageList.length - 1,
    isActive: false
  });

export const forwardClick = state =>
  Object.assign({}, state, {
    enterMove: "enterFromRight",
    exitMove: "exitToLeft",
    nextIdx: state.currentIdx + 1,
    activeDot: state.currentIdx + 1,
    isActive: false
  });

export const backwardClick = state =>
  Object.assign({}, state, {
    enterMove: "enterFromLeft",
    exitMove: "exitToRight",
    nextIdx: state.currentIdx - 1,
    activeDot: state.currentIdx - 1,
    isActive: false
  });
