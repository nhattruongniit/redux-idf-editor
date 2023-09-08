import * as appActions from "./app.action";

const initialState = {
  isLoading: false,
};

export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case appActions.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}
