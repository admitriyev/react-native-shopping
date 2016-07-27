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

class BaseContainer extends Component {
  constructor(props) {
    console.log("BaseContainer props " + JSON.stringify(props));
    console.log("BaseContainer episodes " + JSON.stringify(episodes));
    super(props);
    this.state = {
      episode: episodes[0],
      product: episodes[0].products[0]
    };
  }
}

class EpisodeContainer extends BaseContainer {

  render() {
    console.log("BaseContainer:render props " + JSON.stringify(this.props));
    var {height, width} = Dimensions.get('window');
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Image source={{uri: this.state.episode.image}}
          style={[styles.container_image, {height:height / 2, width: width}]} />
      </TouchableHighlight>
    );
  }

  _onPressButton() {
    console.log("_onPressButton props" + JSON.stringify(this.props));
    console.log("_onPressButton episodes " + JSON.stringify(episodes));
    newState = {
      episode: episodes[1],
      product: episodes[1].products[0]
    }
    this.setState(newState);
  }
}

class ProductContainer extends BaseContainer {

  render() {
    console.log("BaseContainer:render props " + JSON.stringify(this.props));
    var {height, width} = Dimensions.get('window');
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Image source={{uri: this.state.product.image}}
          style={[styles.container_image, {height:height / 2, width: width}]} />
      </TouchableHighlight>
    );
  }

  _onPressButton() {
    console.log("_onPressButton props" + JSON.stringify(this.props));
    this.setState({
      episode: this.state.episode,
      product: episodes[1].products[1]
    });
  }

}


export default class ReactNativeShopping extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EpisodeContainer/>
        <ProductContainer/>
      </View>
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
  container_image: {
    resizeMode: 'contain'
  }
});
