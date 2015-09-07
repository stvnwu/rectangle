'use strict';

var React = require('react-native');

var {
  ActivityIndicatorIOS,
  AppRegistry,
  Component,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var reqBody = {};
var test = "resp here: "
var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: {
    "email": "mananana",
    "password": "wuu"
}
}

var Login = React.createClass({
  getInitialState: function() {
  return {isLoading: false};
},
  render: function(){
      var spacer = <View style={styles.spacer}/>;
      var spinner = this.state.isLoading ?
        ( <ActivityIndicatorIOS
            hidden='true'
            size='large'/> ) :
        ( <View/>);
      return (
        <View style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.titleText}>Welcome Back</Text>
            </View>
            <TextInput
                autoFocus={true}
                style={styles.textInput}
                placeholder='Email'
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'email')
                }/>
            <TextInput
                style={styles.textInput}
                placeholder='Password'
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'password')
                }/>
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
          {spinner}
          {spacer}
          </ScrollView>
        </View>
        );
    },
    onInputChanged: function(event) {

      this.setState({ input: event.nativeEvent.text });
    },
    updateProp: function(text,prop) {
      reqBody[prop] = text;
      obj.body = JSON.stringify(reqBody);
      this.setState((state) => {
        return {
          curText: text
        };
      });
    },
    _responseHandler: function (response) {
      //save it to localstorage
      this.setState((state) => {
        return {
          isLoading: false
        };
      });
      console.log('97 response----->',response);
    },
    onSend: function() {
      this.setState((state) => {
        return {
          isLoading: true
        };
      });
      // this.setState({ isLoading: true });
      fetch('https://tranquil-earth-7083.herokuapp.com/users/signin', obj)
        .then(response => response.json())
        .then((resJson) => {
          console.log('112 response----->', typeof resJson);
          this._responseHandler(resJson);
          return resJson;
        })
    },
    onStop: function() {
      this.setState({ isLoading: false });
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
  test:{
    flex:1,
    overflow:"hidden"
  }
});

module.exports = Login;


