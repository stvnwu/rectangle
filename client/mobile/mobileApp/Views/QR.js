'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
var {
  AppRegistry,
  AsyncStorage,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  WebView,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B374A',
  },
  header: {
    color: 'white',
    fontSize: 24,
    padding: 20,
  },
  headerC: {
    backgroundColor: '#42D799',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  webView: {
    backgroundColor: 'black',
    height: 350,
    flex: 4,
  },
});

var QR = React.createClass({
  getInitialState: function() {
    this.getURl();
    return {
      url: ''
    };
  },
  render: function() {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.headerC}>
              <Text style={styles.header}>Connect [ ]</Text>
            </View>
            <WebView
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            url={this.state.url}
            startInLoadingState={true}
            />
        </ScrollView>
        </View>
        );
  },
  getURl: function(){
    AsyncStorage.getItem('cardEmail')
      .then((email) => {

        this.setState((state) => {
          return {
            url: 'https://tranquil-earth-7083.herokuapp.com/qr/getQR?cardEmail=' + email
          };
        });
        console.log('successfully got card email:', this.state.url, 'QR.js', 45);
        return this.state.url;
      })
  }
});

module.exports = QR;