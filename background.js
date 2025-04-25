console.log("Background script loaded!");

// ChatGPTを開いて音声ボタンをクリックする関数
function openChatGPTAndClickVoiceButton() {
  chrome.storage.sync.get({
    alwaysOpenNewWindow: true
  }, function(items) {
    // 新しいウィンドウでChatGPTを開く
    chrome.windows.create({ 
      url: 'https://chatgpt.com/',
      type: 'normal'
    }, function(window) {
      // ウィンドウが読み込まれるのを少し待ってから音声ボタンをクリック
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: window.tabs[0].id },
          files: ["click_voice_button.js"]
        }).catch(err => console.error(err));
      }, 5000); // 5秒待機
    });
  });
}

chrome.commands.onCommand.addListener((command) => {
  console.log("Command received:", command);
  
  if (command === "trigger-voice-button") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Active tab:", tabs[0]);
      if (tabs.length > 0) {
        // ChatGPTのページかどうかをチェック
        if (tabs[0].url.startsWith("https://chatgpt.com/")) {
          try {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ["click_voice_button.js"]
            }).then(() => {
              console.log("Script executed successfully");
            }).catch(error => {
              console.error("Script execution error:", error);
            });
          } catch (error) {
            console.error("Error:", error);
          }
        } else {
          console.log("Not on ChatGPT page. Opening new window...");
          openChatGPTAndClickVoiceButton();
        }
      }
    });
  } else if (command === "global-trigger-voice-button") {
    // グローバルショートカットの場合は常に新しいウィンドウでChatGPTを開く
    openChatGPTAndClickVoiceButton();
  }
});
