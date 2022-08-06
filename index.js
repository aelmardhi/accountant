const express = require('express');
const app = express();


app.use(express.static('build'))
app.get('*',(req,res)=>{
    res.sendFile('./build/index.html')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server started on port:'+PORT);
})