require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dofu0qeua',
    api_key: '231864388648217',
    api_secret: 'DoqpnrDZUu6N3Cn_H57LfGPweUY',
});

module.exports = { cloudinary };
