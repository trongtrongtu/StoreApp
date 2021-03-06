import React from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'https://76013ba0.ngrok.io/';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'black'
  }
});
