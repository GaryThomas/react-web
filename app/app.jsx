var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var BoilerPlate = require('BoilerPlate');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={BoilerPlate}>

    </Route>
  </Router>,
  document.getElementById('app')
);
