import { PersistedStateOptions } from "pinia-plugin-persistedstate";

const piniaPersistConfig = (key: string, paths?: []) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    paths,
  };
  return persist;
};

export default piniaPersistConfig;
