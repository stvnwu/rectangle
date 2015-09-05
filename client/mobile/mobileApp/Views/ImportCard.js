'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var ImportCard = React.createClass({
  render: function(){
    var spacer=<View style={styles.spacer}/>;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.containerBox}>
            <View style={styles.header}>
              <Text style={styles.titleText}>Update your business card</Text>
            </View>
            {spacer}
            <View style={styles.footer}>
              <TouchableHighlight  
                style={styles.button}
                underlayColor={'orange'}>
                <Text 
                style={styles.buttonText}>Camera Roll</Text>
              </TouchableHighlight>
              <TouchableHighlight 
                style={styles.button}
                underlayColor={'orange'}>
                <Text 
                style={styles.buttonText}>Take a Photo</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  },
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 64,
  },
  header: {
    backgroundColor: '#1abc9c',
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  spacer: {
    flex: 4,
    backgroundColor: '#1abc9c'
  }
});

module.exports = ImportCard;


