import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already running');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB error: ", error);
    }
}