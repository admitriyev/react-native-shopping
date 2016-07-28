/*
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import episodes from './data'

class EpisodeContainer extends Component {

  constructor(props) {
    console.log("EpisodeContainer props " + JSON.stringify(props));
    console.log("EpisodeContainer episodes " + JSON.stringify(episodes));
    super(props);
    this.state = {
      episode: episodes[0],
      product: episodes[0].products[0]
    };
  }

  render() {
    //console.log("BaseContainer:render props " + JSON.stringify(this.props));
    var {height, width} = Dimensions.get('window');
    return (
      <View>
        <TouchableHighlight onPress={this._onPressEpisode.bind(this)}>
          <Image source={{uri: this.state.episode.image}}
            style={[styles.container_image, {height:height / 2, width: width}]} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressProduct.bind(this)}>
          <Image source={{uri: this.state.product.image}}
            style={[styles.container_image, {height:height / 2, width: width}]} />
        </TouchableHighlight>
      </View>
    );
  }

  _onPressEpisode() {
    console.log("_onPressButton props" + JSON.stringify(this.props));
    console.log("_onPressButton episodes " + JSON.stringify(episodes));
    i = (this.state.episode.episode_id === 1)? 1 : 0;
    newState = {
      episode: episodes[i],
      product: episodes[i].products[0]
    }
    this.setState(newState);
  }

  _onPressProduct() {
    console.log("_onPressButton props" + JSON.stringify(this.props));
    i = (this.state.episode.episode_id === 1)? 0 : 1;
    p = 0
    if (this.state.product.product_id === 1 || this.state.product.product_id === 3) {
      p = 1;
    }
    newState = {
      episode: this.state.episode,
      product: episodes[i].products[p]
    }
    this.setState(newState);
  }

}


export default class ReactNativeShopping extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EpisodeContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_image: {
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF'
  }
});
