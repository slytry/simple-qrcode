import fs from "fs";
import readline from "readline";

let links = [];

export async function parseCsv(pathToLinks) {
  const fileStream = fs.createReadStream(pathToLinks);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    links.push(line);
  }

  return links;
}
