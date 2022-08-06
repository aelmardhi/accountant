const express = require('express');
const fs = require('fs')
const app = express();


app.use(express.static('./build'))
app.get('*',(req,res)=>{
    fs.createReadStream('./build/index.html').pipe(res)
})

const PORT = process.env.port || 3000;
app.listen(PORT,()=>{
    console.log('server started on port:'+PORT);
})