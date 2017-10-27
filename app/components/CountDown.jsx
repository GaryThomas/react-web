var React = require('react');
var Clock = require('Components/Clock');
var CountDownForm = require('Components/CountDownForm');

var CountDown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  handleSetCountDownValue: function (val) {
    this.setState({
      count: val
    });
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountDownValue={this.handleSetCountDownValue}/>
      </div>
    );
  }
});

module.exports = CountDown;
