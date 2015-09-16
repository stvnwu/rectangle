'use strict'
var React = require('react-native');
var Auth = require('./Views/Auth')

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
} = React;

var mobileApp = React.createClass({

  renderScene: function(route, navigator) {
      var Component = route.component;
      return (
        <View style={styles.container}>
          <Component
            route={route}
            navigator={navigator}
            topNavigator={navigator} />
        </View>
        )
    },

  render: function(){
    return (
      <Navigator
        sceneStyle={styles.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        navigationBarHidden={true}
        initialRoute={{
          title: '',
          component: Auth
        }}
        itemWrapperStyle={styles.itemWrapper}
        barTintColor='#d6d7da'
        tintColor="#008888"

      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#d6d7da',
  },
});

AppRegistry.registerComponent('mobileApp', () => mobileApp);

