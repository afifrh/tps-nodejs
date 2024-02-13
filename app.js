const express = require('express');
const app = express();

app.use(express.json());
const voiture = require('./routes/voiture');
app.use('/voiture',voiture);
app.listen(9000,()=>{console.log('listen on port 9000')})