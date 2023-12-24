import mongoose from "mongoose";

export const connectDatabase = () => {
    const db_link = "mongodb+srv://vineet:g93Mx2irT9IkcI2N@foodmenu.dblmsya.mongodb.net/?retryWrites=true&w=majority";
    mongoose
        .connect(db_link)
        .then(() => {
        console.log("DB connected ....");
        // Retrieve the schema for the first collection
        const firstCollectionModel = mongoose.model('FoodMenu', {});
        const firstCollectionSchema = firstCollectionModel.schema;
        console.log('First Collection Schema:', firstCollectionSchema);

        // Retrieve the schema for the second collection
        // const secondCollectionModel = mongoose.model('Data', {});
        // const secondCollectionSchema = secondCollectionModel.schema;
        // console.log('Second Collection Schema:', secondCollectionSchema);
    })
    .catch((err) => {
        console.log(err);
    });
};