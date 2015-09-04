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
    var spacer = <View style={styles.spacer}/>;
    return (

      <View style={styles.container}>
        <ScrollView
          style={styles.wrapper}>
            <View style={styles.containerBox}>
              <View style={styles.prompt}>
                <Text style={styles.titleText}>
                  hi
                </Text>
              </View>
              <View style={styles.prompt2}>
                <Text style={styles.titleText}>
                  hi
                </Text>
              </View>
            </View>
            {spacer}
        </ScrollView>
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
 
  container: {
    backgroundColor: '#e9eaed',
    flex: 1,
    // position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
  },
  prompt: {
    backgroundColor: 'blue',
  },
  prompt2: {
    backgroundColor: 'red',
    fontSize: 30,
    color: 'blue',
  },
  spacer: {
    height: 400,
    backgroundColor: 'black'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  containerBox: {
    flex:1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  }, 

});

module.exports = Auth;