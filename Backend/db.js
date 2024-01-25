const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://saurav:S22onam@sandbox.vw4wrva.mongodb.net/UserDetails"
const connectToMongo = ()=>{
     mongoose.connect(
    mongoURI,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
}
module.exports = connectToMongo;