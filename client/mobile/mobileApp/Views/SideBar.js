var React = require('react-native');
var Dimensions = require('Dimensions');
var Profile = require('./Profile');

var {
  AsyncStorage,
  Component,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var window = Dimensions.get('window');

class Menu extends Component{
  // need to figure out how to push to navigator
  // for classical instantiation 

  _profileHandler(){
    this.props.menuActions.close();
    this.props.navigator.push({
      title: '',
      component: Profile
    });
  }

  _logoutHandler(){
    this.props.navigator.push({
      title: '',
      component: Profile
    });
  }

  handlePress(e) {
    this.props.menuActions.toggle();
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.menu}>   

            <TouchableHighlight  
              onPress={this._profileHandler.bind(this)}
              underlayColor={'orange'}
              style={styles.button}>
              <Text 
              style={styles.text}>Profile</Text>
            </TouchableHighlight>

            <TouchableHighlight  
              onPress={this._logoutHandler.bind(this)}
              underlayColor={'orange'}
              style={styles.button}>
              <Text 
              style={styles.text}>Log Out</Text>
            </TouchableHighlight>

          </View>
        </ScrollView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  button: {

  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#d6d7da',
    padding: 20,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 5,
    color: '#1abc9c',
    textAlign: 'center'
  },
});

module.exports = Menu;