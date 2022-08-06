require("dotenv").config({
  path: './.env'
});
const cloudinary = require('cloudinary').v2;
console.log('process.env.CLOUDINARY_NAME: ', process.env.CLOUDINARY_NAME);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  upload_preset: 'testFolder1000',
});

console.log('cloudinary.config(): ', cloudinary.config());

module.exports = { cloudinary };