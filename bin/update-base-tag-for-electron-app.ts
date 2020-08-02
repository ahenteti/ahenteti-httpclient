import * as path from 'path';
import * as fs from 'fs';

const indexFile = path.join(__dirname, '../dist/index.html');
const fileContentOrigin = fs.readFileSync(indexFile, { encoding: 'utf8' });
var fileContentAfterReplace = fileContentOrigin.replace(/<base href="\/" \/>/g, '<base href="./" />');
fs.writeFileSync(indexFile, fileContentAfterReplace);
