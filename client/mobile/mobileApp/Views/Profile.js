'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
var {
  AppRegistry,
  Component,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View, 
} = React;

var styles = StyleSheet.create({
  container: {
    // marginTop:65,
    alignItems: 'center',
    height: 667,
  },
  card:{
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  scrollView:{
    width: 375,
  }
});

class Profile extends Component {
  render() {
      return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={globalStyles.prompt}>Profile</Text>
            <Image 
            style={styles.card}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            />
            <TextInput
                style={globalStyles.textInput}
                placeholder='First name...'/>
            <TextInput
                style={globalStyles.textInput}
                placeholder='Last name...'/>
            <TextInput
                style={globalStyles.textInput}
                placeholder='Email...'/>
            <TextInput
                style={globalStyles.textInput}
                placeholder='Phone...'/>
            <TextInput
                style={globalStyles.textInput}
                placeholder='Company...'/>
            <TextInput
                style={globalStyles.textInput}
                placeholder='Job title...'/>
          </ScrollView>
        </View>
        );
  }
}

module.exports = Profile;