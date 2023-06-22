import fs from 'fs';
import QRCode from 'qrcode';
import { qrOptions } from '../config.js';
import { mkdirSync } from 'fs';

// Проверяем, существует ли каталог, и если нет, создаем его
const dirPath = 'qrcodes';
if (!fs.existsSync(dirPath)) {
  mkdirSync(dirPath);
}

export function genQrCode(links) {


  async function createQR(link, index) {
    try {
      let qr = await QRCode.toDataURL(link, qrOptions);

      let base64Data = qr.replace(/^data:image\/png;base64,/, "");



      try {
        await fs.promises.writeFile(`qrcodes/qr${index}.png`, base64Data, 'base64');
        console.log(`File qr${index}.png has been saved.`);
      } catch (err) {
        console.error(err);
      }

    }
    catch (err) {
      console.error(err);
    }
  }

  links.forEach((link, index) => {
    createQR(link, index);
  });

}
