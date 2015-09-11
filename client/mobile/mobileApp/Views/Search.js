'use strict';

var React = require('react-native');
var SearchBar = require('react-native-search-bar');
var SideMenu = require('react-native-side-menu');
var Menu = require('./SideBar');

var {
  Component,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      touchToClose: false,
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  }

  handleOpenWithTouchToClose() {
    this.setState({
      touchToClose: true,
    });
  }

  handleChange(isOpen) {
    if (!isOpen) {
      this.setState({
        touchToClose: false,
      });
    }
  }

  render(){
    var spacer = <View style={styles.spacer}/>;
    return(
      <View style={styles.container}>
        <SideMenu
          menu={<Menu />}
          menuPosition='right'
          touchToClose={this.state.touchToClose}
          onChange={this.handleChange.bind(this)}>
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
        </SideMenu>
      </View>
    );
  }
};

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