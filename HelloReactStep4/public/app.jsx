var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'REACT',
      message: 'Default message'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name);
  },
  render: function () {
    var {name, message} = this.props;
    return (
      <div>
        <h1>Hello {name} (using components)</h1>
        <p>{message}</p>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="React World"/>,
  document.getElementById('app')
);
