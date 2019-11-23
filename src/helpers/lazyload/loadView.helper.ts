const loadView = (view: string) => () =>
  import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);

export default loadView;
