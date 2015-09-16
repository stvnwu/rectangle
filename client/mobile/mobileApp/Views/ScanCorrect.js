'use strict';

var React = require('react-native');
var AllCards = require('./AllCards');
var Camera = require('./Camera');

var {
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var Auth = React.createClass({
  render: function(){
    var spacer=<View style={styles.spacer}/>;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.containerBox}>
            <View style={styles.header}>
              <Text style={styles.titleText}>Rectangle</Text>
            </View>
               <Text 
                  style={styles.buttonText}>Connection Created</Text>
            {spacer}
            <View style={styles.footer}>
              <View >
                <TouchableHighlight  
                  style={styles.button}
                  onPress={()=>this._defaultHandler()}
                  underlayColor={'rgba(61,125,168,0.1)'}>
                  <Text 
                  style={styles.buttonText}>Show Connections</Text>
                </TouchableHighlight>
              </View>
              <View >

                  <Text 
                  style={styles.buttonText}>Scan Another QR by clicking Scan Again</Text>
              </View>
              {spacer}
            </View>
          </View>
        </View>
      </View>
    );
  },

  _defaultHandler: function(){
    this.props.navigator.push({
      title: 'rectangle',
      component: AllCards
    });
  },

  _cameraHandler: function(){
    this.props.navigator.push({
      title: 'rectangle',
      component: Camera
    });
  }
});

var styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(61,125,168,0.3)',
    borderColor: '#1B374A',
    borderWidth: 1,
    // borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  containerBox: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#1B374A',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  footer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  header: {
    backgroundColor: '#1B374A',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer:{
    flex: 1,
    backgroundColor: '#1B374A'
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight:'900'
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Auth;