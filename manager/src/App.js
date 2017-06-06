//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//  Create component
class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

//  Export component
export default App;