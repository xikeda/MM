import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component<{}> {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyADHoLfmYylUNZTYUXI35M8d7oR_OQ_0TM',
      authDomain: 'megamanager-34f29.firebaseapp.com',
      databaseURL: 'https://megamanager-34f29.firebaseio.com',
      projectId: 'megamanager-34f29',
      storageBucket: 'megamanager-34f29.appspot.com',
      messagingSenderId: '720382922395'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
