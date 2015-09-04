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
    flex: 2,
  },
  prompt2: {
    backgroundColor: 'red',
    fontSize: 30,
    color: 'blue',
    flex: 1,
  },

  spacer: {
    height: 100,
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
  titleContainerBox: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 14,
  },
  disclosure: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  children: {
    margin: 10,
  }

});

module.exports = Auth;