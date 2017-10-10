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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    if (typeof name === 'string' && name.length > 0) {
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'REACT',
      message: 'Default message'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var {message} = this.props;
    var {name} = this.state;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="React World"/>,
  document.getElementById('app')
);
