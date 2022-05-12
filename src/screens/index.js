import auth from './auth';
import home from './home';
import mylike from './mylike';
import search from './search';
import store from './store';
import user from './user';

export default {
    ...auth,
    ...home,
    ...mylike,
    ...search,
    ...store,
    ...user,
};