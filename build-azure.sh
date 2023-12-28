#!/usr/bin/env bash

# https://learn.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-linux#customize-build-automation

touch dist/assets/apiUrl.js
echo "var apiUrl = '${APPSETTING_API_ENDPOINT}';" > dist/assets/apiUrl.js

cp -r "dist/*" "./"