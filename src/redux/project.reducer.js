import * as projectAction from "./project.action";

const initialState = {
  project: null,
};

export function projectReducer(state = initialState, { type, payload }) {
  switch (type) {
    case projectAction.SET_PROJECT:
      return {
        ...state,
        project: payload,
      };
    default:
      return state;
  }
}
