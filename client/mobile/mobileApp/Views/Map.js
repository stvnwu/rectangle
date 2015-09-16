'use strict';

var React = require('react-native');

var {
  AppRegistry,
  AsyncStorage,
  MapView,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

var mockData = [
  {}
];

var obj = {  
  method: 'POST',
  headers: {
     'Content-Type': 'application/json',
   },
  body: null
};

var MapRegionInput = React.createClass({
  propTypes: {
    region: React.PropTypes.shape({
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired,
      latitudeDelta: React.PropTypes.number.isRequired,
      longitudeDelta: React.PropTypes.number.isRequired,
    }),
    onChange: React.PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }
    };
  },

  //   navigator.geolocation.getCurrentPosition(res => {
  //   reqBody.longitude = JSON.stringify(res.coords.longitude);
  //   reqBody.latitude = JSON.stringify(res.coords.latitude);
  // });
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      region: nextProps.region || this.getInitialState().region
    });
  },

  render: function() {
    var region = this.state.region || this.state.region;

    return (
      <View>
        <View style={styles.row}>
          <Text>
            {'Latitude'}
          </Text>
          <TextInput
            value={'' + region.latitude}
            style={styles.textInput}
            onChange={this._onChangeLatitude}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Longitude'}
          </Text>
          <TextInput
            value={'' + region.longitude}
            style={styles.textInput}
            onChange={this._onChangeLongitude}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Latitude delta'}
          </Text>
          <TextInput
            value={'' + region.latitudeDelta}
            style={styles.textInput}
            onChange={this._onChangeLatitudeDelta}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.row}>
          <Text>
            {'Longitude delta'}
          </Text>
          <TextInput
            value={'' + region.longitudeDelta}
            style={styles.textInput}
            onChange={this._onChangeLongitudeDelta}
            selectTextOnFocus={true}
          />
        </View>
        <View style={styles.changeButton}>
          <Text onPress={this._change}>
            {'Change'}
          </Text>
        </View>
      </View>
    );
  },

  _onChangeLatitude: function(e) {
    regionText.latitude = e.nativeEvent.text;
  },

  _onChangeLongitude: function(e) {
    regionText.longitude = e.nativeEvent.text;
  },

  _onChangeLatitudeDelta: function(e) {
    regionText.latitudeDelta = e.nativeEvent.text;
  },

  _onChangeLongitudeDelta: function(e) {
    regionText.longitudeDelta = e.nativeEvent.text;
  },

  _change: function() {
    this.setState({
      latitude: parseFloat(regionText.latitude),
      longitude: parseFloat(regionText.longitude),
      latitudeDelta: parseFloat(regionText.latitudeDelta),
      longitudeDelta: parseFloat(regionText.longitudeDelta),
    });
    this.props.onChange(this.state.region);
  },

});

var MapViewExample = React.createClass({

  getInitialState() {
    return {
      mapRegion: null,
      mapRegionInput: null,
      annotations: null,
      isFirstLoad: true,
      cards: null,
      connections: null
    };
  },

  componentDidMount: function() {
    this._getCardInfo();
    this._getConnections();
    this._getAnnotations();
  },

  _getCardInfo: function() {
    AsyncStorage.getItem('cards')
    .then(function(cards) {
      this.setState({
        cards: JSON.parse(cards)
      });
    });
  },

  _getConnections: function() {
    AsyncStorage.get('userEmail')
    .then(function(userEmail) {
      obj.body = JSON.stringify({'email': userEmail});
      return obj;
    })
    .then(function(reqObj) {
      return fetch('https://tranquil-earth-7083.herokuapp.com/users/signin', reqObj)
    })
    .then(function(response) {
      this.setState({
        connections: JSON.parse(response._bodyText)
      });
      console.log('this is the staet, Map.js, line 194', this.state);
    });
  },

  render() {
    var spacer=<View style={styles.spacer}/>;
    return (
      <ScrollView styles={styles.wrapper}>
        <View>
          <MapView
            style={styles.map}
            onRegionChange={this._onRegionChange}
            onRegionChangeComplete={this._onRegionChangeComplete}
            region={this.state.mapRegion || undefined}
            annotations={this.state.annotations || undefined}
            showsUserLocation={true}
          />
          <MapRegionInput
            onChange={this._onRegionInputChanged}
            region={this.state.mapRegionInput || undefined}
          />
        </View>
        {spacer}
      </ScrollView>
    );
  },

  _getAnnotations() {
    console.log('region in _getAnnotations function:', region, 'Maps.js', 172);
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'You Are Here',
    },{
      longitude: region.longitude+5,
      latitude: region.latitude+5,
      title: 'You Are Here',
    },{
      longitude: -122.4082479999,
      latitude: 37.78383,
      title: 'You Are Here',
    }];

    // [{
    //     "id": 2,
    //     "createdWhere": null,
    //     "longitude": "-11212.2312412342134213",
    //     "latitude": "-11212.2312412342134213",
    //     "QR": null,
    //     "user_id": 2,
    //     "card_id": 1,
    //     "created_at": "2015-09-14T22:07:09.350Z",
    //     "updated_at": "2015-09-14T22:07:09.350Z"
    //   }, {
    //     "id": 3,
    //     "createdWhere": null,
    //     "longitude": "-11212.2312412342134213",
    //     "latitude": "-11212.2312412342134213",
    //     "QR": null,
    //     "user_id": 2,
    //     "card_id": 2,
    //     "created_at": "2015-09-14T23:12:35.345Z",
    //     "updated_at": "2015-09-14T23:12:35.345Z"
    //   }, {
    //     "id": 4,
    //     "createdWhere": null,
    //     "longitude": "-56756456213",
    //     "latitude": "-412342134213",
    //     "QR": null,
    //     "user_id": 2,
    //     "card_id": 3,
    //     "created_at": "2015-09-14T23:14:21.769Z",
    //     "updated_at": "2015-09-14T23:14:21.769Z"
    //   }]
  },

  _onRegionChange(region) {
    console.log('region in _onRegionChange function:', region, 'Maps.js', 181);
    this.setState({
      mapRegionInput: region,
    });
  },

  _onRegionChangeComplete(region) {
    console.log('region in )onRegionChangeComplete function:', region, 'Maps.js', 188);
    if (this.state.isFirstLoad) {
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  },

  _onRegionInputChanged(region) {
    console.log('region in _onRegionInputChanged function:', region, 'Maps.js', 199);
    this.setState({
      mapRegion: region,
      mapRegionInput: region,
      annotations: this._getAnnotations(region),
    });
  },

});

var styles = StyleSheet.create({
  changeButton: {
    alignSelf: 'center',
    marginTop: 5,
    padding: 3,
    borderWidth: 0.5,
    borderColor: '#777777',
  },
  map: {
    height: 450,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacer: {
    flex: 1,
    height: 60,
  },
  textInput: {
    width: 150,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    fontSize: 13,
    padding: 4,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
});

module.exports = MapViewExample;
