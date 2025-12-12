const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')


// View engine setup
// app.engine('hbs', exhbs.engine({
//     layoutsDir: 'viewsfold/',
//     defaultLayout: "main",
//     extname: "hbs"
// }))

app.engine('hbs',exhbs.engine({layoutsDir: 'viewsfold/',extname:"hbs",defaultLayout:false}));

app.use(bodyParser.urlencoded({extended:true}))


app.set('view engine', 'hbs')
app.set('views', 'viewsfold')

//SINGLE correct route
app.get('/', async (req, res) => {
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
    const cursor = collection.find({})
    let mydata = await cursor.toArray()
    let message = 'test'
    switch(req.query.status)
    {
        case '1':
            message="insert successfully"
            break;

            default:
                break;
    }
    
    res.render('main', { message, mydata })
})


app.post('/store_book',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={title:req.body.title1,author:req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.get('/delete/:id',async(req,res)=>{
    const database=await dbo.getDataBase();
    const collection=database.collection('books');
    const {ObjectId}=require('mongodb');
    await collection.deleteOne({_id: new ObjectId(req.params.id)});
    res.redirect('/?status=3');
})

app.get('/edit/:id',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const {ObjectId} = require('mongodb');
   let book = await collection.findOne({_id:new ObjectId(req.params.id)})
    res.render('edit',{book});
})

app.post('/update/:id',async(req,res)=>{
    const database=await dbo.getDataBase();
    const collection=database.collection('books');

    const {ObjectId} = require('mongodb');

    await collection.updateOne(
        {_id:new ObjectId(req.params.id)},
        {$set: {title:req.body.title,author:req.body.author}}
    )
    res.redirect('/?status2');
});



app.listen(8000, () => {
    console.log('listening to 8000 port')
})

