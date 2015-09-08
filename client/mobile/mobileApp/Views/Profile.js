'use strict';

var React = require('react-native');

var {
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View, 
} = React;

var Profile = React.createClass({
  getInitialState: function() {
    return AsyncStorage.getItem('cardEmail')
    .then((email) => {
      return fetch('https://tranquil-earth-7083.herokuapp.com/cards/getcard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'cardEmail': email})
      });
    })
    .then((response) => {
      var card = response._bodyText;
      card.loaded = true;
      console.log('why is this so hard', response._bodyText);
      this.render();
      return card;
    })
  },

  render: function(){
    if (this.state.loaded) {
      console.log('this should be the email', this.state.email);
      var spacer = <View style={styles.spacer}/>;
      return (
        <View style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.titleText}>Edit Profile</Text>
            </View>
            <Image 
            style={styles.card_photo}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
            />
            <TextInput
                autoFocus={true}
                style={styles.textInput}
                placeholder= {this.state.firstName || 'First Name'}/>
            <TextInput
                style={styles.textInput}
                placeholder='Last Name'/>
            <TextInput
                style={styles.textInput}
                placeholder='Email'/>
            <TextInput
                style={styles.textInput}
                placeholder='Phone'/>
            <TextInput
                style={styles.textInput}
                placeholder='Company'/>
            <TextInput
                style={styles.textInput}
                placeholder='Job Title'/>
            <View style={styles.footer}>
              <View style={styles.moveRight}>
              </View>
              <TouchableHighlight 
                style={styles.button}
                underlayColor={'orange'}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableHighlight>
            </View>
          {spacer}
          </ScrollView>
        </View>
      );
    } else {
      return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
    }
  },
});


var styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: '#1abc9c',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#1abc9c',
    alignSelf: 'center'
  },
  card_photo: {
    width: 200,
    height: 200,
    alignSelf: 'center',    
  },
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
  containerBox: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#1abc9c',
    margin: 0,
    marginVertical: 0,
    overflow: 'hidden',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1abc9c',
    justifyContent: 'flex-end'
  },
  header: {
    backgroundColor: '#1abc9c',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveRight: {
    flex: 2,
  },
  spacer:{
    paddingTop: 250,
    backgroundColor: '#1abc9c'
  },
  textInput: {
    height: 36,
    padding: 10,
    margin: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6d7da',
    borderRadius: 8,
    backgroundColor: '#d6d7da',
    color: '#1abc9c'
  },
  titleText: {
    padding: 24,
    color: 'white',
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = Profile;