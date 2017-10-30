// Testing infrastructure
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Component under test
var CountDown = require('Components/CountDown');

describe('CountDown', () => {
  it('should exist', () => {
    expect(CountDown).toExist();
  });
  // Component sub-tests
  describe('counter tests', () => {
    it('set initial state', () => {
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.state).toBe('stopped');
    });
    it('call setCountDown with 69 and count down', (finished) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      countdown.handleSetCountDownValue(69);
      expect(countdown.state.count).toBe(69);
      expect(countdown.state.state).toBe('running');
      setTimeout(() => {
        expect(countdown.state.count).toBe(68);
        finished(); // Let Mocha framework know [async] test has completed
      }, 1001);
    });
    it('make sure counter runs and does not go negative', (finished) => {
      var countdown = TestUtils.renderIntoDocument(<CountDown />);
      // Note: total test can't exceed 5 second (as written)
      countdown.handleSetCountDownValue(3);
      expect(countdown.state.count).toBe(3);
      expect(countdown.state.state).toBe('running');
      setTimeout(() => {
        expect(countdown.state.count).toBe(2);
      }, 1001);
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        finished(); // Let Mocha framework know [async] test has completed
      }, 3001);
    });
  });
});
