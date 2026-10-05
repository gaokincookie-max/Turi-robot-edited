# VOID ANGLER Layout & Asset Editor v4.5 — Battle Editor

- v4.4 Canvas canonical renderer is unchanged and remains the visual source of truth.
- Initial battle_player for Mk.1–4 is copied from the latest tuned maint_ship layouts, matching game v31.3's shared-ship behavior.
- Initial battle_enemy is the same completed layout rotated 180 degrees, but sprites are replaced with the game's enemy-specific recolor assets.
- 22 enemy assets are included: 4 hulls, 10 weapons, 8 equipment pieces.
- Enemy A/M/T defaults are copied from the corresponding player asset in normalized coordinates. Enemy equipment with different bitmap dimensions therefore preserves relative point placement and can be fine-tuned in Asset Adjust.
- Battle scenes remain independently editable after synchronization.
- Added synchronization buttons for current Mk and all Mk levels.
- Uses a new localStorage key so older v4.4 browser saves do not silently overwrite this v4.5 initial battle setup.
