#!/bin/bash

mkdir bin || true
node_modules/.bin/tsc electron/*.ts --outDir bin
node_modules/.bin/ng build
node bin/fix-base-tag-for-electron-app.js
node_modules/.bin/electron bin/main.js