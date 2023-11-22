const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
//const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

routes(app);

//`${process.env.MONGO_DB}`
mongoose.connect(`mongodb+srv://kieuq20021994:KieuB2012105CT449@cluster0.xbrjhyk.mongodb.net/?retryWrites=true&w=majority`)
//const url = `mongodb+srv://kieuq20021994:${process.env.PASSWORD}@cluster0.xbrjhyk.mongodb.net/?retryWrites=true&w=majority`;
//const url = `${process.env.MONGODB_URL}`;

//mongoose.connect(url)
 // {
//    useNewUrlParser: true,
 //   useUnifiedTopology: true,
 // })
   .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
         console.log(err)
    })
app.listen(port, () => {
     console.log('Server is running in port: ', + port)
})