var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Components/Main');
var Weather = require('Components/Weather');
var About = require('Components/About');
var Examples = require('Components/Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
