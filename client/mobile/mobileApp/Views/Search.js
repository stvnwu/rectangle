'use strict';

var React = require('react-native');
var SearchBar = require('react-native-search-bar');
var globalStyles = require('../Stylesheet');


var {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
  }
});

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar placeholder='Search'
          //onChangeText={...}
          //onSearchButtonPress={...}
          //onCancelButtonPress={...}
        />
      </View>
    );
  }
}

module.exports = Search;