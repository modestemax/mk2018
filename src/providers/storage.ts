// import { Plugins } from '@capacitor/core';
//
// const { Storage } = Plugins;
//
// const storage = Storage as any;

const storage = window.localStorage;


function extendsStorage() {
  // if (!storage.setItem) {
  //   storage.setItem = async function setItem(item: string) {
  //     await storage.set(item);
  //   };
  // }
  // if (!storage.getItem) {
  //   storage.getItem = async function getItem(key: string) {
  //     return storage.get({ key });
  //   };
  // }
  // if (!storage.removeItem) {
  //   storage.removeItem = async function removeItem(key: string) {
  //     await storage.remove({ key });
  //   };
  // }
}

extendsStorage();



export function set(key: string, value: any): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      storage && await storage.setItem(key, JSON.stringify(value));
      resolve();
    } catch (err) {
      reject(`Couldnt store object ${err}`);
    }
  });
}

export function remove(key: string): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
      storage && await storage.removeItem(key);
      resolve();
    } catch (err) {
      reject(`Couldnt remove object ${err}`);
    }
  });
}

export function get(key: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      if (storage) {
        const item =await storage.getItem(key);
        resolve(JSON.parse(item));
      }
      resolve(undefined);
    } catch (err) {
      reject(`Couldnt get object: ${err}`);
    }
  });
}
