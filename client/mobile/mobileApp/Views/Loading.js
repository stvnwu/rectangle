'use strict';

var React = require('react-native');
var Auth = require('./Auth');
var Default = require('./Default');

var {
  AsyncStorage,
  StyleSheet,
  View,
} = React;

var Loading = React.createClass({
  /**
   * Method to be run upon initialization
   * returns null (no state)
  */
  getInitialState: function() {
    this.checkSession();
    return null;
  },
  /**
   * Method that checks the mobile session
   * redirects based on the result
   * nothing returned
  */
  checkSession: function() {
    console.log('checking session');
    return AsyncStorage.getItem('userEmail')
    .then((email) => {
      if (email) {
        this.props.navigator.replace({
          title: '',
          component: Default
        }); 
      } else {
        this.props.navigator.replace({
          title: '',
          component: Auth
        });
      }
    });
  },
  /**
   * Method to render a blank view
  */
  render: function() {
    return <View style={styles.container}>
      <View style={styles.containerBox}>
      </View>
    </View>
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  containerBox: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#1B374A',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Loading;
