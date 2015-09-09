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

var reqBody = {};
var cardEmail;

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: {}
}

var Profile = React.createClass({
  getInitialState: function() {
    return {
      card: null
    };
  },

  componentDidMount: function() {
    this.getCardInfo();
  },

  getCardInfo: function() {
    AsyncStorage.getItem('cardEmail')
    .then((email) => {
      return fetch('https://tranquil-earth-7083.herokuapp.com/cards/getcard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'cardEmail': email})
      });
    })
    .then((response) => {
      var card = JSON.parse(response._bodyText).message;
      reqBody = card;
      // this.render();
      this.setState({card: reqBody});
    })
    .done();
  },

  render: function(){
    if (this.state.card) {
      console.log('this should be the card', reqBody);
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
                placeholder= 'First Name'
                value={this.state.card.firstName}
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'lastName')
              }/>
            <TextInput
                style={styles.textInput}
                placeholder={this.state.card.lastName || 'Last Name'}
                value={this.state.card.lastName}
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'lastName')
              }/>
            <TextInput
                style={styles.textInput}
                placeholder={this.state.card.email || 'Email'}
                editable={false}
              />
            <TextInput
                style={styles.textInput}
                placeholder={this.state.card.phone || 'Phone'}
                value={this.state.card.phone}
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'phone')
              }/>
            <TextInput
                style={styles.textInput}
                placeholder={this.state.card.company || 'Company'}
                value={this.state.card.company}
                onChange={(event) => 
                  this.updateProp(event.nativeEvent.text,'company')
              }/>
            <TextInput
                style={styles.textInput}
                placeholder={this.state.card.jobTitle || 'Job Title'}
                value={this.state.card.jobTitle}
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
        <Text style={styles.titleText}>
          Loading profile...
        </Text>
      </View>
    );
    }
  },
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
   * and updates an existing card (in this case)
  */
  onSend: function() {
    AsyncStorage.getItem('userEmail')
    .then((userEmail) => {
      this.updateProp(userEmail, 'userEmail');
      return AsyncStorage.getItem('cardEmail');
    })
    .then((cardEmail) => {
      this.updateProp(cardEmail, 'email');
    })
    .then(() => fetch('https://tranquil-earth-7083.herokuapp.com/cards/createcard', obj))
    .then((response) => {
      return AsyncStorage.setItem('cardEmail', reqBody['email']);
    })
    .then(() => {
      console.log('saved cardEmail to AsyncStorage', 'CardInfo.js', 131);
    })
    .catch((err) => {
      console.log(new Error(err));
    });
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
