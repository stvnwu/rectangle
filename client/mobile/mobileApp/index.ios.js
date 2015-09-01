/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Signup = require('./Signup');
var CardInfo = require('./CardInfo');
var Login = require('./Login');
var Auth = require('./Auth');
var Camera = require('./Camera');
var ImportCard = require('./ImportCard');
var Map = require('./Map');
var globalStyles = require('./Stylesheet');
var PhotoLibrary = require('./PhotoLibrary');
var Profile = require('./Profile');
var QR = require('./QR');
var QRCamera = require('./QRCamera');
var Search = require('./Search');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class mobileApp extends Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.navContainer}
        initialRoute={{
          title: 'workwhere',
          component: DumbRoutes,
        }}/>
    );
  }
}

class DumbRoutes extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Auth</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this._signUpHandler.bind(this)}>
            <Text style={styles.buttonText} >Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this._loginHandler.bind(this)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Import</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this._cardInfoHandler.bind(this)}>
            <Text style={styles.buttonText}>Card Info</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Library</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Map</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>QR</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Index</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Blah</Text>
          </TouchableHighlight>
        </View>
      </View>  
    );
  }
  //here I added the event handler
  _signUpHandler (){
    this.props.navigator.push({
            title: 'Signup',
            component: Signup
          });
  };
  _loginHandler (){
    this.props.navigator.push({
            title: 'Login',
            component: Login
          });
  };
  _cardInfoHandler (){
    this.props.navigator.push({
            title: 'CardInfo',
            component: CardInfo
          });
  };


}

var styles = StyleSheet.create({
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    marginTop: 65,
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',

  },
  navContainer: {
    flex: 1,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('mobileApp', () => mobileApp);
