'use strict';

var React = require('react-native');
var MapboxGLMap = require('react-native-mapbox-gl');
var mapRef = require('../config').map;

var {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBarIOS,
  View,
} = React;

var Example = React.createClass({
  mixins: [MapboxGLMap.Mixin],
  getInitialState() {
    return {
       center: {
         latitude: 40.72052634,
         longitude: -73.97686958312988
       },
       zoom: 11,
       // annotations: [{
       //   latitude: 40.72052634,
       //   longitude:  -73.97686958312988,
       //   title: 'This is marker 1',
       //   subtitle: 'It has a rightCalloutAccessory too',
       //   rightCalloutAccessory: {
       //       url: 'https://cldup.com/9Lp0EaBw5s.png',
       //       height: 25,
       //       width: 25
       //   },
       //   annotationImage: {
       //     url: 'https://cldup.com/CnRLZem9k9.png',
       //     height: 25,
       //     width: 25
       //   },
       //   id: 'marker1'
       // },{
       //   latitude: 40.714541341726175,
       //   longitude:  -74.00579452514648,
       //   title: 'Important!',
       //   subtitle: 'Neat, this is a custom annotation image',
       //   annotationImage: {
       //     url: 'https://cldup.com/7NLZklp8zS.png',
       //     height: 25,
       //     width: 25
       //   },
       //   id: 'marker2'
       // }]
     };
  },
  onRegionChange(location) {
    this.setState({ currentZoom: location.zoom });
  },
  onRegionWillChange(location) {
    console.log(location);
  },
  onUpdateUserLocation(location) {
    console.log(location);
  },
  onOpenAnnotation(annotation) {
    console.log(annotation);
  },
  onRightAnnotationTapped(e) {
    console.log(e);
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    return (
      <View style={styles.container}>
        <MapboxGLMap
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={mapRef}
          styleURL={'asset://styles/satellite-v7.json'}
          centerCoordinate={this.state.center}
          userLocationVisible={true}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          annotations={this.state.annotations}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 64,
  },
  map: {
    flex: 5
  },
  text: {
    padding: 2
  }
});

module.exports = Example;