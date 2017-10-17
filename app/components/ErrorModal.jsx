var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Error Modal</h4>
        <p>Some error goes here...</p>
        <p>
          <button className="button hollow" data-close>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
