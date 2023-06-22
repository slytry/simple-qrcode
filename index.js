import { genQrCode } from "./app/gen-qr.js";
import { parseCsv } from "./app/parse-csv.js";
import { composePath } from "./libs/composePath.js";




const pathToLinks =  composePath('./links.csv',import.meta.url)
const linksArr = await parseCsv(pathToLinks);

genQrCode(linksArr)
