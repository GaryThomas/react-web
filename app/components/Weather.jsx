var React = require('react');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage  = require('Components/WeatherMessage');
var openWeatherMap = require('Api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function (location) {
    // Note: this is an asynchronous call which returns a promise
    // It also messes up 'this' which needs to be cached
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (err) {
      alert(err);
    });
  },
  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
