import MainRouter from "@/router";
import MainStore from "@/store";

const loadModule = async (moduleName: string) => {
  try {
    const importedModule = await import(
      /* webpackChunkName: "module-[request]" */ `@/modules/${moduleName}`
    );
    const { name, router, store } = importedModule.default;
    MainRouter.addRoutes(router);
    MainStore.registerModule(name, store);
  } catch (error) {
    console.log("MODULE NOT FOUND");
  }
};

export default loadModule;
