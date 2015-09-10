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
      <View style={styles.containerView}>
        <Text style={styles.welcome}>
          {this.state.promt}
        </Text>
      </View>
      </Camera>
    );
  },
  _responseHandler: function(response){
    var message = 'Correcto Mondo!';
    if(response.error){
      message = response.error;
    } else {
      //shold redirect to cards page
      message = response.message;
    }
    this.setState((state) => {
      return {
        promt: message
      };
    });
  },
  _onBarCodeRead: function(scan) {
    // console.log(scan,'<-----------SCAN')
    if(!this.state.readQr){ 
      this.state.readQr = true;
      VibrationIOS.vibrate();
      AsyncStorage.getItem('userEmail')
      .then((userEmail)=>{
        reqBody.email = userEmail;
        reqBody.cardEmail = JSON.parse(scan.data).cardEmail;

        obj.body = JSON.stringify(reqBody);
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
    backgroundColor: 'red',
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