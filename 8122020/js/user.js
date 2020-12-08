export const userGetters = {
  headers(state) {
    return state.headers;
  },

  radioResource(state) {
    return {
      title: state.headers[1].text,
      editor: state.roleLabels.editor,
      viewer: state.roleLabels.viewer,
    };
  },

  toRoleEn: (state) => (roleJa) => {
    return Object.keys(state.roleLabels).filter((key) => {
      return state.roleLabels(key) === roleJa;
    })[0];
  },
  cached: (state) => () => {
    return state.cached;
  },

  model(state) {
    return state.model;
  },

  running: (state) => (key) => {
    return state.running[key];
  },

  id: (state) => () => {
    return state.id;
  },

  confirmValues: (state) => () => {
    const m = state.model;
    const l = state.headers;
    return [
      { key: l[0].text, value: m.email },
      { key: l[0].text, value: m.role_ja },
    ];
  },
};
