 
const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());
app.use('/api/v1/test',require('./routes/test_route') );

const PORT =  5080;


app.listen(PORT,()=>{
    console.log(`server started for  on port ${PORT}`);
})

