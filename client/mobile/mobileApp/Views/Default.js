'use strict';

var React = require('react-native');
var Search = require('./Search');
var QR = require('./QR');
var Camera = require('./Camera');
var Map = require('./Map');
var Profile = require('./Profile');

var {
  Component,
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


class Default extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <TabBarIOS
          selectedTab={this.state.selectedTab}
          tintColor={'#008888'}
          barTintColor={'#d6d7da'}>


          <TabBarItemIOS
            name="home"
            iconName={'fontawesome|home'}
            title={'Home'}
            iconSize={24}
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
            iconSize={24}
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
            iconSize={20}
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
            name="profile"
            iconName={'fontawesome|user'}
            title={'Profile'}
            iconSize={20}
            accessibilityLabel="Profile"
            selected={this.state.selectedTab === 'profile'}
            onPress={() => {
              this.setState({
                selectedTab: 'profile',
              });
            }}>
            <Profile/>
          </TabBarItemIOS>


          <TabBarItemIOS
            name="settings"
            iconName={'fontawesome|globe'}
            title={'Map'}
            iconSize={24}
            accessibilityLabel="Settings Tab"
            selected={this.state.selectedTab === 'settings'}
            onPress={() => {
              this.setState({
                selectedTab: 'settings',
              });
            }}>
            <Map/>
          </TabBarItemIOS>
          
        </TabBarIOS>
      </View>
    );
  }
};


var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = Default;