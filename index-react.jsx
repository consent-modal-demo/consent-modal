const React = require('react');
const { useState, useEffect } = require('react');
const { render } = require('react-dom');

function Modal({ onStateChange }) {
  const [consent, setConsent] = useState();
  const [dismissed, setDismissed] = useState(false);

  const showModal = consent === 'indeterminate' && !dismissed;
  useEffect(() => {
    onStateChange(consent, showModal);
  }, [onStateChange, consent, showModal]);

  function loadConsent() {
    const consent = window.localStorage.getItem('consent');
    if (consent === null) {
      return 'indeterminate';
    }
    return setConsent(consent);
  }
  useEffect(() => {
    loadConsent();
  }, []);

  function give() {
    window.localStorage.setItem('consent', 'given');
    loadConsent();
  }
  function deny() {
    window.localStorage.setItem('consent', 'denied');
    loadConsent();
  }
  function dismiss() {
    setDismissed(true);
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 10,
        width: '100%',
        display: showModal ? 'flex' : 'none',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'lightgray'
        }}
      >
        Explanation on things this site needs consent for.
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}
        >
          <button onClick={give}>I consent</button>
          <button onClick={deny}>I do not consent</button>
          <button onClick={dismiss}>I'll decide later</button>
        </div>
      </div>
    </div>
  );
}

module.exports = (
  onStateChange = () => {},
  mountElement = document.getElementById('consent-modal')
) => {
  render(<Modal onStateChange={onStateChange} />, mountElement);
};
