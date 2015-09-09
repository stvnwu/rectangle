'use strict';

var React = require('react-native');
var Auth = require('./Auth');

var {
  AsyncStorage,
  StyleSheet,
  View,
} = React;

var Logout = React.createClass({
  getInitialState: function() {
    this.logOut();
    return null;
  },

  logOut: function() {
    AsyncStorage.removeItem('userEmail')
    .then((userEmail) => {
      return AsyncStorage.removeItem('cardEmail');
    })
    .then((cardEmail) => {
      this.props.navigator.replace({
        title: '',
        component: Auth
      });
    })
    .catch((err) => {
      console.log(new Error(err));
    });
  },

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
    backgroundColor: '#1abc9c',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Logout;
