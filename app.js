const express = require("express");
const app = express();
const post = require('./routes/post')
const auth = require('./routes/auth')



app.use('/post',post);
app.use('/auth',auth);



app.listen(9000,()=>{console.log("listen on port 9000")
})