'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  button: {
    height: 36,
    margin: 10,
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
  textInput: {
    height: 36,
    padding: 10,
    margin: 10,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    flexDirection: 'row',
    color: '#48BBEC'
  },
  text: {
    color: 'black',
    fontSize: 30,
    margin: 80
  }
  

});
