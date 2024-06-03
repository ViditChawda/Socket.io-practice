import mongoose from 'mongoose'

export const connectToMonogoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://viditchawda301:uqFOT9ONSfv1GLEz@cluster0.nx4xhdt.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Error connecting to mongoDB", error.message);
    }
}