
import express from 'express'
import mongoose from 'mongoose'
const app = express();



const PORT = 8000; 
const URL = "mongodb+srv://Angrymind:Angry@9111@cluster0.hwtdyli.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() =>{
    app.listen(PORT, () =>{
        console.log('server running')
    });  
}).catch(error =>{
    console.log("Error",error.message)
})