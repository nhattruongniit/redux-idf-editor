// constant
export const SET_ACTIVE_CLASSES = "IDF_CLASSES/SET_ACTIVE_CLASSES";
export const SELECTED_OBJECTS = "IDF_CLASSES/SELECTED_OBJECTS";
export const RESET_SELECTED_OBJECTS = "IDF_CLASSES/RESET_SELECTED_OBJECTS";

// action
export function setActiveClasses(payload) {
  return {
    type: SET_ACTIVE_CLASSES,
    payload,
  };
}

export function resetSelectedObjects() {
  return {
    type: RESET_SELECTED_OBJECTS,
  };
}

export const selectedObjects = (checked, idfObjectItem) => (dispatch, getState) => {
  const selectedObjects = [...getState().idfClasses.selectedObjects];
  if(checked) {
    selectedObjects.push(idfObjectItem);
  } else {
    selectedObjects.splice(selectedObjects.indexOf(idfObjectItem), 1);
  }

  dispatch({
    type: SELECTED_OBJECTS,
    payload: selectedObjects
  })
}
