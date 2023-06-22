const QRCode = require('qrcode');
const fs = require('fs');

// Предположим, что у вас есть список из 1200 ссылок
const links = ["http://link1.com", "http://link2.com"];

const options = {
    errorCorrectionLevel: 'H', // Уровень коррекции ошибок: 'L', 'M', 'Q' или 'H'
    type: 'image/png', // Тип выводимого файла
    quality: 0.92, // Качество изображения (только для 'image/jpeg')
    color: {
      dark: '#000000', // Цвета кодовых точек
      light: '#ffffff' // Цвет фона
    },
    margin: 4, // Отступ в модулях
    scale: 4, // Ширина точки. 1 значит одна и та же ширина и высота
    width: 200, // Ширина изображения. Определяет масштаб, если он не задан
    maskPattern: 0 // Определяет, какой паттерн маски использовать
  }


async function createQR(link, index) {
    try {
        let qr = await QRCode.toDataURL(link, options);

        let base64Data = qr.replace(/^data:image\/png;base64,/, "");

        fs.writeFile(`qrcodes/qr${index}.png`, base64Data, 'base64', function(err) {
          console.log(err);
        });
    }
    catch (err) {
        console.error(err);
    }
}

links.forEach((link, index) => {
    createQR(link, index);
});
