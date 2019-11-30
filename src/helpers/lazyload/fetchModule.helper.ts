import MainRouter from "@/router";
import MainStore from "@/store";

export const fetchModule = async (moduleName?: string) => {
  try {
    const importedModule = await import(
      /* webpackChunkName: "module-[request]" */ `@/modules/${moduleName}`
    );
    return importedModule.default;
  } catch (error) {
    console.error(error);
    throw new Error("MODULE_NOT_FOUND");
  }
};
