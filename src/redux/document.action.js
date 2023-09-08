// constant
export const SET_DOCUMENT_ID = "DOCUMENT/SET_DOCUMENT_ID";

// action
export function setDocumentId(payload) {
  return {
    type: SET_DOCUMENT_ID,
    payload,
  };
}
