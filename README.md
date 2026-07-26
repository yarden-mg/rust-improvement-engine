# rust-improvement-engine
\A Chrome extension that walks the text nodes of any webpage and replaces every instance of the word 'Rust' with 'Blazing Fast', without touching links, buttons, or page structure.
# Rust Improvement Engine

A simple Chrome extension (Manifest V3) that scans every webpage you visit and replaces every instance of the word **"Rust"** with **"Blazing Fast"**.

## How it works

- `manifest.json` registers a content script that runs automatically on every `http` and `https` page.
- `content.js` uses a `TreeWalker` to visit only the **text nodes** of the page (not HTML tags, scripts, or attributes). This means it safely rewrites visible text without breaking buttons, links, images, or page layout.
- Every exact match of `"Rust"` in the page's text is replaced with `"Blazing Fast"` using `String.replaceAll`.

## Installation

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right toggle).
4. Click **Load unpacked** and select the `rust-improvement-engine` folder.
5. That's it — the extension runs automatically on any page you visit.

## Testing

1. Visit the test page: [widget.hackclub.com/rust-test](https://widget.hackclub.com/rust-test)
2. Refresh the page after loading the extension.
3. Every instance of "Rust" should now read "Blazing Fast," while the rest of the page's text and functionality stays intact.

If you make changes to `content.js`, go back to `chrome://extensions` and click the reload icon on the extension card, then refresh the test page again.

## Notes

- The match is case-sensitive and exact — it looks for the literal string `"Rust"`.
- This is a small, single-purpose extension built as a first project for learning how Chrome extensions and content scripts work.
