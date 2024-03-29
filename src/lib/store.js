import { writable } from 'svelte/store';

const browser = typeof window !== 'undefined';

const persist_storage = (key, initValue) => {
  if (browser) {
    const storedValueStr = localStorage.getItem(key);
    const store = writable(storedValueStr != null ? JSON.parse(storedValueStr) : initValue);
    store.subscribe((val) => {
      localStorage.setItem(key, JSON.stringify(val));
    });
    return store;
  } else {
    // return a dummy store for server-side rendering
    return writable(initValue);
  }
};

export const access_token = persist_storage('access_token', '');
export const id = persist_storage('id', '');
export const nickname = persist_storage('nickname', '');
export const email = persist_storage('email', '');
export const vendor = persist_storage('vendor', '');
export const createdAt = persist_storage('createdAt', '');
export const is_login = persist_storage('is_login', false);
