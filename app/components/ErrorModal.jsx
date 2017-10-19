var React = require('react');

//
// Note: if this has problems with complaints about DOM being manipulated,
// look at video #60 for a possible solution.  I'm not seeing this, so I
// didn't bother...
//

var ErrorModal = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var {notice, errorMessage} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{notice}</h4>
        <p>{errorMessage}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
