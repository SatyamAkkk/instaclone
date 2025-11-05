import mongoose from "mongoose"

const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Mongodb Connected Successfully")
  }catch(error){
    console.log(error)
  }
}

export default connectDB;

// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// export default connectDB;
