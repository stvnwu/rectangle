'use strict';

var React = require('react-native');
var Signup = require('./Signup');
var Login = require('./Login');

var {
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Auth = React.createClass({
  render: function(){
    var spacer=<View style={styles.spacer}/>;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.containerBox}>
            <View style={styles.heading}>
              <Text style={styles.titleText}>WorkWhere</Text>
            </View>
            {spacer}
            <View style={styles.footer}>
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
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: '#1abc9c',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#1abc9c',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 64,
  },
  containerBox: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#1abc9c',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  footer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  heading: {
    backgroundColor: '#1abc9c',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer:{
    flex: 4,
    backgroundColor: '#1abc9c'
  },
  titleText: {
    color: 'white',
    fontSize: 30,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Auth;