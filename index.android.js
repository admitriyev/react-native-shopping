/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class BaseContainer extends Component {
  constructor(props) {
    console.log("BaseContainer props " + JSON.stringify(props));
    super(props);
    this.state = {image: props.image};
  }

  render() {
    console.log("BaseContainer:render props " + JSON.stringify(this.props));
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Image source={{uri: this.state.image}}
          style={{width: 400, height: 400}} />
      </TouchableHighlight>
    );
  }

  _onPressButton() {
    console.log("_onPressButton props" + JSON.stringify(this.props));
    this.setState({
      image: 'https://s3-us-west-2.amazonaws.com/admitriyev-images/show-002.jpg'
    });
  }

}

class ReactNativeShopping extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BaseContainer image='https://s3-us-west-2.amazonaws.com/admitriyev-images/show-001.jpg'/>
        <BaseContainer image='https://s3-us-west-2.amazonaws.com/admitriyev-images/product-001.jpg'/>
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
  }
});

AppRegistry.registerComponent('ReactNativeShopping', () => ReactNativeShopping);
