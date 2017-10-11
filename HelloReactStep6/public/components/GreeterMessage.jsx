var React = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    var {name, message} = this.props;
    return (
      <div>
        <h1>Hi {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
