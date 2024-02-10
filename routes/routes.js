const express = require('express');
const router = express.Router()
module.exports = router;

//Post method
    // router.post('/post', (req, res) => {
    //     res.send('Post API')
    // })

//Get all method
    // router.get('/get', (req, res) => {
    //     res.send('Get All API')
    // })

//Get by ID
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id)
// })

//Update by ID
// router.patch('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

//Delete by ID
// router.delete('/delete/:id', (req, res) => {
//     res.send('Dlete by ID API')
// })

const Model = require('../model/model');

// router.post('/post', (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })
// })

//Post method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID
router.get('/getOne/:id', async (req, res) =>{
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID
router.patch('/update/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch{
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
router.delete('/delete/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch(error) {
        res.status(500).json({message:error.message})
    }
})