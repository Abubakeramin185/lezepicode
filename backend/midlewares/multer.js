import {v2 as cloudinary} from 'cloudinary';
import "dotenv/config";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import multer from 'multer';



// configurazione di  cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUDINARY_APY_SECRET_KEY
  });

  function fileFilter(req, file, cb){
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
            cb(null, true)
        }else {
            cb(null, false)
        
             return cb(new error('formato non consentito!!!'))
        }
    } 
    
    

  const postsStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'covers',
    //   format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => {
        const uniqueSuffix = Date.new() + '-' + Math.round(Math.random()*1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
      }
    },
  });
  const authorStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'avatars',
    //   format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => {
        const uniqueSuffix = Date.new() + '-' + Math.round(Math.random()*1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
      }
    },
  });

const uploadPosts = multer({storage: postsStorage, fileFilter: fileFilter})
const uploadAuthors = multer({storage: authorStorage, fileFilter: fileFilter})

export const uploadAvatar = uploadAuthors.single('avatar')
export const uploadCover = uploadPosts.single('cover')



