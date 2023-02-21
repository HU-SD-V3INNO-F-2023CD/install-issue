const BASE_URL = import.meta.env.BASE_URL ?? '/';

if ('serviceWorker' in navigator) {
  console.log(`register: ${BASE_URL}serviceworker.js`);
  navigator.serviceWorker.register(`${BASE_URL}serviceworker.js`)
    .then((registration) => {
      console.log('[AppService] ServiceWorker registration successful:', registration);
    })
    .catch((err) => {
      console.log('[AppService] ServiceWorker registration failed:', err);
    })
}

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  console.log('[event] beforeinstallprompt');

  let deferredPrompt;
  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  let installCard = document.querySelector('#install-card');
  installCard.show();

  let btnAdd = installCard.querySelector('button');
  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    installCard.close();
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
