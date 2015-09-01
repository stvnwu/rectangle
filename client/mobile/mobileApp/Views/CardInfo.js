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
  },
  top:{
    flex: 1,
  },
  mid:{
    flexDirection: 'row',
  },
  bot:{
    flex: 1,
  },
});

class CardInfo extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={globalStyles.prompt}>Fill the required fields</Text>
          </View>
          <TextInput
              style={globalStyles.textInput}
              placeholder='First name...'/>
          <TextInput
              style={globalStyles.textInput}
              placeholder='Last name...'/>
          <TextInput
              style={globalStyles.textInput}
              placeholder='Email...'/>
          <TextInput
              style={globalStyles.textInput}
              placeholder='Phone...'/>
          <TextInput
              style={globalStyles.textInput}
              placeholder='Company...'/>
          <TextInput
              style={globalStyles.textInput}
              placeholder='Job title...'/>
          <View style={styles.bot}>
            <TouchableHighlight style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Send</Text>
            </TouchableHighlight>
          </View>

        </View>
        );
  }
}

module.exports = CardInfo;