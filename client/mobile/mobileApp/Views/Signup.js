'use strict';

var React = require('react-native');
var globalStyles = require('../Stylesheet');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop:65,
  }
});

var reqBody = {};
var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: {}
}


var Signup =  React.createClass({
  t: {t:'1'},
  render: function(){
    return (
      <View style={styles.container}>
      <Text style={globalStyles.prompt}>
        Sign Up
      </Text>
        <TextInput
            autoFocus={true}
            style={globalStyles.textInput}
            placeholder='Name'
             onChange={(event) => 
              this.updateProp(event.nativeEvent.text,'firstName')
            }/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Last'
            onChange={(event) => 
              this.updateProp(event.nativeEvent.text,'lastName')
            }/>
        <TextInput
            style={globalStyles.textInput}
            keyboardType='email-address'
            placeholder='Email'
            onChange={(event) => 
              this.updateProp(event.nativeEvent.text,'email')
            }/>
        <TextInput
            style={globalStyles.textInput}
            placeholder='Password'
            secureTextEntry={true}
            onChange={(event) => 
              this.updateProp(event.nativeEvent.text,'password')
            }/>
        <TouchableHighlight style={globalStyles.button}
             underlayColor='#99d9f4'
             onPress={this.onSend}>
           <Text style={globalStyles.buttonText}>
              Send
           </Text>
         </TouchableHighlight>
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
  onSend: function() {
    fetch('https://tranquil-earth-7083.herokuapp.com/users/signup', obj)  
      .then(function(res) {
        test += JSON.stringify(res);
        return res.json();
       })
      .then(function(resJson) {
        return resJson;
       })
  }
}); 

module.exports = Signup;

