var React = require('react-native');
var Camera = require('react-native-camera');

var {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  VibrationIOS,
  TouchableHighlight
} = React;

var reqBody = {'email': '', 'cardEmail': ''};

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: JSON.stringify({'userEmail': null, 'cardEmail': null})
}

var CameraPage = React.createClass({
  getInitialState: function() {
    return {
      camMessage : styles.containerView,
      cameraType: Camera.constants.Type.back,
      promt: 'Scan the QR to connect!',
      readQr: false
    }
  },

  render: function() {

    return (
      <Camera
        ref="cam"
        style={styles.container}
        onBarCodeRead={(event)=> this._onBarCodeRead(event)}
        type={this.state.cameraType}
      >
      <View style={this.state.camMessage}>
        <Text style={styles.welcome}>
          {this.state.promt}
        </Text>
      </View>
      </Camera>
    );
  },
  _responseHandler: function(response){
    var message = 'Correcto Mondo!';
    var messageColor;
    if(response.error){
      message = response.error;
      messageColor = styles.containerWrong;

    } else {
      //shold redirect to cards page
      messageColor = styles.containerCorrect;
    }
    this.setState((state) => {
      return {
        promt: message
      };
    });
    this.setState((state) => {
      return {
        camMessage: messageColor
      };
    });
  },
  _onBarCodeRead: function(scan) {
    var location = {};
    if(!this.state.readQr){
      navigator.geolocation.getCurrentPosition(res => {
        reqBody.longitude = JSON.stringify(res.coords.longitude);
        reqBody.latitude = JSON.stringify(res.coords.latitude);
      });
      this.state.readQr = true;
      VibrationIOS.vibrate();
      AsyncStorage.getItem('userEmail')
      .then((userEmail)=>{
        reqBody.email = userEmail;
        reqBody.cardEmail = JSON.parse(scan.data).cardEmail;
        console.log(reqBody)
        fetch('https://tranquil-earth-7083.herokuapp.com/connections/createconnection', obj)  
          .then((res) => res.json())
          .then((resJson) => this._responseHandler(resJson))      
      })
      .catch((err) => {
        console.log(new Error(err));
      });
    }
    
    
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  containerWrong: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  containerCorrect: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },


  welcome: {
    color: '#333333',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});

module.exports = CameraPage;