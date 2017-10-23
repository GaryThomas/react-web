var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">(Udemy)React Timer/Counter App </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer  </IndexLink>
            </li>
            <li>
              <Link to="/counter" activeClassName="active-link">Count Down  </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by
            </li>
            <li>
              <a href="https://offtocambodia.blogspot.com">Gary Thomas</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
