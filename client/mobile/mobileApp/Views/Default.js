'use strict';

var React = require('react-native');
var AllCards = require('./AllCards');
var QR = require('./QR');
var Camera = require('./Camera');
var Map = require('./Map');
var Profile = require('./Profile');

var {
  Component,
  NavigatorIOS,
  Navigator,
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
  renderScene(route, navigator) {
      var Component = route.component;
      return (
        <View style={styles.container}>
          <Component
            route={route}
            navigator={navigator}
            topNavigator={navigator} />
        </View>
        )
    }

  render(){
    return (
      <View style={styles.container}>
        <TabBarIOS
          
          tintColor={'#1B374A'}
          barTintColor={'white'}
          translucent={true}>


          <TabBarItemIOS
            name="home"
            iconName={'fontawesome|home'}
            title={'Home'}
            iconSize={24}
            accessibilityLabel="Home Tab"
            selected={this.state.selectedTab === 'home'}
            onPress={() =>{
              if (this.state.selectedTab !== 'home'){
                this.setState({
                  selectedTab: 'home'
                });
                this.refs.AllCardsRef.replace({
                  title: 'Connections',
                  component: AllCards
                });
              } else if (this.state.selectedTab === 'home') {
                this.refs.AllCardsRef.replace({
                  title: 'Connections',
                  component: AllCards
                });
              }
            }}>
            {this.renderAllCards()}
          </TabBarItemIOS>
          

          <TabBarItemIOS
            name="QR"
            iconName={'fontawesome|qrcode'}
            title={'QR'}
            iconSize={24}
            accessibilityLabel="QR Tab"
            selected={this.state.selectedTab === 'QR'}
            onPress={() =>{
              if (this.state.selectedTab !== 'QR'){
                this.setState({
                  selectedTab: 'QR'
                });

              } else if (this.state.selectedTab === 'QR') {
                this.refs.QRRef.replace({
                  title: 'QR',
                  component: QR
                });
              }
            }}>
            {this.renderQR()}
          </TabBarItemIOS>
          

          <TabBarItemIOS
            name="scan"
            iconName={'fontawesome|camera'}
            title={'Scan'}
            iconSize={20}
            accessibilityLabel="Scan Tab"
            selected={this.state.selectedTab === 'scan'}
            onPress={() =>{
              this.setState({
                selectedTab: 'scan'
              });

              if (this.refs.CameraRef){
                this.refs.CameraRef.replace({
                  title: 'Camera',
                  component: Camera
                });
              }
            }}>
            {this.renderCamera()}
          </TabBarItemIOS>


          <TabBarItemIOS
            name="profile"
            iconName={'fontawesome|user'}
            title={'Profile'}
            iconSize={20}
            accessibilityLabel="Profile"
            selected={this.state.selectedTab === 'profile'}
            onPress={() =>{
              if (this.state.selectedTab !== 'profile'){
                this.setState({
                  selectedTab: 'profile'
                });
              } else if (this.state.selectedTab === 'profile') {
                this.refs.ProfileRef.replace({
                  title: 'Profile',
                  component: Profile
                });
              }
            }}>
            {this.renderProfile()}
          </TabBarItemIOS>


          <TabBarItemIOS
            name="Map"
            iconName={'fontawesome|globe'}
            title={'Map'}
            iconSize={24}
            accessibilityLabel="Map Tab"
            selected={this.state.selectedTab === 'Map'}
            onPress={() =>{
              if (this.state.selectedTab !== 'Map'){
                this.setState({
                  selectedTab: 'Map'
                });
              } else if (this.state.selectedTab === 'Map') {
                this.refs.MapRef.replace({
                  title: 'Map',
                  component: Map
                });
              }
            }}>
            {this.renderMap()}
          </TabBarItemIOS>
          
        </TabBarIOS>
      </View>
    );
  }
  renderAllCards(){
    return (
      <Navigator
        navigationBarHidden={false}
        renderScene={this.renderScene}
        ref='AllCardsRef'
        initialRoute={{
          component: AllCards
        }}/>
        )
  }
  renderQR(){
    return (
      <NavigatorIOS
        renderScene={this.renderScene}
        ref='QRRef'
        style={styles.container}
        tintColor='#1B374A'
        barTintColor='#FFFFFD'
        titleTextColor='#1B374A'
        initialRoute={{
          title: 'QR',
          component: QR
        }}/>
        )
  }
  renderCamera(){
      return (
        <NavigatorIOS
          renderScene={this.renderScene}
          ref='CameraRef'
          style={styles.container}
          tintColor='#1B374A'
          barTintColor='#FFFFFD'
          titleTextColor='#1B374A'
          initialRoute={{
            title: 'Camera',
            component: Camera
          }}/>

          )
    }
  renderMap(){
    return (
      <NavigatorIOS
        renderScene={this.renderScene}
        ref='MapRef'
        style={styles.container}
        tintColor='#1B374A'
        barTintColor='#FFFFFD'
        titleTextColor='#1B374A'
        initialRoute={{
          title: 'Map',
          component: Map
        }}/>
        )
  }
  renderProfile(){
    return (
      <NavigatorIOS
        renderScene={this.renderScene}
        ref='ProfileRef'
        style={styles.container}
        tintColor='#1B374A'
        barTintColor='#FFFFFD'
        titleTextColor='#1B374A'
        initialRoute={{
          title: 'Profile',
          component: Profile
        }}/>
        )
  }

};


var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = Default;