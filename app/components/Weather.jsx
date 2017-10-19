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
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      temp: undefined,
      location: undefined
    });
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
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
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
          <div>
            <ErrorModal notice={"Can't get weather"} errorMessage={errorMessage.message}/>
          </div>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
