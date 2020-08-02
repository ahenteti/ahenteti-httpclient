#!/bin/sh

mkdir bin || true
node_modules/.bin/tsc electron/*.ts --outDir bin
node_modules/.bin/ng build 
node bin/fix-base-tag-for-electron-app.js
node_modules/.bin/electron-packager . ahenteti-httpclient --overwrite --asar --platform=win32 --arch=ia32 --icon=src/favicon.png --prune=true --out=release