#!/bin/bash

# Create a ZIP archive of the extension files
rm clear-reddit-recent-extension.zip && zip -r clear-reddit-recent-extension.zip . -x "*.DS_Store" "icon-generator.html" ".github/*" ".git/*" "*.git*"
