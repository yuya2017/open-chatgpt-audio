// ChatGPTの音声入力ボタンを探してクリックする
function clickVoiceButton() {
  // ボタンをCSSセレクターで特定（2025年4月現在のUIに基づく）
  const buttonSelector = 'button[aria-label="音声入力ボタン"]';

  const voiceButton = document.querySelector(buttonSelector);

  if (voiceButton) {
    voiceButton.click();
    console.log("音声入力ボタンがクリックされました。");
  } else {
    alert("音声入力ボタンが見つかりませんでした。ページを確認してください。");
  }
}

clickVoiceButton();
