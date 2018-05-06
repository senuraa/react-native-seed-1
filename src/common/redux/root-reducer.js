// Library
import { combineReducers } from 'redux';

// Redux
import { ADD_TO_CART } from '../../modules/product/redux/product.actions';
import { products } from '../../modules/product/redux/product.reducer';

/**
 * shopping cart reducer.
 */
const shoppingCart = combineReducers({
  products
});

/**
 * Returns the combined reducer.
 * @param state
 * @param action
 */
export const rootReducer = (state, action) => {
  // if(action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0)
  //   return state;

  return shoppingCart(state, action)
}
