import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import ProductNavigation from './Navigation/ProductNavigation';
import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import {composeWithDevTools} from 'redux-devtools-extension';
import OrdersReducer from './store/reducers/orders';

const rootReducer=combineReducers({
  products:productReducer,
  cart:cartReducer,
  orders:OrdersReducer
})
const store=createStore(rootReducer,composeWithDevTools());

export default function App() {
  const [isLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
  return (
    <Provider store={store}>
    {!isLoaded?<AppLoading/>:<ProductNavigation/>}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
