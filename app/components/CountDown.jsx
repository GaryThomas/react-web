var React = require('react');
var Clock = require('Components/Clock');


var CountDown = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSeconds={127}/>
      </div>
    );
  }
});

module.exports = CountDown;
