export const accountActions = {
  edit({ dispatch, rootGetters }, params) {
    return dispatch(
      "patch",
      { url: rootGetters["api/account"], params: params },
      { root: true }
    );
  },
};
