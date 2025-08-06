import mongoose from "mongoose";

 export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "Foodweb",
    })
    .then(()=> {
        console.log("connection to data successfully");
    })
    .catch((err)=> {
        console.log(`some error occured while connneding to data! ${err}`)
    });
};