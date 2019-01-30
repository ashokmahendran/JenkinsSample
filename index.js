let express=require('express');
const app=express();
var cors = require('cors');
app.use(cors());

app.get('/login', (req, res) => {
    console.log('Here');
    
    res.send('Hello World!')

})
app.get('/', (req, res) => {
    console.log('Here');
    
    res.send('Hello World ')

})
app.listen(7000,(err)=>{
    if(err){
        console.log('Server Starts failed',err.msg);
    }
    console.log('Listening 7070');
})
