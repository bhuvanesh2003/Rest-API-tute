const express = require('express');
const router = express.Router()
module.exports = router;

//Post method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all method
router.get('/get', (req, res) => {
    res.send('Get All API')
})

//Get by ID
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID
router.delete('/delete/:id', (req, res) => {
    res.send('Dlete by ID API')
})