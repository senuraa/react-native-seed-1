// Library
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

// Redux
import { getCart } from './product.reducer';
import { api } from '../../../common/services/product.service';
import * as actions from './product.actions';

/**
 * search products epic
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
export const searchProducts = (action$) => {
  return action$
    .ofType(actions.GET_ALL_PRODUCTS).switchMap(q => {
      /*
       * This example uses the same api of the redux-saga example, thus
        * it adapts a Promise to an Observable.
       */
      return api.getProducts().map(actions.receiveProducts)
    });
};

/**
 * checkout epic.
 * @param action$
 * @param store
 * @returns {any|*|Observable}
 */
export const checkout = (action$,store) => {
  return action$
    .ofType(actions.CHECKOUT_REQUEST).switchMap(q => {
      const cart = getCart(store.getState());
      return api.buyProducts(cart)
        .map(cart => actions.checkoutSuccess(cart))
        .catch(error => Observable.of(actions.checkoutFailure(error)))
    });
};
