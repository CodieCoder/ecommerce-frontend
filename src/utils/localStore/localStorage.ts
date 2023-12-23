function setItem<V>(key: string, value: V): Boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    //error saving
    console.error("localStorage Error : ", error);
    return false;
  }
}

function getItem<T>(key: string): null | undefined | T {
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  } catch (error) {
    //error fetching
    console.error("localStorage Error : ", error);
    return undefined;
  }
}

const clear = (): boolean => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    //error clearing
    console.error("localStorage Error : ", error);
    return false;
  }
};

export const key = (index: number): string | null => {
  try {
    return localStorage.key(index);
  } catch (error) {
    console.error("localStorage Error", error);
    return null;
  }
};

const removeItem = (key: string): boolean => {
  if (!key) return false;
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("localStorage Error : ", error);
    return false;
  }
};

const length = (): number | undefined => {
  try {
    return localStorage.length;
  } catch (error) {
    console.error("localStorage Error : ", error);
    return undefined;
  }
};

const resetStore = () => {
  removeItem("authBearer");
  removeItem("userDetails");
};

const Api_localStorage = {
  set: setItem,
  get: getItem,
  clear,
  key,
  remove: removeItem,
  length,
  resetStore,
};

export default Api_localStorage;
