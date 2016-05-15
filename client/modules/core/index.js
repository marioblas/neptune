import routes from './routes';
import actions from './actions';
import methodStubs from './configs/method_stubs';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  },
};
