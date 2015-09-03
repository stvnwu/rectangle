'use strict';

var React = require('react-native');
var Signup = require('./Signup');
var Login = require('./Login');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Auth = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.prompt}>WorkWhere</Text>
        </View>
        <View style={styles.middle}>
        </View>
        <View style={styles.bottom}>
          <TouchableHighlight  
            style={styles.button}
            onPress={this._signUpHandler.bind(this)}>
            <Text 
            style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.button}
            onPress={this._loginHandler.bind(this)}>
            <Text 
            style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
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
  }
});

var styles = StyleSheet.create({
  bottom: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#1abc9c',
    borderColor: '#1abc9c',
    borderWidth: 1,
    borderRadius: 8,
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
    flexDirection :'column', 
    justifyContent: 'center',
  },
  middle: {
    flex: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  prompt: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center'
  },
  top: {
    backgroundColor: '#1abc9c',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

module.exports = Auth;