"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var indexFile = path.join(__dirname, '../dist/index.html');
var fileContentOrigin = fs.readFileSync(indexFile, { encoding: 'utf8' });
var fileContentAfterReplace = fileContentOrigin.replace(/<base href="\/" \/>/g, '<base href="./" />');
fs.writeFileSync(indexFile, fileContentAfterReplace);
