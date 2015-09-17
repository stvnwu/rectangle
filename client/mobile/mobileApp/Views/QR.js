'use strict';

var Device = require('react-native-device');
var React = require('react-native');

var {
  AsyncStorage,
  Component,
  ScrollView,
  StyleSheet,
  WebView,
  View,
} = React;

var QR = React.createClass({

  getInitialState: function() {
    this._getURL();
    return {
      url: ''
    };
  },

  _getURL: function(){
    AsyncStorage.getItem('cardEmail')
    .then((email) => {
      this.setState((state) => {
        return {
          url: 'https://tranquil-earth-7083.herokuapp.com/qr/getQR?cardEmail=' + email
        };
      });
      console.log('successfully got card email:', this.state.url, 'QR.js', 45);
      return this.state.url;
    });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <WebView
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            url={this.state.url}
            startInLoadingState={true}
          />
      </ScrollView>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B374A',
  },
  webView: {
    backgroundColor: 'black',
    height: Device.height/2,
    flex: 4,
    marginTop: -100,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

module.exports = QR;