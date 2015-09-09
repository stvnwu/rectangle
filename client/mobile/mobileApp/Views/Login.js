'use strict';

var React = require('react-native');
var Default = require('./Default');

var {
  ActivityIndicatorIOS,
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

var reqBody = {'email': null, 'password': null};

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: JSON.stringify({'email': null, 'password': null})
};

var Login = React.createClass({
  /**
   * Method to be run upon initialization
   * returns a state object with:
   * isLoading, errorText, emailInputStyle, passwordInptuStyle
  */
  getInitialState: function() {
    return {
      isLoading: false,
      errorText: '',
      emailInputStyle: styles.textInput,
      passwordInputStyle: styles.textInput,
    };
  },
  /**
   * Method to render a view with email and password fields
   * along with a send and a redirect button
  */
  render: function(){
    var spacer = <View style={styles.spacer}/>;
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'
          color='#ffffff'/> ) :
      ( <View/>);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.titleText}>Welcome Back</Text>
          </View>
          <TextInput
              autoFocus={true}
              style={this.state.emailInputStyle}
              placeholder='Email'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'email')
              }/>
          <TextInput
              style={this.state.passwordInputStyle}
              placeholder='Password'
              secureTextEntry={true}
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'password')
              }/>
          <TouchableHighlight
            style={styles.redirectButton}
            onPress={() => this.otherAuth()}
            underlayColor='orange'>
            <Text style = {styles.redirectButtonText}>
              Sign up instead!
            </Text>
          </TouchableHighlight>
          <View style={styles.footer}>
            <View style={styles.moveRight}>
            </View>
            <TouchableHighlight 
              style={styles.button}
              underlayColor={'orange'}
              onPress={(event) => 
                this.onSend()}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableHighlight>
          </View>
          <Text>{this.state.errorText}</Text>
        {spinner}
        {spacer}
        </ScrollView>
      </View>
      );
    },
    /**
     * Method to redirec the user to the other auth page
    */
    otherAuth: function() {
      var Signup = require('./Signup');
      this.props.navigator.replace({
        title: '',
        component: Signup
      });
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
     * Method that handles the HTTP response with validation and AsyncStorage
     * @param {object} 'response': the response from the HTTP request
    */
    _responseHandler: function (response) {
      //save it to localstorage
      if(response.message){
        obj.body = JSON.stringify({'email': null, 'password': null});
        AsyncStorage.setItem('userEmail', reqBody.email)
        .then(() => {
          this.props.navigator.replace({
            title: '',
            component: Default
          });
        })
      } else if(response.error === "password does not match"){
          //password incorrect
          this.state.passwordInputStyle = styles.wrongInput;
          this.state.emailInputStyle = styles.textInput;
          //tint input red
          if(JSON.parse(obj.body).password === null){
            this.state.errorText = 'Please enter a password';
          } else {
            this.state.errorText = 'incorrect password';
          }
          
      } else {
          //email does not exist in the db
          this.state.emailInputStyle = styles.wrongInput;
          if(JSON.parse(obj.body).email === null){
            this.state.errorText = 'Please insert an email'
          } else {
            this.state.errorText = 'email is not registered'
          }
      }
      this.setState((state) => {
        return {
          isLoading: false
        };
      });
    },
    /**
     * Method that creates the HTTP request to the server
    */
    onSend: function() {
      this.setState((state) => {
        return {
          isLoading: true
        };
      });
      fetch('https://tranquil-earth-7083.herokuapp.com/users/signin', obj)
        .then(response => response.json())
        .then((resJson) => {
          console.log('response is:', typeof resJson, 'Login.js', 137);
          this._responseHandler(resJson);
          return resJson;
        })
        .catch((err) => {
          console.log(new Error(err));
        });
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
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1abc9c',
    justifyContent: 'flex-end'
  },
  header: {
    backgroundColor: '#1abc9c',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveRight: {
    flex: 2,
  },
  redirectButton: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#ffffff',
    borderColor: '#1abc9c',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  redirectButtonText: {
    fontSize: 12,
    color: '#1abc9c',
    alignSelf: 'center'
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
  wrongInput:{
    height: 36,
    padding: 10,
    margin: 15,
    fontSize: 18,
    borderWidth: 1.5,
    borderColor: 'red',
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
  },
  test:{
    flex:1,
    overflow:"hidden"
  }
});

module.exports = Login;
