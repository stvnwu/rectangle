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
  text:{
    color: 'black',
    fontSize: 20,
    flex: 1,
    padding: 5,
    alignSelf: 'center',
    textAlign: 'left',
  },
  textInput:{
    flex: 2,
  }


});

class CardInfo extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={globalStyles.prompt}>Fill the required fields</Text>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>Name</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>Last name</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>e-mail</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>Phone</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>Company</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>
          <View style={styles.mid}>
            <Text style={styles.text}>Job title</Text>
            <TextInput style={[globalStyles.textInput, styles.textInput]}></TextInput>
          </View>

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