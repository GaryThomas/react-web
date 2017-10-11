var React = require('react');
var Nav = require('Components/Nav');

var BoilerPlate = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Component</h1>
        <Nav />
      </div>
    );
  }
});

module.exports = BoilerPlate;
