'use strict';

var React = require('react-native');
var Default = require('./Default');

var {
  AppRegistry,
  AsyncStorage,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var reqBody = {};

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: {}
}

var CardInfo = React.createClass({
  /**
   * Method that updates the binded data whenever it is changed
   * @param {event} 
  */
  onInputChanged: function(event) {
    this.setState({ input: event.nativeEvent.text });
  },
  /**
   * Method that updates the response object on changes
   * @param {string} 'text': the text that is updated
   * @param {string} 'prop': the property that is updated
  */
  updateProp: function(text,prop) {
    reqBody[prop] = text;
    obj.body = JSON.stringify(reqBody);
    this.setState((state) => {
      return {
        curText: text
      };
    });
  },
  /**
   * Method that creates the HTTP request to the server
  */
  onSend: function() {
    AsyncStorage.getItem('userEmail')
    .then((email) => {
      this.updateProp(email, 'userEmail');
    })
    .then(() => fetch('https://tranquil-earth-7083.herokuapp.com/cards/createcard', obj))
    .then((response) => {
      return AsyncStorage.setItem('cardEmail', reqBody['email']);
    })
    .then(() => {
      console.log('saved cardEmail to AsyncStorage', 'CardInfo.js', 131);
      this._defaultHandler.bind(this)();
    })
    .catch((err) => {
      console.log(new Error(err));
    });
  }, 
  /**
   * Method that redirects to default upon HTTP request has 
   * been sent
  */
  _defaultHandler: function(){
    this.props.navigator.push({
      title: '',
      component: Default
    })
  },
  /**
   * Method, no parameters, renders the page with text inputs and a send button
  */
  render: function(){
    var spacer = <View style={styles.spacer}/>;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.titleText}>Enter your information</Text>
          </View>
          <TextInput
              autoFocus={true}
              style={styles.textInput}
              placeholder='First Name'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'firstName')
              }/>
          <TextInput
              style={styles.textInput}
              placeholder='Last Name'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'lastName')
              }/>
          <TextInput
              style={styles.textInput}
              placeholder='Email'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'email')
              }/>
          <TextInput
              style={styles.textInput}
              placeholder='Phone'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'phone')
              }/>
          <TextInput
              style={styles.textInput}
              placeholder='Company'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'company')
              }/>
          <TextInput
              style={styles.textInput}
              placeholder='Job Title'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'jobTitle')
              }/>
          <View style={styles.footer}>
            <View style={styles.moveRight}>
            </View>
            <TouchableHighlight 
              style={styles.button}
              onPress={(event) =>
                this.onSend()
              }
              underlayColor={'orange'}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
          </View>
        {spacer}
        </ScrollView>
      </View>
      );
  }
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

module.exports = CardInfo;