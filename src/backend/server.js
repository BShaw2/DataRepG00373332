const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
next();
});



app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

//mongodb+srv://admin:root@cluster0.l0m4i.mongodb.net/countries?retryWrites=true&w=majority
const myConnectionString = 'mongodb+srv://admin:root@cluster0.l0m4i.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true})

const Schema = mongoose.Schema;

var countrySchema = new Schema({
    country_name:String,
    country_code:String,
});

var CountryModel = mongoose.model("countries", countrySchema);

app.get('/api/movies', (req, res) => {

    CountryModel.find((err, data)=>{
    res.json(data);
})

     //res.status(200).json({
       //  message: "Everything is ok"});
})

app.get('/api/movies/:id', (req, res)=>{
    console.log(req.params.id);

    CountryModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

//Listen to HTTP request using delete method
app.delete('/api/movies/:id', (req, res)=>{
    console.log("Delete Country: "+req.params.id);

    //Going to delete that entry from the database
    CountryModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

app.post('/api/movies', (req, res)=>{
    console.log('Country Recieved!');
    console.log(req.body.country_name);
    console.log(req.body.country_code);


    CountryModel.create({
        country_name:req.body.country_name,
        country_code:req.body.country_code
    })

    res.send('Country Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
