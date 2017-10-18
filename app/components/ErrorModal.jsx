var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {notice, errorMessage} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>{notice}</h4>
        <p>{errorMessage}</p>
        <p>
          <button className="button hollow" data-close>Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
