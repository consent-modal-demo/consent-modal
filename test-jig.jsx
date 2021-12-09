import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import ConsentModal from './index';

const App = () => {
  const [consent, setConsent] = useState();
  const [showingModal, setShowingModal] = useState();
  useEffect(() => {
    ConsentModal((consent, showingModal) => {
      setConsent(consent);
      setShowingModal(showingModal);
    });
  }, []);

  function reset() {
    window.localStorage.removeItem('consent');
    window.location.reload();
  }

  return (
    <div>
      <h1>Consent modal test jig</h1>
      <h2>Consent state</h2>
      <dl>
        <dt>Consent?</dt>
        <dd>{consent}</dd>
        <dt>Showing modal?</dt>
        <dd>{String(showingModal)}</dd>
      </dl>
      <button onClick={reset}>Reset consent</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
