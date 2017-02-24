import routes from './routes';
import actions from './actions';
import methodStubs from './configs/method-stubs';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  },
};
