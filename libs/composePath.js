import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


export function composePath(filePath,importUrl) {
const __filename = fileURLToPath(importUrl);
const __dirname = dirname(__filename);
return  path.resolve(__dirname, filePath)
}
