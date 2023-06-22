const qrcode = require('qrcode');

const generateQRCode = async text => {
  try {
    const qrCodeImage = await qrcode.toDataURL(text);
    console.log(qrCodeImage); // Outputs the QR code image data URL
  } catch (error) {
    console.error(error);
  }
};

// Call the function and pass the text you want to encode
generateQRCode('Hello, QR Code!');