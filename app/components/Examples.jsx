var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few examples to try:</p>
        <ol>
          <li><Link to="/?location=Denver">Denver, Colorado</Link></li>
          <li><Link to="/?location=Alicante,es">Alicante, SPAIN</Link></li>
          <li><Link to="/?location=Siem Reap">Siem Reap, CAMBODIA</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
