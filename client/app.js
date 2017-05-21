/**
 * Core class for load modules and init the application
 */
class App {
  constructor() {
    this.reducers = {};
    this.routes = [];
  }

  loadModule(module) {
    if (module.reducers) {
      this.reducers = {
        ...this.reducers,
        ...module.reducers,
      };
    }

    if (module.routes) {
      if (typeof module.routes !== 'function') {
        const message = 'Routes should be a function';
        throw new Error(message);
      }
      this.routes.push(...module.routes());
    }
  }

  init() {
    this.routes = this.routes.map((route, i) => ({ ...route, key: i }));
    this.initialized = true;
  }
}

const createApp = (...args) => (new App(...args));

export default createApp;
