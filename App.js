import 'react-native-gesture-handler'
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers'
import Page from './src';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Page />
    </Provider>
  );
}