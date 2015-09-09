var React = require('react-native');
var Camera = require('react-native-camera');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var CameraPage = React.createClass({
  getInitialState: function() {
    return {
      cameraType: Camera.constants.Type.back
    }
  },

  render: function() {

    return (
      <Text style={styles.welcome}>
        Scan the QR to connect!
      </Text>
      <Camera
        ref="cam"
        style={styles.container}
        onBarCodeRead={(event)=> this._onBarCodeRead(event)}
        type={this.state.cameraType}
      >
      </Camera>
    );
  },
  _onBarCodeRead: function(data) {
    console.log(data,'<----------------CAM DATA');
    
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    color: '#333333',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});

module.exports = CameraPage;