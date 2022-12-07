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



const PORT = 5000

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`))



