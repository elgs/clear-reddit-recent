# Clear Reddit Recent Subreddits Chrome Extension

A simple Chrome extension that adds a button to clear Reddit's recent subreddits from localStorage.

## Features

- Simple popup interface with a single button
- Clears the `recent-subreddits-store` from localStorage
- Works on Reddit.com pages
- Visual feedback for successful operations

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your Chrome toolbar

## Usage

1. Navigate to any Reddit page (reddit.com)
2. Click the extension icon in your Chrome toolbar
3. Click the "Clear Recent Subreddits" button
4. Your recent subreddits list will be cleared from localStorage

## Files Structure

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup interface
- `popup.js` - Popup functionality and localStorage clearing logic
- `content.js` - Content script for Reddit pages
- `icon*.png` - Extension icons (placeholders)

## Technical Details

The extension uses Chrome's `scripting` API to execute the `localStorage.removeItem('recent-subreddits-store')` command on Reddit pages.

## Permissions

- `storage` - For extension storage if needed
- `activeTab` - To interact with the current Reddit tab
- `https://www.reddit.com/*` - Host permissions for Reddit

## Note on Icons

The extension references icon files (icon16.png, icon48.png, icon128.png) that are not included in this repository. You'll need to add your own icon files or remove the icon references from the manifest.json file.