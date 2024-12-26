const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name : 'dpl66erws',
    api_key : '759638332962551',
    api_secret : 'qiPuuKzuEr3S90UMQ-agdBKzh9Y',
})

const storage = new multer.memoryStorage();

async function ImageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file,{
        resource_type : 'auto'
    })
    return result;
}

const upload = multer({storage});
module.exports = {upload, ImageUploadUtil};