require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOURI,{
            useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()
// app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });

app.get('/',(req,res) => res.send('Hello World'))

const productsRoute = require('./Routes/products')
app.use('/api/products', productsRoute)

const doitacRoute =require('./Routes/doitac')
app.use('/api/doitac',doitacRoute)

const phuongtienRoute = require('./Routes/phuongtien')
app.use('/api/phuongtien',phuongtienRoute)

const nhasanxuatRoute = require('./Routes/nhasanxuat')
app.use('/api/nhasanxuat',nhasanxuatRoute)

const nhapdonhangRoute = require('./Routes/nhapdonhang')
app.use('/api/nhapdonhang',nhapdonhangRoute)

const xuatdonhangRoute = require('./Routes/xuatdonhang')
app.use('/api/xuatdonhang',xuatdonhangRoute)

const containerRoute = require('./Routes/container')
app.use('/api/container',containerRoute)



const packageRoute = require('./Routes/package')
app.use('/api/package',packageRoute)

const iteminpackageRoute = require('./Routes/iteminpackage')
app.use('/api/iteminpackage',iteminpackageRoute)


const ccRoute = require('./Routes/testform')
app.use('/api/testform',ccRoute)






const PORT = 5000

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`))



