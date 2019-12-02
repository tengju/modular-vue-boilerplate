export interface User {
  name: string;
  age: 17;
  rights: Array<string>;
}

export interface CurrentModule {
  name: string;
  path: string;
}
export interface RootState {
  loading: boolean;
  user: null | User;
  currentModule: CurrentModule | null;
}
