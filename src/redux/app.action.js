// constant
export const SET_LOADING = "APP/SET_LOADING";

// action
export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}
