var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Application</h1>
        <div className="row>">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
