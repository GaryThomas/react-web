var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Components/Main');
var Timer = require('Components/Timer');
var CountDown = require('Components/CountDown');

// Load foundation CSS & start foundation framework
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//Include application specific styling
require('style-loader!css-loader!sass-loader!Styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="counter" component={CountDown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
