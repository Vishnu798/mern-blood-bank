 
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const app = express();
dotenv.config()
connectDb()

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));
app.use('/api/v1/test',require('./routes/test_route') );

const PORT =  3000;


app.listen(PORT,()=>{
    console.log(`server started for port ${PORT}`);
})

