const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async function connection() {
    try{
        const connectionParams = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.MONGO_URI,connectionParams).then(() => {
          console.log("Connection Successful.");
        })
      }catch(e){
        console.log("Connection UnSuccessful.");
        console.log(e);
      }
}