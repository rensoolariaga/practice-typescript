import mongoose from 'mongoose';

export const startConnection = async() => {
    const photoGalleryDb = "mongodb://127.0.0.1:27017/photo-gallery";

    // connect ----> for connect to the db('protocol://localDB/dbName), {configurations}
   await mongoose.connect(photoGalleryDb);
    console.log('Database is connected');
}

