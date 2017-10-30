var React = require('react');
var Clock = require('Components/Clock');
var CountDownForm = require('Components/CountDownForm');

var CountDown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      state: 'stopped'
    };
  },
  componentDidUpdate: function (oldProps, oldState) {
    if (this.state.state !== oldState.state) {
      switch (this.state.state) {
        case 'running':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountDownValue: function (val) {
    this.setState({
      count: val,
      state: 'running'
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
