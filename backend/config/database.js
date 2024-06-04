const mongoose = require('mongoose');

const connect = async() => {
    try{
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch(error){
        console.log(`Error connecting to MongoDB connection: ${error.message}`);
        process.exit(1);
    }
}


module.exports = connect;