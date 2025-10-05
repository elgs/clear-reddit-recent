# Privacy Policy for Clear Reddit Recent Subreddits

**Last updated: October 5, 2025**

## Overview

Clear Reddit Recent Subreddits ("the extension") is committed to protecting your privacy. This privacy policy explains how our Chrome extension handles your data.

## Data Collection

**We do NOT collect, store, or transmit any personal data.**

The extension operates entirely locally on your device and does not:
- Collect any personal information
- Store any user data
- Send any data to external servers
- Track your browsing activity
- Access your Reddit account credentials

## Data Access

The extension only accesses:
- **Current tab URL**: To verify you are on reddit.com before allowing the clear operation
- **Reddit's localStorage**: To remove the `recent-subreddits-store` item when you click the clear button

This access is:
- **User-initiated**: Only happens when you click the extension button
- **Temporary**: Access is revoked when you navigate away from the tab
- **Local only**: No data leaves your browser

## Permissions Used

- **`scripting`**: Required to execute the localStorage removal command on Reddit pages
- **`activeTab`**: Required to access the current Reddit tab when you click the extension button

## Data Deletion

The extension's sole purpose is to DELETE data (your recent subreddits list) from Reddit's localStorage. It does not create, store, or retain any data.

## Third-Party Services

The extension does not use any third-party services, analytics, or tracking tools.

## Changes to Privacy Policy

Any changes to this privacy policy will be updated in the extension listing and source code repository.

## Contact

For questions about this privacy policy, please contact the developer through the Chrome Web Store listing or GitHub repository.

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)

**Summary**: This extension enhances your privacy by helping you clear your Reddit browsing history from localStorage. It does not collect, store, or transmit any personal data.