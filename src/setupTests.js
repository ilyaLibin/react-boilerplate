const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: new Object().prototype,
  prototype: {},
  setObject: jest.fn(),
  getObject: jest.fn()
};

global.localStorage = localStorageMock;
global.Storage = localStorageMock;