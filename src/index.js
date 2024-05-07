    import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { application } from 'express';

dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    const server = process.env.PORT || 8000
    app.on('App in nnot running Error: ', (error) => {
        console.log('Error: ', error);
        throw error;
    })
    app.listen( process.env.PORT || 8000, () => {
        console.log(`Server is run on PORT ${server}`)
    })

})
.catch( (err) => {
    console.log('MONGO db connection failed !! ', err)
})

/*
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('Error: ', error);
            throw error;
        })
        app.listen( process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log('ERROR: ',error)
        throw error
    }

})()

*/