var Greeter = React.createClass({
  render: function () {
    var name = this.props.name;
    return (
      <div>
        <h1>Hello {name} (using components)</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="React World"/>,
  document.getElementById('app')
);
