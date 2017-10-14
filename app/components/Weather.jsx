var React = require('react');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage  = require('Components/WeatherMessage');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  }
});

module.exports = Weather;
