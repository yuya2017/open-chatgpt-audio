document.getElementById('openChatGPT').addEventListener('click', function() {
  chrome.storage.sync.get({
    alwaysOpenNewWindow: true
  }, function(items) {
    chrome.tabs.create({ url: 'https://chatgpt.com/' }, function(tab) {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["click_voice_button.js"]
        }).catch(err => console.error(err));
      });
    });
  });
});

document.getElementById('triggerVoiceButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs[0] && tabs[0].url.startsWith('https://chatgpt.com/')) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["click_voice_button.js"]
      }).catch(err => console.error(err));
    } else {
      // ChatGPTが開いていない場合は新しいタブで開く
      chrome.tabs.create({ url: 'https://chatgpt.com/' }, function(tab) {
        setTimeout(() => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["click_voice_button.js"]
          }).catch(err => console.error(err));
        });
      });
    }
  });
});

document.getElementById('openOptions').addEventListener('click', function() {
  chrome.runtime.openOptionsPage();
});
