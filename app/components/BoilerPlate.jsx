var React = require('react');

var BoilerPlate = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'REACT',
      message: 'Default message'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message,
    };
  },
  handleUpdates: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var {name, message} = this.state;
    return (
      <div>
        <h1>Some Boiler Plate</h1>
      </div>
    );
  }
});

module.exports = BoilerPlate;
