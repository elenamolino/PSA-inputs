const express = require('express');
const router = express.Router();
const openaiService = require('../services/openai');

router.post('/inputs-get', async (req, res) => {
    const { request, json, numInputs } = req.body;
    const response = await openaiService.getRequestParams(request, json, numInputs);

    let gptResponse = response.content;
    gptResponse = JSON.parse(gptResponse);
    res.status(200).send({
        "status": "success",
        "message": "Question answered successfully",
        "data": gptResponse
    });
});

router.post('/inputs-post', async (req, res) => {
    const { request, json, numInputs } = req.body;
    const response = await openaiService.postRequestParams(request, json, numInputs);

    console.log(response);
    let gptResponse = response.content;
    gptResponse = JSON.parse(gptResponse);
    res.status(200).send({
        "status": "success",
        "message": "Question answered successfully",
        "data": gptResponse    
    });
});

module.exports = router;