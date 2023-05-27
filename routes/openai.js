const express = require('express');
const router = express.Router();
const openaiService = require('../services/openai');

router.post('/', async (req, res) => {
    const { request, json } = req.body;
    const response = await openaiService.parametersExtraction(request, json);
    res.status(200).send({
        "status": "success",
        "message": "Question answered successfully",
        "data": response
    });
});

module.exports = router;