const express = require('express');
const cors =require("cors")
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const databaseConnect = require('./config/database');
const authRouter = require('./routes/authRoute');
const messengerRoute = require('./routes/messengerRoute');

dotenv.config()
// Enable CORS before other middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow sending cookies with the request
  })
);
app.use('/api/messenger',authRouter);
app.use('/api/messenger', messengerRoute);



app.get('/',(req,res)=>{
    res.send('ok');
})
 
databaseConnect();

const PORT = process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})