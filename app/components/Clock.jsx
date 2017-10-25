var React = require('react');

var Clock = React.createClass({
  formatSeconds: function (time) {
    var sec = time % 60;
    var min = Math.floor(time / 60);
    return min + ':' + sec;
  },
  render: function() {
    return (
      <div>
        <h3>Clock</h3>
      </div>
    );
  }
});

module.exports = Clock;
