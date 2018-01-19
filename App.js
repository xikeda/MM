import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';

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
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Added firebase
          </Text>
          <Text style={styles.instructions}>
            Brandon Ikeda
          </Text>
        </View>
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
