'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
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
    marginTop:65,
  }
});

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={globalStyles.prompt}>
        Sign Up
      </Text>
        <TextInput
            autoFocus={true}
            style={globalStyles.textInput}
            placeholder='Name...'/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Last...'/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Password...'/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Email...'/>
        <TouchableHighlight style={globalStyles.button}
             underlayColor='#99d9f4'>
           <Text style={globalStyles.buttonText}>
              Send
           </Text>
         </TouchableHighlight>
      </View>
      );
  }
}

module.exports = Signup;

