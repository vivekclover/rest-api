const mongoose = require("mongoose")



const connectDB = (uri) =>{
    console.log('Connected to viandb')
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}
module.exports = connectDB;