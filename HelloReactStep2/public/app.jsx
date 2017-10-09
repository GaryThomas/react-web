var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello React (using components)</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
