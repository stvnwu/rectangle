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
            name="QR"
            iconName={'fontawesome|qrcode'}
            title={'QR'}
            iconSize={24}
            accessibilityLabel="QR Tab"
            selected={this.state.selectedTab === 'QR'}
            onPress={() => {
              this.setState({
                selectedTab: 'QR'
              });
            }}>
            <QR/>
          </TabBarItemIOS>
          

          <TabBarItemIOS
            name="scan"
            iconName={'fontawesome|camera'}
            title={'Scan'}
            iconSize={20}
            accessibilityLabel="Scan Tab"
            selected={this.state.selectedTab === 'scan'}
            onPress={() => {
              this.setState({
                selectedTab: 'scan',
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
                passprops: this.props
              });
            }}>
            <Profile/>
          </TabBarItemIOS>


          <TabBarItemIOS
            name="Map"
            iconName={'fontawesome|globe'}
            title={'Map'}
            iconSize={24}
            accessibilityLabel="Map Tab"
            selected={this.state.selectedTab === 'Map'}
            onPress={() => {
              this.setState({
                selectedTab: 'Map',
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