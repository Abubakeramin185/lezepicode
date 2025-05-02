import express from "express";
import postsModel from "./Posts.routes.js";
import { uploadCover } from "./midlewares/multer.js";


const router = express.Router()

router.get("/params", async (req, res) => {
    const size = req.query.size;
    const skip = (req.query.page-1)*size
    const prop = req.query.order;

    try{
        const filterPosts = await userModel.find().sort({[prop]:1}).linit(size).skip(skip)
        return res.status(200).json(filterPosts)
    }catch(err) {
        return res.status(500).json({error: err.message})
    }
})
router.get("/", async (req, res) => {
    try{
        const posts = await postsModel.findById(id)
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json({error: "error nel caricamento del post"})
    }
})

router.post("/", async (req, res) => {
    const obj = req.body
    const post = new postsModel(obj)
    const dbposts = await post.save()
    res.status(200).json(dbposts)
})
 
router.put("/:id", async (req, res)=> {
    const id = req.params.id
    const obj = req.body
    try{
        const postEdit = await postsModel.findByIdAndUpdate(id, obj)
        res.status(200).json(postEdit)
    }catch(err){
        res.status(500).json({errore: "error nella modifica del post"})
    }
})
router.patch("/:id/cover", uploadCover("cover"), async (req, res) =>{
    const id = req.params.id
    try{
        const coverUrl = `/covers/${req.file.filename}`
        const postEdit = await postsModel.findByIdAndUpdate(
            id,
            {cover: coverUrl},
            {new: true}
        )
        res.status(200).json(postEdit)
    }catch(err){
        res.status(500).json({error: "errore durante il caricamento del file"})
    }
})

ruoter.delete('/:id', async(req, res) => {
    const id = res.params.id;
    try{
        await authorsSchema.findByIdAndDelete(id);
        res.status(200).json({message: "author deleted!!!"})
    }catch(error){
        res.status(500).json({error: err.message})
    }
})

export default router;


// function fileFilter(req, file, cb){
//     if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
//         cb(null, true)
//     }else {
//         cb(null, false)
    
//         return cb(new error('formato non consentito!!!'))
//     }
// } 
// const upload = multer({storage: storage, filefiter: fileFilter})



// const storageCloud = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'cloud-upload',
//       format: async (req, file) => 'png', // supports promises as well
//       public_id: (req, file) => 'file.originalname',
//     },
//   });

