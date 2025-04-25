// 設定を保存する関数
function saveOptions() {
  const alwaysOpenNewWindow = document.getElementById('alwaysOpenNewWindow').checked;

  chrome.storage.sync.set({
    alwaysOpenNewWindow: alwaysOpenNewWindow
  }, function() {
    // 保存完了メッセージを表示
    const status = document.getElementById('status');
    status.textContent = '設定を保存しました！';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// 保存された設定を読み込む関数
function restoreOptions() {
  chrome.storage.sync.get({
    alwaysOpenNewWindow: true  // デフォルト値
  }, function(items) {
    document.getElementById('alwaysOpenNewWindow').checked = items.alwaysOpenNewWindow;
  });
}

// イベントリスナーを設定
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveBtn').addEventListener('click', saveOptions);
