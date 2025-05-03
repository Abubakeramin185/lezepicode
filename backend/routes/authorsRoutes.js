import express from "express";
import authorsModel from "../models/authorsSchema.js";
import { uploadAvatar, uploadCover } from "../midlewares/multer.js";


const router = express.Router();

router.get("/", async (req, res) => {
    // const size = req.query.size;
    // const skip = (req.query.page-1)*size
    // const prop = req.query.order;

    try{
        const authors = await authorsModel.find()
        return res.status(200).json(authors)
    }catch(err) {
        return res.status(500).json({error: "errore nel recupero dati degli autori"})
    }
})
router.get("/:id", async (req, res) => {
    const id = req.params.id
    try{
        const authors= await authorsModel.findById(id)
        res.status(200).json(authors)
    }catch(err){
        res.status(500).json({error: "error nel caricamento del post"})
    }
})

router.post("/", async (req, res) => {
    const obj = req.body
    const author = new authorsModel(obj)
    const dbAuthors = await post.save()
    res.status(200).json(dbAuthors)
})
 
router.put("/:id", async (req, res)=> {
    const id = req.params.id
    const obj = req.body
    try{
        const authorsEdit = await authorsModel.findByIdAndUpdate(id, obj)
        res.status(200).json(authorsEdit)
    }catch(err){
        res.status(500).json({errore: "error nella modifica del post"})
    }
})
router.patch("/:id/cover", uploadAvatar, async (req, res) =>{
    const id = req.params.id
    try{
        const coverUrl = `/covers/${req.file.filename}`
        const authorUpdated = await authorsModel.findByIdAndUpdate(
            id,
            {cover: coverUrl},
            {new: true}
        )
        res.status(200).json(authorUpdated)
    }catch(err){
        res.status(500).json({error: "errore durante il caricamento del file"})
    }
})

router.delete('/:id', async(req, res) => {
    const id = res.params.id;
    try{
        await authorsModel.findByIdAndDelete(id);
        res.status(200).json({message: "author deleted!!!"})
    }catch(error){
        res.status(500).json({error: err.message})
    }
})

export default router;

