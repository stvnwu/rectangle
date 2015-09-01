'use strict';

var React = require('react-native');
var globalStyles = require('./Stylesheet');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
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

});

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>
        Sign Up now...
      </Text>
        <TextInput
            style={styles.textInput}
            placeholder='Name...'/>
        <TextInput
            style={styles.textInput}
            placeholder='Last...'/>
        <TextInput
            style={styles.textInput}
            placeholder='Password...'/>
        <TextInput
            style={styles.textInput}
            placeholder='Email...'/>
        <TouchableHighlight style={styles.button}
             underlayColor='#99d9f4'>
           <Text style={styles.buttonText}>
              Send
           </Text>
         </TouchableHighlight>
      </View>
      );
  }
}

module.exports = Signup;

