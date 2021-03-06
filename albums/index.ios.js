//  With React Native, only a single component is created per file.
    //  Others in src/components

//  Import React and React Native libraries
    //  Destructure ReactNative import to specify needed properties
import React from 'react';
import { AppRegistry, View } from 'react-native';

//  Import album components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//  Create a Component (using arrow function)
const App = () => (
  //  Components must return a single top-level element
  //  Use headerText prop to dynamically change content of <Header>
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);


//  Render component to device
    //  Name of the string in first argument must match the project name
    //  Use implicit return in arrow function to return app as second argument
AppRegistry.registerComponent('albums', () => App);

//  To run in Terminal, from project directory: react-native run-ios
    //  Refresh with command+R
    //  Debug with command+D
