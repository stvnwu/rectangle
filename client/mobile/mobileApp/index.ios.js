'use strict'
var React = require('react-native');
var DumbRoutes = require('./Views/DumbRoutes')

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View,
} = React;

var mobileApp = React.createClass({

  getInitialState: function(){
    return {
      openExternalExample: (null: ?React.Component),
    };
  },

  render: function(){
    if (this.state.openExternalExample) {
      var Example = this.state.openExternalExample;
      return (
        <Example
          onExampleExit={() => {
            this.setState({ openExternalExample: null, });
          }}
        />
      );
    }
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '',
          component: DumbRoutes,
          passProps: {
            onExternalExampleRequested: (example) => {
              this.setState({ openExternalExample: example, });
            },
          }
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

