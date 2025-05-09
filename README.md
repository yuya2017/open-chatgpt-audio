# ChatGPT 音声ボタン ショートカット

## 概要

この拡張機能は、キーボードショートカットを使って簡単にChatGPTの音声入力機能を起動できるようにするものです。いちいちマウスでボタンを探す手間が省けて、サクサク会話ができるようになります。

## 主な機能

- **ショートカットキーでChatGPTの音声入力を起動**: Ctrl+Kを押すだけで音声入力モードが起動します
- **どこからでも起動可能**: ChatGPTのページを開いていなくても、グローバルショートカットで新しいウィンドウを開いて音声入力を始められます
- **カスタマイズ設定**: オプションページから設定を変更できます

## インストール方法

1. このリポジトリをダウンロードするか、クローンしてください
2. Chromeブラウザで `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」をオンにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリックして、ダウンロードしたフォルダを選択

## 使い方

### ChatGPTページ内での使用
- ChatGPTのページを開いた状態で `Ctrl+K` を押すと、音声入力ボタンが自動的にクリックされます

### どこからでも使用
- どのページにいても `Ctrl+K` のグローバルショートカットを使うと、新しいChatGPTウィンドウが開いて音声入力が始まります

## 設定

拡張機能のオプションページから以下の設定ができます：
- 新しいウィンドウで常に開くかどうかの設定

## 技術的な詳細

- Manifest V3 を使用したChrome拡張機能
- バックグラウンドスクリプトでショートカットキーのイベントを処理
- コンテンツスクリプトで音声ボタンの自動クリックを実行

## 注意点

- ChatGPTのUIが変更された場合、音声ボタンの自動クリック機能が動作しなくなる可能性があります。その場合は更新が必要です。
- 初回読み込み時は、ページの読み込み完了を待つために5秒のディレイを設けています

## ライセンス

MITライセンス
