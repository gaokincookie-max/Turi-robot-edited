# VOID ANGLER Layout & Asset Editor v3

## v3で追加したこと
- **画像編集タブ**を追加
- 大きな元画像（スプライトシート）をそのまま表示して編集可能
- **ブラシ追加 / ブラシ消去 / 矩形追加 / 矩形消去** に対応
- 選択部分を **新規アセット保存** または **現在のアセットに上書き** 可能
- 画像編集 → アセット調整 → レイアウト調整、の流れで扱える構成に変更

## 基本の流れ
1. **画像編集**で元画像から必要部分を切り抜く
2. **アセット調整**で A / M / T（Anchor / Mount / Tip）を整える
3. **レイアウト調整**で場面ごとの配置を詰める

## 画像編集のポイント
- **不透明部分を全選択**: 元画像の不透明ピクセルを一気に選択
- **ブラシ追加 / ブラシ消去**: 細かい場所を自由に調整
- **矩形追加 / 矩形消去**: ざっくり範囲を残す・消す
- **選択部分を新規アセット保存**: 透過PNG相当の新アセットとして登録

## 同梱ソース
- 味方艦シート
- 武器シート
- 装備シート
- 釣具シート
- 素材シート
- 敵艦シート
- 敵武器シート
- 敵装備シート

## 補足
- 保存データはブラウザの `localStorage` に保存されます
- JSON出力を使うと、別環境へ状態を持ち出せます


## v3b
- Windows等でZIP展開時に日本語ファイル名が文字化けする環境向けに、同梱元画像の実ファイル名をASCII英数字へ変更しました。
- 表示名は日本語のままです。


## v3c clean filename fix
- Removed all duplicate source-sheet files with Japanese filenames.
- All bundled source-sheet paths now use ASCII-only filenames under `bundled_sources/`.
- Fixed the remaining enemy ship source path.


## v3d source list fix
- Uses a fresh localStorage key so broken/stale v3 data cannot hide bundled sources.
- Repairs missing `sources` entries automatically from the bundled source list.
- Falls back to the first valid source when the selected source is missing.
