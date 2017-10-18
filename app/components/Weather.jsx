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
    }).catch(function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e
      });
    });
  },
  render: function () {
    var {temp, location, isLoading, errorMessage} = this.state;
    var this_ = this;
    function renderMessage() {
      if (isLoading) {
        return (<h3 className="text-center">Stand by - fetching weather</h3>);
      } else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp}/>);
      }
    }
    function renderError() {
      if (errorMessage) {
        this_.setState({
          errorMessage: undefined,
          location: undefined
        });
        return (
          <div>
            <ErrorModal notice={"Can't get weather"} errorMessage={errorMessage.message}/>
          </div>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
