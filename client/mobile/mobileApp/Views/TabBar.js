'use strict';

var React = require('react-native');
// var New = require('./New');
var Search = require('./Search');
var QR = require('./QR');
var Camera = require('./Camera');
var Map = require('./Map');
var Profile = require('./Profile');
var Icon = require("react-native-vector-icons/FontAwesome");

var {
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

class TabBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'search'
      };
    }
  render(){
    return(
    <TabBarIOS selectedTab={this.state.selectedTab}>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'search'}
        systemIcon='search'
        onPress={() => {
              this.setState({
                  selectedTab: 'search',
              });
        }}>
          <Search/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'qr'}
        systemIcon='history'
        onPress={() => {
              this.setState({
                  selectedTab: 'qr',
              });
        }}>
          <QR/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'camera'}
        systemIcon='history'
        onPress={() => {
              this.setState({
                  selectedTab: 'camera',
              });
        }}>
          <Camera/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'map'}
        systemIcon='bookmarks'
        onPress={() => {
            this.setState({
                selectedTab: 'map',
            });
        }}>
          <Map/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
        selected={this.state.selectedTab === 'profile'}
        systemIcon='featured'
        onPress={() => {
              this.setState({
                  selectedTab: 'profile',
              });
        }}>
          <Profile/>
      </TabBarIOS.Item>

    </TabBarIOS>
    )
  }  
}

module.exports = TabBar;