var React = require('react-native');
var Dimensions = require('Dimensions');
var Profile = require('./Profile');

var {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Component,
} = React;

var window = Dimensions.get('window');
var uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.menu}>

            <Text style={styles.text}>Settings</Text>

            <TouchableHighlight  
              onPress={this._profileHandler.bind(this)}
              underlayColor={'orange'}>
              <Text 
              style={styles.text}>Profile</Text>
            </TouchableHighlight>
            
            <Text style={styles.text}>Log Out</Text>

          

          </View>
        </ScrollView>
      </View>
    );
  }

  _profileHandler(){
    this.props.navigator.push({
      title: '',
      component: Profile
    });
  }
}

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#d6d7da',
    padding: 20,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 40,
    fontWeight: '300',
    paddingTop: 5,
  },
});

module.exports = Menu;