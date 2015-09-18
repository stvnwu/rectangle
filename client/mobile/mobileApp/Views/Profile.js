'use strict';

var React = require('react-native');

var {
  AsyncStorage,
  Component,
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

class Profile extends Component{
  /**
   * Method to be run upon initialization
   * returns card: null (this intializes the state)
  */
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
  }

  /**
   * Method to be run when the compontent mounts
   * calls getCardInfo and returns nothing
  */
  componentDidMount() {
    this.getCardInfo();
  };
  /**
   * Method: retrieves cardEmail, gets
   * the database information related,
   * and populates profile fields with it
  */
  getCardInfo() {
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
      this.setState({card: reqBody});
    })
    .done();
  };
  /**
   * Method that routes to user log out
  */
  _logoutHandler(){
    console.log("thisis--->",this.props.route)
    AsyncStorage.multiRemove(['userEmail', 'firstName', 'lastName', 'cardEmail'])
    .then(() => {
      var Loading = require('./Loading')
      this.props.route.parentNav.replace({
        title: '',
        component: Loading
      });
    })
    .catch((err) => {
      console.log(new Error(err));
    });
  };
  /**
   * Method that updates the binded data whenever it is changed
   * @param {event} 
  */
  onInputChanged(event) {
    this.setState({ input: event.nativeEvent.text });
  };
  /**
   * Method that updates the response object on changes
   * @param {string} 'text': the text that is updated
   * @param {string} 'prop': the property that is updated
  */
  updateProp(text,prop) {
    reqBody[prop] = text;
    obj.body = JSON.stringify(reqBody);
    this.setState((state) => {
      return {
        curText: text
      };
    });
  };
  /**
   * Method that creates the HTTP request to the server
   * and updates an existing card (in this case)
  */
  onSend() {
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
  };

  /**
   * Method to render profile view with photo and info fields
  */
  render(){
    if (this.state.card) {
      var spacer = <View style={styles.spacer}/>;
      return (
        <View style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.titleText}>Edit Profile</Text>
            </View>
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
              <TouchableHighlight 
                style={styles.button}
                onPress={(event) =>
                  this.onSend()
                }
                underlayColor={'#99d9f4'}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight 
             style={styles.button}
             onPress={(event) => this._logoutHandler()}
             underlayColor={'orange'}>
             <Text style={styles.buttonText}>Logout</Text>
           </TouchableHighlight>
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
        <Text style={styles.titleText}>
          Loading profile...
        </Text>
      </View>
    );
    }
  };

};


var styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(61,125,168,0.3)',
    borderColor: '#1B374A',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#1B374A',
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1B374A',
    justifyContent: 'flex-end'
  },
  header: {
    backgroundColor: '#1B374A',
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
    backgroundColor: '#1B374A'
  },
  textInput: {
    height: 36,
    padding: 10,
    margin: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    color: '#404040'
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
