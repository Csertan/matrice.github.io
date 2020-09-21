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
        ['by-text', 'header.by-text'],
        ['by-text-after', 'header.by-text-after']
      ])
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
      updatePrivacyTab();
      updateElements([
        ['research-summary', 'content.research.research-summary'],
        ['about-summary', 'content.about.about-summary']
      ]);
      updateElements([
          ['legal-notice', 'footer.legal-notice'],
          ['legal-google', 'footer.legal-google']
      ]);
  }

  function updatePrivacyTab() {
    updateElements([
      ['title-web', 'content.privacy.title-web'],
      ['summary-web', 'content.privacy.summary-web'],
      ['paragraph-web', 'content.privacy.paragraph-web'],
      ['title-game', 'content.privacy.title-game'],
      ['summary-game', 'content.privacy.summary-game'],
      ['title1-game', 'content.privacy.title1-game'],
      ['title2-game', 'content.privacy.title2-game'],
      ['p1-game', 'content.privacy.p1-game'],
      ['p2-game', 'content.privacy.p2-game'],
      ['p3-game', 'content.privacy.p3-game'],
      ['p4-game', 'content.privacy.p4-game'],
      ['p5-game', 'content.privacy.p5-game'],
      ['p6-game', 'content.privacy.p6-game']
    ])
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