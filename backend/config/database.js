const mongoose = require('mongoose');


const databaseConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log('Mongodb database connect....')
    }).catch(error=>{
        console.log(error);
    })
}
module.exports = databaseConnect;