'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
var {
  AppRegistry,
  AsyncStorage,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  WebView,
  View,
} = React;
var url = 'https://tranquil-earth-7083.herokuapp.com/qr/getQR?cardEmail='


var styles = StyleSheet.create({
  container: {
    marginTop:65,
  },
  webView: {
    backgroundColor: 'black',
    height: 350,
  },
});

var QR = React.createClass({
  render: function() {
      return (
        <View style={styles.container}>
          <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          url={this.getURl()}
          startInLoadingState={true}
        />
        </View>
        );
  },
  getURl: function(){
    AsyncStorage.getItem('cardEmail')
      .then((email) => {
        url = 'https://tranquil-earth-7083.herokuapp.com/qr/getQR?cardEmail=' + email;
        console.log('successfully got card email:', url, 'QR.js', 45);
        return url;
      })
      
    return url;
  }
});

module.exports = QR;