import { staticStorageService } from '../service';

if (document.location.pathname === '/about.html') {
  function checkboxClicked(event) {
    if (event.target.checked) {
      staticStorageService.addAboutPageToCache();
    } else {
      staticStorageService.removeAboutPageFromCache();
    }
  }


  const cacheButton = document.querySelector('#offlineAvailable');
  cacheButton.addEventListener('change', checkboxClicked);
};