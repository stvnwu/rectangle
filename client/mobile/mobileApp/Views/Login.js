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

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={globalStyles.prompt}>
        Welcome Back
      </Text>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Email...'/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Password...'/>
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

module.exports = Login;

