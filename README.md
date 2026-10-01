# VOID ANGLER Layout & Asset Editor v4 compatible

v3dの操作感を保った互換改良版です。`index.html` を開いて使えます。

## 主な変更
- 最初に共有されたv3原本JSONを初期プロジェクトとして内蔵。加工済み画像・Crop・A/M/T・既存レイアウトを引き継ぎます。
- Game View（実ゲーム表示範囲）をレイアウト画面に追加。ドラッグ移動・右下ハンドルでサイズ変更できます。
- Game View内だけを表示する「ゲーム実表示プレビュー」を追加。
- A / M / Tの意味を明示。
  - A = Anchor: 回転・拡縮の中心
  - M = Mount: スロットへの接続点
  - T = Tip: 弾・レーザー・糸などの発生点
- 各レイアウト要素に「A基準 / M基準」を追加。旧v3はA基準のまま読み込むため既存表示を壊しません。
- `ゲーム用出力` で、カメラ・A/M/T・配置基準を含んだv4 JSONを出力できます。

## 互換性
旧v3 JSONはそのままJSON読込できます。読込時にv4形式へ非破壊移行します。

## 方針
エディタで確認したGame Viewとゲーム側が同じデータを使うことを前提にしています。次のゲーム統合作業では、このv4出力を共通Rendererで直接読む形にするのが安全です。


## v4.2 Canvas Renderer
- v4.1のUI/操作感は維持。
- ゲーム実表示プレビューに「従来DOM Renderer」と「共通Canvas Renderer」を並べて表示。
- `canvas-renderer.js` はゲーム側でもそのまま再利用するための独立Renderer。
- Canvas版は Scene Canvas / Game View / A-M-T / placementMode / rotation / scale / flip を単一コードパスで処理。
- 「Canvas PNG保存」で現在のCanvas版プレビューを書き出せます。
- この段階ではゲーム本体はまだ変更しません。DOM版とCanvas版が一致することを先に確認してください。
