var React = require('react');

var Clock = React.createClass({
  formatNumber: function (num, digits) {
    var str = num.toString();
    var pad = digits - str.length;
    while (pad > 0) {
      pad -= 1;
      str = '0' + str;
    }
    return str;
  },
  formatSeconds: function (time) {
    var sec = time % 60;
    var min = Math.floor(time / 60);
    return this.formatNumber(min, 2) + ':' + this.formatNumber(sec, 2);
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
