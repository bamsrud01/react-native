//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//  Create component (requires a render method returning JSX)
class AlbumList extends Component {
  //  Add a class-level property for default component state
  state = { albums: [] };

  //  This method will run when component is about to be rendered
  componentWillMount() {
    //  Axios method, returns a promise
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //  Update state to response data using .setState()
      .then(response => this.setState({ albums: response.data }));
  }

  //  Helper method to generate album details
  renderAlbums() {
    //  Map over album data using state
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  //  Render method, returning JSX
  render() {
    console.log('State:', this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

//  Export component
export default AlbumList;
