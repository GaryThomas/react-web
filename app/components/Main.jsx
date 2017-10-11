var React = require('react');
var Nav = require('Components/Nav');
var Weather = require('Components/Weather');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Component</h1>
          <Nav />
          <Weather />
      </div>
    );
  }
});

module.exports = Main;
