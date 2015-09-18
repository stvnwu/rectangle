'use strict';

var Device = require('react-native-device');
var React = require('react-native');

var {
  AsyncStorage,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  WebView,
  View,
} = React;

class QR extends Component {
  /**
   * @method to be run upon initialization
   * initializes the state with url as an empty string
   * and calls _getURL
  */
  constructor(props) {
    super(props);
    this._getURL();
    this.state = {
      url: ''
    }
  }
  /**
   * @method that retrieves the URL from AsyncStorage
   * and stores it in the class's state
  */
  _getURL(){
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
  }
  /**
   * @method that creates the WebView (QR code)
   * with the state's URL
  */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.headerC}>
            <Text style={styles.header}>Scan to Connect</Text>
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
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B374A',
  },
  header: {
    color: 'white',
    fontSize: 22,
    margin: 18,
    fontWeight: '400',
  },
  headerC: {
    backgroundColor: '#1B374A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  webView: {
    backgroundColor: 'black',
    height: Device.height/2,
    flex: 4,
  },
});

module.exports = QR;
