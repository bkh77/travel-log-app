import mongoose from 'mongoose'

const connectDB = () => {
  mongoose.set('strictQuery', false)
  mongoose
    .connect(process.env.MONGO_URI || '')
    .then((result) => console.log(`MongoDB succesfully connected on: ${result.connection.host}`))
    .catch((err) => console.log(err))
}

export default connectDB
