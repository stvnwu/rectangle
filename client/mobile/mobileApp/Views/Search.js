'use strict';

var React = require('react-native');
var SearchBar = require('react-native-search-bar');

var {
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Search = React.createClass({
  render: function(){
    var spacer = <View style={styles.spacer}/>;
    return(
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          {spacer}
          <View style={styles.header}> 
            <SearchBar 
              placeholder={'Search'}
              //onChangeText={...}
              //onSearchButtonPress={...}
              //onCancelButtonPress={...}
            />
          </View>
          <View style={styles.footer}>
          </View>
        </ScrollView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
  header: {
    flex: 1,
  },
  spacer:{
    paddingTop: 43,
    backgroundColor: '#1abc9c'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  }
});

module.exports = Search;