var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <div>
        <h3 className="text-center">
          The temperature in {location} is {temp}C
        </h3>
      </div>
    );
  }
});

module.exports = WeatherMessage ;
