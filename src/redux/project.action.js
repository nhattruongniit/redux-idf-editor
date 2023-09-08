// constant
export const SET_PROJECT = "PROJECT/SET_PROJECT";

// action
export function setProject(payload) {
  return {
    type: SET_PROJECT,
    payload,
  };
}
