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

var Swiper = require('react-native-swiper');

class EpisodeContainer extends Component {

  constructor(props) {
    console.log("EpisodeContainer props " + JSON.stringify(props));
    console.log("EpisodeContainer episodes " + JSON.stringify(episodes));
    super(props);
    this.state = {
      episode: episodes[0],
      product_index: 0
    };
  }

  render() {
    //console.log("BaseContainer:render props " + JSON.stringify(this.props));
    var {height, width} = Dimensions.get('window');
    i = this.state.product_index
    return (
      <View>
        <Swiper style={styles.wrapper} height={height/2}
        onMomentumScrollEnd={this._onPressEpisode.bind(this)}
        showsButtons={true}>
          {episodes.map( function(item, i) {
            return(
              <Image source={{uri: item.image}} key={i}
                style={[styles.container_image, {height:height / 2, width: width}]} />
            );
          })}
        </Swiper>
        <TouchableHighlight onPress={this._onPressProduct.bind(this)}>
          <Image source={{uri: this.state.episode.products[i].image}}
            style={[styles.container_image, {height:height / 2, width: width}]} />
        </TouchableHighlight>
      </View>
    );
  }

  _onPressEpisode(e, state, context) {
    /*
    console.log("_onPressEpisode state " + JSON.stringify(state));
    */

    i = state.index
    newState = {
       episode: episodes[i],
       product_index: 0
    }
    this.setState(newState);
  }

  _onPressProduct() {
    console.log("_onPressProduct props" + JSON.stringify(this.props));

    pi = 0;
    if (this.state.product_index < this.state.episode.products.length - 1) {
      pi = this.state.product_index + 1;
    }
    newState = {
      episode: this.state.episode,
      product_index: pi
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
  },
  wrapper: {
  }
});
