import * as documentAction from "./document.action";

const initialState = {
  documentId: null,
};

export function documentReducer(state = initialState, { type, payload }) {
  switch (type) {
    case documentAction.SET_DOCUMENT_ID:
      return {
        ...state,
        documentId: payload,
      };
    default:
      return state;
  }
}
