export const upsideSecurityMiddleState = {
  managementId: undefined,
  name: undefined,
  enabled: false,
  visible: false,
  contracted: false,
  model: {
    setting: undefined,
  },
  title: undefined,
  webfilterLevel: {
    none: { label: undefined, value: 0 },
    low: { label: undefined, value: 1 },
    middle: { label: undefined, value: 2 },
    high: { label: undefined, value: 3 },
  },
  primaryKey: undefined,
};

export const upsideSecurityMiddleMutations = {
  setManagementId(state, id) {
    state.managementId = id;
  },

  setName(state, name) {
    state.name = name;
  },

  visible(state, value) {
    state.visible = value;
  },

  contracted(state, value) {
    state.contracted = value;
  },

  reset(state) {
    state.model.setting = state.webfilterLevel.none.label;
  },

  setTitle(state, title) {
    state.title = title;
  },

  setWebfilterLevel(state, labels) {
    for (let key in labels) {
      state.webfilterLevel[key].label = labels[key];
    }
  },
};

export const upsideSecurityMiddleActions = {
  contract({ state, dispatch, rootGetters }, id) {
    return dispatch(
      "post",
      {
        url: rootGetters["api/contracts"],
        params: {
          customerId: id,
          serviceId: state.primaryKey,
          settings: {
            webfilterLevel: Object.values(state.webfilterLebel).find(
              (element) => {
                return element.label === state.model.setting;
              }
            ).value,
          },
        },
      },
      { root: true }
    );
  },

  async cancelAnimationFrame({
    state,
    commit,
    dispatch,
    getters,
    rootGetters,
  }) {
    let respnse = await dispatch(
      "delete",
      {
        url: "${rootGetters['api/contracts']}/${getters['id']()}",
      },
      { root: true }
    );
    return response;
  },
};
