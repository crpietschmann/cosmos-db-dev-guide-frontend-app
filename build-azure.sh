#!/usr/bin/env bash

# This is the NPM "build:azure" build script for Azure App Service Build Service to use

# https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux#customize-build-automation

# Add environment variable to js file for reference
touch dist/assets/apiUrl.js
echo "var apiUrl = '${APPSETTING_API_ENDPOINT}';" > dist/assets/apiUrl.js

# Move the built site to the root directory
cp -r ./dist/* ./
