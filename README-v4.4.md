# VOID ANGLER Layout & Asset Editor v4.4 — Canvas Canonical

v4.4 makes the shared Canvas Renderer the canonical visual output.

## What changed

- The main layout editor now draws artwork with `canvas-renderer.js`.
- DOM elements on top of the canvas are interaction handles only (selection, drag, resize, labels, A/M/T markers).
- The Game View preview uses the exact same Canvas Renderer.
- The old DOM renderer remains only as a migration/reference preview.
- A / M / T are now mapped through the bitmap's actual `object-fit: contain` placement before rotation:
  - A = bitmap transform origin
  - M = bitmap attachment point
  - T = bitmap emitter point
- Game export is marked as Canvas-canonical and records the renderer version.

## Intended workflow

1. Open Layout.
2. Adjust the scene while looking at the Canvas artwork in the main editor.
3. Move/resize using the transparent DOM handles.
4. Check the blue Game View camera.
5. Confirm the official Canvas Game View preview.
6. Export with **ゲーム用出力**.

The game should load the exported JSON and use this same `canvas-renderer.js`, rather than reproducing the layout with HTML/CSS.
