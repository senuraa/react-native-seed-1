// Library
import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Provider, ReactRedux } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// Redux Containers and Common Store
import { store } from './common/redux/root-store';
import ProductList from './modules/product/product.container';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{
                      flex: 1,
                      backgroundColor: 'white',
                      justifyContent: 'space-between'
                  }}> 
            <ProductList />
        </SafeAreaView>  
      </Provider>
    );
  }
}
