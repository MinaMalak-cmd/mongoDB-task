import mongoose from 'mongoose';

const connectDB = async () =>{
    return await mongoose.connect('mongodb://localhost:27017/Notes')
    .then((res) => {
        console.log("🚀Connected .........")
    }).catch((err) => {
        console.log("🚀 ~ file: connection.js:6 ~.catch ~ err:", err)
    });
}
export default connectDB;