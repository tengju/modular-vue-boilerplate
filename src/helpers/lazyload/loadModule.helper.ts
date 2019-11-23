import MainRouter from "@/router";
import MainStore from "@/store";

const loadModule = async (moduleName: string) => {
  const importedModule = await import(
    /* webpackChunkName: "module-[request]" */ `@/modules/${moduleName}`
  );
  const { name, router, store } = importedModule.default;
  MainRouter.addRoutes(router);
  MainStore.registerModule(name, store);
};

export default loadModule;
