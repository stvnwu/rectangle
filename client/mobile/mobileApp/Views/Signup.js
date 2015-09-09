'use strict';

var React = require('react-native');
var Default = require('./Default');
var Login = require('./Login');

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

var reqBody = {'firstName': '', 'lastName': '', 'email': '', 'password': ''};

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: JSON.stringify({'firstName': null, 'lastName': null, 'email': null, 'password': null})
}

var Signup =  React.createClass({
  /**
   * Method to be run upon initialization
   * returns a state object with:
   * isLoading, errorText, firstNameInputStyle, lastNameInputStyle, 
   * emailInput Style, passwordInptuStyle
  */
  getInitialState: function() {
    return {
      isLoading: false,
      errorText: '',
      firstNameInputStyle: styles.textInput,
      lastNameInputStyle: styles.textInput,
      emailInputStyle: styles.textInput,
      passwordInputStyle: styles.textInput,
    };
  },
  /**
   * Method to render a view with name, email, and password fields
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
            <Text style={styles.titleText}>Sign Up</Text>
          </View>
          <TextInput
              autoFocus={true}
              style={this.state.firstNameInputStyle}
              placeholder='Name'
               onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'firstName')
              }/>
          <TextInput
              style={this.state.lastNameInputStyle}
              placeholder='Last'
              onChange={(event) => 
                this.updateProp(event.nativeEvent.text,'lastName')
              }/>
          <TextInput
              style={this.state.emailInputStyle}
              keyboardType='email-address'
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
              Sign in instead!
            </Text>
          </TouchableHighlight>
          <View style={styles.footer}>
            <View style={styles.moveRight}>
            </View>
            <TouchableHighlight style={styles.button}
                 onPress={() => this.onSend()}
                 underlayColor='orange'>
               <Text style={styles.buttonText}>
                  Send
               </Text>
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
    this.props.navigator.replace({
      title: '',
      component: Login
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
  _responseHandler: function(response){
    if(response.message){
      AsyncStorage.setItem('userEmail', response.message)
      .then(() => {
        console.log('successfully saved user email:', response.message, 'Signup.js', 97);
        this.props.navigator.replace({
          title: '',
          component: Default
        });
      })
    } else if (response.error){
      this.state.emailInputStyle = styles.wrongInput;
      this.state.errorText = response.error;
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
    console.log(reqBody,'heeeey!')
    if(reqBody.firstName === '' || reqBody.lastName === '' || reqBody.email === '' || reqBody.password === ''){
      this.state.errorText = 'Please leave no blank fields';

        if(reqBody.firstName === ''){
          this.setState((state) => {
            return {
              firstNameInputStyle: styles.wrongInput
            };
          });
        } else {
          this.setState((state) => {
            return {
              firstNameInputStyle: styles.textInput
            };
          });
        }
        if(reqBody.lastName === ''){
          this.setState((state) => {
            return {
              lastNameInputStyle: styles.wrongInput
            };
          });
        } else {
          this.setState((state) => {
            return {
              lastNameInputStyle: styles.textInput
            };
          });
        }
        if(reqBody.email === ''){
          this.setState((state) => {
            return {
              emailInputStyle: styles.wrongInput
            };
          });
        } else {
          this.setState((state) => {
            return {
              emailInputStyle: styles.textInput
            };
          });
        }
        if(reqBody.password === ''){
          this.setState((state) => {
            return {
              passwordInputStyle: styles.wrongInput
            };
          });
        } else {
          this.setState((state) => {
            return {
              passwordInputStyle: styles.textInput
            };
          });
        }



    } else {
      this.setState((state) => {
        return {
          isLoading: true
        };
      });
      fetch('https://tranquil-earth-7083.herokuapp.com/users/signup', obj)  
      .then((res) => res.json())
      .then((resJson) => {
        this._responseHandler(resJson)
        resJson
      })
      .catch((err) => {
        console.log(new Error(err));
      });
    }
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
  titleText: {
    padding: 24,
    color: 'white',
    fontSize: 24,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
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
});

module.exports = Signup;

