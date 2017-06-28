import React from 'react';

import MyApp from './MyApp';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  rootReducer  from './reducers/reducers';

export default class App extends React.Component {

  

  render() {
    store = createStore(rootReducer);
    
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}