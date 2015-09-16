'use strict'
var React = require('react-native');

var AllCards = require('./AllCards');
var Auth = require('./Auth');
var Camera = require('./Camera');
var CardInfo = require('./CardInfo');
var Default = require('./Default');
var ImportCard = require('./ImportCard');
var Loading = require('./Loading');
var Login = require('./Login');
var Logout = require('./Logout');
var Map = require('./Map');
var New = require('./New');
var Newer = require('./Newer');
var PhotoLibrary = require('./PhotoLibrary');
var Profile = require('./Profile');
var QR = require('./QR');
var QRCamera = require('./QRCamera');
var Search = require('./Search');
var Signup = require('./Signup');
var TabBar = require('./TabBar');
var ScanError = require('./ScanError');
var ScanCorrect = require('./ScanCorrect');

var {
  AppRegistry,
  AsyncStorage,
  NavigatorIOS,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

var DumbRoutes = React.createClass({
  render: function() {
    // always log useremail and card email, to check
    AsyncStorage.getItem('userEmail')
    .then((userEmail) => {
      console.log('userEmail is', userEmail, 'DumbRoutes.js', 39);
      return AsyncStorage.getItem('cardEmail');
    })
    .then((cardEmail) => {
      console.log('cardEmail is', cardEmail, 'DumbRoutes.js', 43);
    })
    .catch((err) => {
      console.log(err);
    });

    return(
      <View style={styles.container}>
        <View style={styles.wrapper}>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._authHandler.bind(this)}>
              <Text style={styles.buttonText}>Auth</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._signUpHandler.bind(this)}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._loginHandler.bind(this)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._importCardHandler.bind(this)}>
              <Text style={styles.buttonText}>Import</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._cardInfoHandler.bind(this)}>
              <Text style={styles.buttonText}>Card Info</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._photoLibraryHandler.bind(this)}>
              <Text style={styles.buttonText}>Library</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._profileHandler.bind(this)}>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._mapHandler.bind(this)}>
              <Text style={styles.buttonText}>Map</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._qrHandler.bind(this)}>
              <Text style={styles.buttonText}>QR</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._searchHandler.bind(this)}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._defaultHandler.bind(this)}>
              <Text style={styles.buttonText}>Default</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Blah</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._loadingHandler.bind(this)}>
              <Text style={styles.buttonText}>Loading</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._newHandler.bind(this)}>
              <Text style={styles.buttonText}>New</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._newerHandler.bind(this)}>
              <Text style={styles.buttonText}>Newer</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.buttonRow}>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._logoutHandler.bind(this)}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._allCardsHandler.bind(this)}>
              <Text style={styles.buttonText}>all cards</Text>
            </TouchableHighlight>

             <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._scanCorrectHandler.bind(this)}>
              <Text style={styles.buttonText}>Scan Correct</Text>
            </TouchableHighlight>
             <TouchableHighlight style={styles.button}
                  underlayColor='#99d9f4'
                  onPress={this._scanErrorHandler.bind(this)}>
              <Text style={styles.buttonText}>Scan Error</Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>  
    );
  },
  //here I added the event handler
    _scanErrorHandler: function(){
    this.props.navigator.push({
            title: '',
            component:ScanError 
          });
  },
    _scanCorrectHandler: function(){
    this.props.navigator.push({
            title: '',
            component:ScanCorrect 
          });
  },
  _signUpHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Signup
          });
  },
  _loginHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Login
          });
  },
  _cardInfoHandler: function(){
    this.props.navigator.push({
            title: '',
            component: CardInfo
          });
  },
  _authHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Auth
          });
  },
  _cameraHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Camera
          });
  },
  _importCardHandler: function(){
    this.props.navigator.push({
            title: '',
            component: ImportCard
          });
  },
  _mapHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Map
          });
  },
  _photoLibraryHandler: function(){
    this.props.navigator.push({
            title: '',
            component: PhotoLibrary
          });
  },
  _profileHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Profile,
            passprops: {
                navigator: this.props.navigator
              }
          });
  },
  _qrHandler: function(){
    this.props.navigator.push({
            title: '',
            component: QR
          });
  },
  _qrCameraHandler: function(){
    this.props.navigator.push({
            title: '',
            component: QRCamera
          });
  },
  _searchHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Search
          });
  },

  _loadingHandler: function(){
    this.props.navigator.push({
            title: '',
            component: Loading
    });
  },
  _newHandler: function(){
      this.props.navigator.push({
              title: '',
              component: New
      });
  },
  _newerHandler: function(){
      this.props.navigator.push({
              title: '',
              component: Newer
      });
  },
  _defaultHandler: function(){
      this.props.navigator.push({
              title: '',
              component: Default,
              passprops: {
                navigator: this.props.navigator
              }
      });
  },
  _logoutHandler: function(){
    this.props.navigator.push({
      title: '',
      component: Logout
    });
  },
  _allCardsHandler: function(){
    this.props.navigator.push({
      title: '',
      component: AllCards
    });
  },

});

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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 64,
  },
});

module.exports = DumbRoutes;