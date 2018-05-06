// Library
import { combineEpics } from 'redux-observable';

// Effects
import { searchProducts, checkout } from '../../modules/product/redux/product.effects';

export const rootEpic = combineEpics(
  searchProducts,
  checkout
);
