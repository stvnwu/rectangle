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
  button:{
    flex: 1
  },
  container: {
    marginTop:65,
  },
  flowRight: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  }
});

class ImportCard extends Component {
  render() {
      return (
        <View style={styles.container}>
          <Text style={[globalStyles.text, styles.text]}>
            Update your business card
          </Text>
          <View style={styles.flowRight}>
            <TouchableHighlight style={[globalStyles.button, styles.button]}
                 underlayColor='#99d9f4'>
               <Text style={globalStyles.buttonText}>
                  Camera Roll
               </Text>
            </TouchableHighlight>
            <TouchableHighlight style={[globalStyles.button, styles.button]}
                  underlayColor='#99d9f4'>
                <Text style={globalStyles.buttonText}>
                   Take a Photo
                </Text>
            </TouchableHighlight>
          </View>
        </View>
        );
  }
}

module.exports = ImportCard;


