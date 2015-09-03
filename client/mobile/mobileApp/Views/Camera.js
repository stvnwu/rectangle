'use strict';

var React = require('react-native');
var Camera = require('react-native-camera');
var globalStyles = require('../Stylesheet');
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
    marginTop: 65,
  }
});

class CameraPage extends Component {

  render() {
      return (
        <View style={styles.container}>
        </View>
        );
  }

  // getInitialState() {
  //   return {
  //     cameraType: Camera.constants.Type.back
  //   }
  // };

  // render() {
  //     return (
  //       <Camera
  //         ref="cam"
  //         style={styles.container}
  //         onBarCodeRead={this._onBarCodeRead}
  //         type={this.state.cameraType}
  //       >
  //         <TouchableHighlight onPress={this._switchCamera}>
  //           <Text>The old switcheroo</Text>
  //         </TouchableHighlight>
  //         <TouchableHighlight onPress={this._takePicture}>
  //           <Text>Take Picture</Text>
  //         </TouchableHighlight>
  //       </Camera>
  //     );
  //   };

  //   _onBarCodeRead(e) {
  //     console.log(e);
  //   };

  //   _switchCamera() {
  //     var state = this.state;
  //     state.cameraType = state.cameraType === Camera.constants.Type.back
  //       ? Camera.constants.Type.front : Camera.constants.Type.back;
  //     this.setState(state);
  //   };

  //   _takePicture() {
  //     this.refs.cam.capture(function(err, data) {
  //       console.log(err, data);
  //     });
  //   };

};

module.exports = CameraPage;