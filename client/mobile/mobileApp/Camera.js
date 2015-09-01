'use strict';

var React = require('react-native');
var globalStyles = require('./Stylesheet');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop:65,
  }
});

class Camera extends Component {
  render() {
      return (
        <View style={styles.container}>
        </View>
        );
  }
}

module.exports = Camera;