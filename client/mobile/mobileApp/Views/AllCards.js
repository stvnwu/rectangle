'use strict';

var React = require('react-native');
var Communications = require('react-native-communications');
var SearchBar = require('react-native-search-bar');

var {
  ActivityIndicatorIOS,
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



var AllCards = React.createClass({
  /**
   * Method to be run upon initialization
   * returns card: null (this intializes the state)
  */
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.getCards();
    
    return {
      cards: [],
      dataBlob: {},
      dataSource: ds,
      loaded: false,
    };
  },
  /**
   * Method that creates the HTTP request to the server
  */
  getCards: function() {
    AsyncStorage.getItem('userEmail')
    .then((email) => {
      reqBody.email = email;
      obj.body = JSON.stringify(reqBody);
    })
    .then(() => {
      fetch('https://tranquil-earth-7083.herokuapp.com/connections/getconnections', obj)
      .then((response) => response.json())
      .then((cardsObj) => {
        this.state.cards = cardsObj;
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.state.cards),
          loaded: true
        });
      })
    }) 
    .catch((err) => {
      console.log(new Error(err));
    })
  }, 
  /**
   * Method, no parameters, renders the page with a scrollView of cards
  */
  render: function(){
    var loader = !this.state.loaded ?
      (  <ScrollView style={styles.wrapper}>
        <ActivityIndicatorIOS
          hidden='true'
          size='large'
          color='#ffffff'/> 
          </ScrollView>) :
      (<ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderCard}
          style={styles.wrapper}>
            {this.renderCard()}
          </ListView>);
      return (
        <View style={styles.container}>
          <ScrollView style={styles.searchContainer}/>
            <SearchBar placeholder={'Search'}/>
            <View style={styles.wrapper}>

              {loader}
            </View>

        </View>
      );
    
  },

  renderCard: function(card) {
    if (card) {
      return (
        <View style={styles.containerCard}>
          <Text style={styles.textName}>{card.firstName} {card.lastName}</Text>
          <View style={styles.posIn2}>
            <View style={styles.posIn}>
              <Text style={styles.textDetails}>{card.jobTitle}</Text>
              <Text style={styles.textDetails}>Company: {card.company}</Text>
              <Text style={styles.textDetails}
                    onPress={() => Communications.email([card.email], null,null,null,null)}>{card.email}</Text>
              <Text style={styles.textDetails} 
                    onPress={() => Communications.phonecall(card.phone, true)}>
                    {card.phone}
              </Text>
            </View>

          </View>
        </View>
      )
    }
  },
});


var styles = StyleSheet.create({
  searchContainer:{
    flex:1,
  },
  posIn: {
    flex: 1,
  },
  posIn2: {
    flex: 1,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1B374A',
  },
  containerCard: {

    flex: 1,
    backgroundColor: 'rgba(240,255,255)',
    justifyContent: 'center',
    marginTop: -50,
    marginBottom: 65,
    marginLeft: 15,
    marginRight: 15,
  },
  containerName: {
    flex: 2,
    backgroundColor: 'gray',
    margin: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  textName: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2.5,
    paddingTop: 2.5,
    color: 'rgba(240,255,255)',
    fontSize: 30,
    fontWeight:'700',
    backgroundColor: 'rgba(76,176,202)'
  },
  textDetails: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2.5,
    paddingTop: 2.5,
    color: 'black',
    fontSize: 18,
  },
  wrapper: {
    flex: 9
  }
});

module.exports = AllCards;
