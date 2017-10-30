// Testing infrastructure
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Component under test
var CountDownForm = require('Components/CountDownForm');

describe('CountDownForm', () => {
  it('should exist', () => {
    expect(CountDownForm).toExist();
  });
  // Component sub-tests
  describe('form data', () => {
    it('call setCountDown with valid data (63)', () => {
      var spy = expect.createSpy();
      var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDownValue={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownform));
      countdownform.refs.seconds.value = '63';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toHaveBeenCalledWith(63);
    });
    it('not call setCountDown with invalid data', () => {
      var spy = expect.createSpy();
      var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDownValue={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownform));
      countdownform.refs.seconds.value = 'abc';
      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
