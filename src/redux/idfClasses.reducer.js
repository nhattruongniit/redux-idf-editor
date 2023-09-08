import * as idfClassesAction from "./idfClasses.action";

const initialState = {
  classesItem: null,
  selectedObjects: [],
};

export function idfClassesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case idfClassesAction.SET_ACTIVE_CLASSES:
      return {
        ...state,
        classesItem: payload,
      };
    case idfClassesAction.SELECTED_OBJECTS:
      return {
        ...state,
        selectedObjects: payload,
      };
    case idfClassesAction.RESET_SELECTED_OBJECTS:
      return {
        ...state,
        selectedObjects: [],
      };
    default:
      return state;
  }
}
