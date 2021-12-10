const mountId = 'consent-modal';
const containerId = 'consent-modal-container';
const giveButtonId = 'consent-modal-give-button';
const denyButtonId = 'consent-modal-deny-button';
const dismissButtonId = 'consent-modal-dismiss-button';

const modalHtml = `<div
  id="${containerId}"
  style="position: fixed; bottom: 10px; width: 100%; display: none; flex-direction: row; justify-content: center;"
>
  <div
    style="border-radius: 10px; padding: 10px; background-color: lightgray;"
  >
    Explanation on things this site needs consent for.
    <div
      style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 10px;"
    >
      <button id="${giveButtonId}">I consent</button>
      <button id="${denyButtonId}">I do not consent</button>
      <button id="${dismissButtonId}">I'll decide later</button>
    </div>
  </div>
</div>`;

function loadConsent() {
  const consent = window.localStorage.getItem('consent');
  if (consent === null) {
    return 'indeterminate';
  }
  return consent;
}

module.exports = (onStateChange = () => {}) => {
  let mountElement = document.getElementById(mountId);
  if (!mountElement) {
    mountElement = document.createElement('div');
    mountElement.id = mountId;
    document.body.append(mountElement);
  }
  if (mountElement.innerHTML === '') {
    // this is generally a security issue, but not a problem here
    // because we are not interpolating user input into modalHtml
    mountElement.innerHTML = modalHtml;
  }

  let dismissed = false;

  function updateState() {
    const consent = loadConsent();

    const showModal = consent === 'indeterminate' && !dismissed;
    document.getElementById(containerId).style.display = showModal
      ? 'flex'
      : 'none';
    onStateChange(consent, showModal);
  }

  document.getElementById(giveButtonId).addEventListener('click', () => {
    window.localStorage.setItem('consent', 'given');
    updateState();
  });
  document.getElementById(denyButtonId).addEventListener('click', () => {
    window.localStorage.setItem('consent', 'denied');
    updateState();
  });
  document.getElementById(dismissButtonId).addEventListener('click', () => {
    dismissed = true;
    updateState();
  });

  updateState();
};
