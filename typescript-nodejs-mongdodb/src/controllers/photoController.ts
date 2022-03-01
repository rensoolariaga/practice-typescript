import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';

// import the model with the config of mongoDB
import Photo from '../models/Photo';

// ---> import the type of data of express and set the params

export const helloWorld = (req: Request, res: Response) => {
    res.send('Hello world')
};


export async function createPhoto(req:Request, res:Response) {
    const { title, description } = req.body;
    const imageUpload = req.file?.path;

    try{
        const newPhoto = {
            title: title,
            description: description,
            imagePath: imageUpload
        };

        // use the model and send the info of the body
        const photo = new Photo(newPhoto);

        // send the order for the db
        await photo.save();
        return res.json(`info: ${photo}`)
    }
    catch
    (error) {
        res.send(error)
    }
};

export async function getPhotos(req:Request, res:Response) {
// show all the photos in db
    const allPhotos = await Photo.find();
    return res.json(`all the photos: ${allPhotos}`)
};

export async function getPhotoById(req:Request, res:Response) {
    const { id } = req.params;
    try{
        const photoById = await Photo.findById(id);
        return res.json(photoById)
    }
    catch(error){
        res.send(error)
    }
};

export async function deletePhotoById(req:Request, res:Response) {
    const { id } = req.params;
    try{
       const deletePhotoById = await Photo.findByIdAndRemove(id);
       if(deletePhotoById) {
           // fs.unlink ---> node found and delete(location(originalName))
            await fs.unlink(path.resolve(deletePhotoById.imagePath))
       }
       return res.json(`photo deleted: ${deletePhotoById}`)
    }
    catch(error) {
        res.send(error)
    }
};

export async function updatePhotoById(req:Request, res:Response) {
    const { id } = req.query;
    const { title, description } = req.body;

    try{
        const updatedPhotoById = await Photo.findByIdAndUpdate(id, {
            title: title,
            description: description
        });

        return res.json(`photo updated: ${updatedPhotoById}`)

    }
    catch(error) {
        res.send(error)
    }
};