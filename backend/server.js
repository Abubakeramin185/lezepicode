import expess from "express";
import cors from "express";
import "dotenv/config";
import db from './db.js';
import authorsRoutes from "./routes/authors.router.js";
import postsRoutes from ".routes/posts.router.js";




//imposto l'app express e definisco i dati della connessione

const app =express();
const port = 3001
const dbname = "Epicode24"; 


//middleware 
app.use(cors()); //middleware  per la gestione del cors
app.use(express.json()); //middleware per la gestione del formato json

app.use("/authors", authorsRoutes)
app.use("/posts", postsRoutes)
db();

//utilizzo di multer

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){cb(null, 'uploads/')}, //imposto la cartella di connessione
//     filename: function (req, file, cb){cb(null, file.originalname)} //imposto il name del file
// })
// function fileFilter(req, file, cb){
//     if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
//         cb(null, true)
//     }else {
//         cb(null, false)
    
//         return cb(new error('formato non consentito!!!'))
//     }
// } 
// const upload = multer({storage: storage, filefiter: fileFilter})





// //Routes

// app.post('/upload-cloud', upload.single('uploaded_file'),(req, res) => {
//     const file = req.file;
//     console.log(file)
//     res.status(200).json({message: "filericevuto!!"})
// })

// app.post('/upload', cloud.single('uploaded_file_cloud'),(req, res) => {
//     const file = req.file;
//     console.log(file)
//     res.status(200).json({message: "filericevuto!!"})
// })

// app.get('/send-email', async(req,res) => {
//     // console.log('send-email');
//     // res.status(200).json({message: "Email inviata!!!"})

//     const msg = {
//         to: 'test@example.com', // Change to your recipient
//         from: 'abubakeramin185@gmail.com', // Change to your verified sender
//         subject: 'Sending with SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//       }
//       try {
//         await sgMail.send(msg)
//             .then((response) => {
//             console.log(response[0].statusCode)
//             console.log(response[0].headers)
//             return res.status(response[0].statusCode).json({...response[0]})
//             })
//             .catch((error) => {
//             console.error(error)
//             return res.status(500).json({...error})
//             })
//       } catch(error) {
//         console.error(error)
//         return res.status(500).json({...error})
//       }
    
// })



//connect to DB and start the server
mongoose.connect(process.env.MONGODB_URL + dbname)
.then(resp => app.listen(port,() => console.log("server attivo sulla port" + port)))
.catch(err => console.error(err))


