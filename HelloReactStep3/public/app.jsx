var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'REACT',
      message: 'Default message'
    };
  },
  render: function () {
    var {name, message} = this.props;
    return (
      <div>
        <h1>Hello {name} (using components)</h1>
        <p>{message}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="React World"/>,
  document.getElementById('app')
);
