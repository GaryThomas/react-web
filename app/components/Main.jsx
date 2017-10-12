var React = require('react');
var Nav = require('Components/Nav');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Component</h1>
          <Nav />
          {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
