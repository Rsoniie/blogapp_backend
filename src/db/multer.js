import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js';

// Set up Cloudinary storage with multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_pictures', // Folder name in Cloudinary
    format: async (req, file) => 'jpg', // You can change format
    public_id: (req, file) => `${Date.now()}-${file.originalname}`, // Unique public ID for each image
  },
});

// Set up multer with Cloudinary storage
const upload = multer({ storage: storage });

export default upload;
