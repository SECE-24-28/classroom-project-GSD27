const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')

app.engine('hbs',exhbs.engine(
    {layoutsDir : 'viewfold/',defaultLayout : "main",extname : "hbs"}
))

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','hbs')
app.set('views','viewfold')

 
let message='Divakar'
app.listen(8000,()=>{
    console.log('server is running on port 8000')
})
// app.get('/',(req,res)=>{
//     res.render('main',{message})
// })

app.get('/',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const cursor=collection.find({})
    let mydata=await cursor.toArray()

    let message = 'test'

    switch(req.query.status){
        case '1':
            message='inserted'
            break
        
        default:
            break;

    }
    res.render('main',{message,mydata})
    
    
})

app.listen(8000, () => {
    console.log('listening to 8000 port')
})

app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata = {title:req.body.title1,author:req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})


