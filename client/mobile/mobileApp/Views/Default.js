/**
 * React Native app demonstrating react-native-icons
 * https://github.com/corymsmith/react-native-icons
 */
'use strict';

var React = require('react-native');
var Search = require('./Search');
var QR = require('./QR');
var Camera = require('./Camera');
var Map = require('./Map');
var Profile = require('./Profile');
var Icon = require("react-native-vector-icons/FontAwesome");

var {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} = React;

var {
  Icon,
  TabBarIOS,
  Spinner 
} = require('react-native-icons');

var TabBarItemIOS = TabBarIOS.Item;

var BrandColors = {
  Facebook: '#3b5998',
  Twitter: '#55acee'
};

var Default = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
      // rotation: Animated.Value(0)
    };
  },
  render: function () {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#c1d82f'}
        barTintColor={'#000000'}
        styles={styles.tabBar}>
        

        <TabBarItemIOS
          name="home"
          iconName={'fontawesome|home'}
          title={'Home'}
          badgeValue={3}
          iconSize={18}
          accessibilityLabel="Home Tab"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Search/>
        </TabBarItemIOS>
        

        <TabBarItemIOS
          name="articles"
          iconName={'fontawesome|qrcode'}
          title={'QR'}
          iconSize={18}
          accessibilityLabel="Articles Tab"
          selected={this.state.selectedTab === 'articles'}
          onPress={() => {
            this.setState({
              selectedTab: 'articles',
            });
          }}>
          <QR/>
        </TabBarItemIOS>
        

        <TabBarItemIOS
          name="messages"
          iconName={'fontawesome|camera'}
          title={'Scan'}
          iconSize={18}
          accessibilityLabel="Messages Tab"
          selected={this.state.selectedTab === 'messages'}
          onPress={() => {
            this.setState({
              selectedTab: 'messages',
            });
          }}>
          <Camera/>
        </TabBarItemIOS>
        

        <TabBarItemIOS
          name="settings"
          iconName={'fontawesome|globe'}
          title={'Map'}
          iconSize={18}
          accessibilityLabel="Settings Tab"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          <Map/>
        </TabBarItemIOS>


        <TabBarItemIOS
          name="settings"
          iconName={'fontawesome|user'}
          title={'Profile'}
          iconSize={18}
          accessibilityLabel="Settings Tab"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          <Profile/>
        </TabBarItemIOS>
        
      </TabBarIOS>
    );
  },
});


var styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  },
  
 
});

module.exports = Default;