var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  handleSearch: function (e) {
    e.preventDefault();
    alert('Search not implemented');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">(Udemy)React Weather App </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather  </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About  </Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples  </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.handleSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="City?" ref="city" />
              </li>
              <li>
                {/* Use foundation styled button
                  * <button>Get Weather</button>
                  */}
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
