"use-strict";

// This file configures the i18next library
// Page text is stored in /locales/{{lang}}/common.json
// Please use top-level reference for page names
i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: 'locales/{{lng}}/common.json',
      crossDomain: true
    }
  }, function (err, t) {
    // init set content
    updateContent();
  }
  );

  function updateContent() {
      updateElements([
          ['research-tablink', 'navigation.tablinks.research-tablink'],
          ['about-tablink', 'navigation.tablinks.about-tablink'],
          ['privacy-tablink', 'navigation.tablinks.privacy-tablink']
      ]);
      updateElements([
          ['research-tabtitle', 'content.tabs.research-tabtitle'],
          ['about-tabtitle', 'content.tabs.about-tabtitle'],
          ['privacy-tabtitle', 'content.tabs.privacy-tabtitle']
      ]);
      updateElements([
          ['legal-notice', 'footer.legal-notice']
      ]);
  }

  function updateElements(updateList) {
    updateList.forEach(([id, newText]) => {
      updateElementById(id, i18next.t(newText));
    });
  }
  
  function updateElementById(id, newText) {
    if (document.getElementById(id) !== null) {
      document.getElementById(id).innerHTML = newText;
    } else {
      // This is only for debugging
      console.log('Could not find element with id: ' + id);
    }
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });