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
    var message = this.refs.message.value;
    var updates = {};
    if (typeof name === 'string' && name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (typeof message === 'string' && message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onUpdates(updates);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter a new name"/>
          </div>
          <div>
            <textarea ref="message" placeholder="Enter a message"/>
          </div>
          <div>
            <button>Submit</button>
          </div>
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
