var React = require('react');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage  = require('Components/WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function (location) {
    alert(location);
    this.setState({
      location: location,
      temp: 24
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
