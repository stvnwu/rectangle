'use strict'
var React = require('react-native');
var Auth = require('./Views/Auth');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var mobileApp = React.createClass({
  getInitialState: function(){
    return {
      openExternalExample: (null: ?React.Component),
    };
  },
  render: function(){
    if (this.state.openExternalExample) {
      var Example = this.state.openExternalExample;
      return (
        <Example
          onExampleExit={() => {
            this.setState({ openExternalExample: null, });
          }}
        />
      );
    }

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '',
          component: Auth,
          passProps: {
            onExternalExampleRequested: (example) => {
              this.setState({ openExternalExample: example, });
            },
          }
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor="#008888"
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
});

AppRegistry.registerComponent('mobileApp', () => mobileApp);







// Previous Index page




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';

// var React = require('react-native');

// var Auth = require('./Views/Auth');
// var CardInfo = require('./Views/CardInfo');
// var Camera = require('./Views/Camera');
// var Signup = require('./Views/Signup');
// var Login = require('./Views/Login');
// var ImportCard = require('./Views/ImportCard');
// var Map = require('./Views/Map');
// var PhotoLibrary = require('./Views/PhotoLibrary');
// var Profile = require('./Views/Profile');
// var QR = require('./Views/QR');
// var QRCamera = require('./Views/QRCamera');
// var Search = require('./Views/Search');
// var TabBar = require('./Views/TabBar');

// var globalStyles = require('./Stylesheet');

// var {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } = React;

// class mobileApp extends Component {
//   render() {
//     return (
//       <React.NavigatorIOS
//         style={styles.navContainer}
//         initialRoute={{
//           title: '',
//           component: DumbRoutes,
//         }}/>
//     );
//   }
// }

// class DumbRoutes extends Component {
//   render() {
//     return(
//       <View style={styles.container}>
//         <View style={styles.flowRight}>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._authHandler.bind(this)}>
//             <Text style={styles.buttonText}>Auth</Text>
//           </TouchableHighlight>

//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._signUpHandler.bind(this)}>
//             <Text style={styles.buttonText}>Signup</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._loginHandler.bind(this)}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.flowRight}>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._importCardHandler.bind(this)}>
//             <Text style={styles.buttonText}>Import</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._cardInfoHandler.bind(this)}>
//             <Text style={styles.buttonText}>Card Info</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._photoLibraryHandler.bind(this)}>
//             <Text style={styles.buttonText}>Library</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.flowRight}>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._profileHandler.bind(this)}>
//             <Text style={styles.buttonText}>Profile</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._mapHandler.bind(this)}>
//             <Text style={styles.buttonText}>Map</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._qrHandler.bind(this)}>
//             <Text style={styles.buttonText}>QR</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.flowRight}>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._searchHandler.bind(this)}>
//             <Text style={styles.buttonText}>Search</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>Index</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>Blah</Text>
//           </TouchableHighlight>
//         </View>

//         <View style={styles.flowRight}>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'
//                 onPress={this._tabBarHandler.bind(this)}>
//             <Text style={styles.buttonText}>TabBar</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>New</Text>
//           </TouchableHighlight>
//           <TouchableHighlight style={styles.button}
//                 underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>Newer</Text>
//           </TouchableHighlight>
//         </View>

//       </View>  
//     );
//   }
//   //here I added the event handler
//   _signUpHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Signup
//           });
//   };
//   _loginHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Login
//           });
//   };
//   _cardInfoHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: CardInfo
//           });
//   };
//   _authHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Auth
//           });
//   };
//   _cameraHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Camera
//           });
//   };
//   _importCardHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: ImportCard
//           });
//   };
//   _mapHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Map
//           });
//   };
//   _photoLibraryHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: PhotoLibrary
//           });
//   };
//   _profileHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Profile
//           });
//   };
//   _qrHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: QR
//           });
//   };
//   _qrCameraHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: QRCamera
//           });
//   };
//   _searchHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: Search
//           });
//   };

//   _tabBarHandler (){
//     this.props.navigator.push({
//             title: '',
//             component: TabBar
//     });
//   };

// }

// var styles = StyleSheet.create({
//   button: {
//     height: 36,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   container: {
//     flex: 1,
//     marginTop: 65,

//   },
//   flowRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'stretch',

//   },
//   navContainer: {
//     flex: 1,
//   },
//   text: {
//     color: 'black',
//     backgroundColor: 'white',
//     fontSize: 30,
//     margin: 80
//   }
// });

// AppRegistry.registerComponent('mobileApp', () => mobileApp);