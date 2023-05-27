const express = require('express');
const router = express.Router();
const openaiService = require('../services/openai');

router.post('/', async (req, res) => {
    const { request, json } = req.body;
    const response = await openaiService.parametersExtraction(request, json);

    let gptResponse = response.content;
    gptResponse = JSON.parse(gptResponse);
    res.status(200).send({
        "status": "success",
        "message": "Question answered successfully",
        "data": gptResponse
    });
});

module.exports = router;