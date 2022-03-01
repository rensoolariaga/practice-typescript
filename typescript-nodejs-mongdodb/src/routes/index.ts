import { Router } from 'express';
const router = Router();
import { createPhoto, deletePhotoById, getPhotoById, getPhotos, helloWorld, updatePhotoById } from '../controllers/photoController';
import multer from '../libs/multer';

router.get('/', helloWorld);
router.get('/photos', getPhotos);

// send multer.single('namePrefer') for only 1 image like middleware for the reception of the data
router.post('/photos', multer.single('image'), createPhoto);

router.get('/photos/:id', getPhotoById);
router.delete('/photos/:id', deletePhotoById);
router.put('/photo:id', updatePhotoById)

export default router;