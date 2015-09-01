'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
var {
  AppRegistry,
  Component,
  MapView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop:65,
  },
   card:{
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
var region = {
  latitude: 51.50,
  longitude: -0.13, 
  latitudeDelta: 0.0001, 
  longitudeDelta: 0.0001
}

class Map extends Component {
  _getAnnotations() {
    return [{
      latitude: 51.50, 
      longitude: -0.13,
      title: 'You Are Here',
      animateDrop: true,
    }];
  }

  render() {
      return (
        <View style={styles.container}>
        <Text style={globalStyles.prompt}>Map</Text>
        <MapView 
        region={region}
        annotations={this._getAnnotations()} 
         style={styles.card}>
          </MapView>
        </View>
        );
  }
}

module.exports = Map;