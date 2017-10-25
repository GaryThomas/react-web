// Testing infrastructure
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// Component under test
var Clock = require('Components/Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
  // Component sub-tests
  describe('rendering', () => {
    it('show "01:02"', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var resText = $el.find(".clock-time").text();
      expect(resText).toBe('01:02');
    });
  });
  describe('format seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var seconds = 609;
    var expected = '10:09';
    var actual = clock.formatSeconds(seconds);
    it('615 -> 10:15', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    });
    it('609 -> 10:09', () => {
      expect(actual).toBe(expected);
    });
    it('15 -> 00:15', () => {
      expect(clock.formatSeconds(15)).toBe('00:15');
    });
  });
});
