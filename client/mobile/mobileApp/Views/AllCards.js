'use strict';

var React = require('react-native');

var {
  AsyncStorage,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
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

var cards = [];


var AllCards = React.createClass({
  /**
   * Method to be run upon initialization
   * returns card: null (this intializes the state)
  */
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    
    return {
      dataBlob: {},
      dataSource: ds,
      loaded: false,
    };
  },
  /**
   * Method to be run when the compontent mounts
   * calls getCardInfo and returns nothing
  */
  componentDidMount: function() {
    this.getCards();
  },
  /**
   * Method that creates the HTTP request to the server
  */
  getCards: function() {
    AsyncStorage.getItem('userEmail')
    .then((email) => {
      reqBody.email = email;
      obj.body = JSON.stringify(reqBody);
      console.log(obj);
    })
    .then(() => fetch('https://tranquil-earth-7083.herokuapp.com/connections/getconnections', obj)) // check this
    .then((response) => {
      var cardsObj = JSON.parse(response._bodyText);
      for (var card in cardsObj) {
        cards.push(cardsObj[card]);
      }
      console.log('CARDSSSSSSSSS', cards);
      this.setState({
        dataBlob: cards
      });
    })
    .then(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.dataBlob),
        loaded: true
      });
    })
    .catch((err) => {
      console.log(new Error(err));
    })
    .done();
  }, 
  /**
   * Method, no parameters, renders the page with a scrollView of cards
  */
  render: function(){
    var spacer = <View style={styles.spacer}/>;

    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
          style={styles.wrapper}>

            <View style={styles.header}>
              <Text style={styles.titleText}>Loading...</Text>
            </View>

          {spacer}
          </ListView>
        </View>
      );

    } else {
      return (
        <View style={styles.container}>
          <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
          style={styles.wrapper}>

            <View style={styles.header}>
              <Text style={styles.titleText}>The cards you have been given:</Text>
            </View>

            {this.renderCard()}

          {spacer}
          </ListView>
        </View>
      );
    }
  },

  renderCard: function(card) {
    if (card) {
      return (
        <View style={styles.containerCard}>

          <View style={styles.containerName}>
            <Text style={styles.textName}>{card.firstName}</Text>
            <Text style={styles.textName}>{card.lastName}</Text>
          </View>

          <View style={styles.containerDetails}>
            <Text style={styles.textDetails}>{card.jobTitle}</Text>
            <Text style={styles.textDetails}>{card.company}</Text>
            <View style={styles.containerContact}>
              <Text style={styles.textContact}>{card.email}</Text>
              <Text style={styles.textContact}>{card.phone}</Text>
            </View>
            <View style={styles.containerContact}>
              <Text style={styles.textContact}>{card.created_at}</Text>
            </View>

          </View>

        </View>
      )
    }
  },

});

var styles = StyleSheet.create({
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
  containerCard: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContact: {
    flex: 1,
    backgroundColor: 'white',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetails: {
    flex: 3,
    backgroundColor: 'green',
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerName: {
    flex: 1,
    backgroundColor: 'gray',
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  moveRight: {
    flex: 2,
  },
  spacer:{
    paddingTop: 250,
    backgroundColor: '#1abc9c'
  },
  textName: {
    padding: 4,
    color: 'black',
    fontSize: 12,
  },
  textDetails: {
    padding: 4,
    color: 'black',
    fontSize: 12,
  },
  textContact: {
    padding: 4,
    color: 'black',
    fontSize: 12,
  },
  titleText: {
    padding: 24,
    color: 'white',
    fontSize: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = AllCards;
