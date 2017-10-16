var React = require('react');
var ErrorModal = require('Components/ErrorModal');
var WeatherForm = require('Components/WeatherForm');
var WeatherMessage  = require('Components/WeatherMessage');
var openWeatherMap = require('Api/openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function (location) {
    // Note: this is an asynchronous call which returns a promise
    // It also messes up 'this' which needs to be cached
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      console.log('testing');

      console.log('result: ' + e);
      // that.setState({
      //   isLoading: false,
      //   errorMessage: e.message
      // });
    });
  },
  render: function () {
    var {temp, location, isLoading, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Stand by - fetching weather</h3>);
      } else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }
    function renderError() {
      if (errorMessage) {
        return (
          <ErrorModal/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
