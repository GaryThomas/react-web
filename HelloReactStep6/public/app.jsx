var React = require('react');
var ReactDOM = require('react-dom');
//?? var GreeterMessage = require('GreeterMessage');
var GreeterMessage = require('./components/GreeterMessage');
var GreeterForm = require('./components/GreeterForm');

var Greeter = React.createClass({
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
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onUpdates={this.handleUpdates}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="React World"/>,
  document.getElementById('app')
);
