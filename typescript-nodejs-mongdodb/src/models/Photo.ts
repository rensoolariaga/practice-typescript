import { Schema, model, Document } from 'mongoose';

// import the schema and define the formate of the data to set in db
const schema = new Schema({
    title: String,                  // String in mayuscle is for the structure of mongoose
    description: String,
    imagePath: String
});

// Documents represents a tipical mongoDB document 
// this interface hered the document structure
interface IPhoto extends Document {
    title: string;              // string in minuscle is for the structure of typescript
    description: string;
    imagePath: string;
}

// ----> crete the collection (table in sql) in the db model('nameOfTheCollection', schemaOfTheData)
// ---> theModel<willComplyWithTheInterface>
export default model<IPhoto>('Photo', schema)