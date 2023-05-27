const { Configuration, OpenAIApi } = require("openai")

const apiKey = "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";

const configuration = new Configuration({
    apiKey,
})

const openai = new OpenAIApi(configuration)

const parametersExtraction = async (request, json, numInputs) => {
    const prompt = "Hi, I am going to attach an API specification in JSON format. Could you return me a list including at least "
    + numInputs + " different real and valid examples for the query params needed to make a GET request to " + request + "? Please, I want"
    + "your response to follow this format: [{params1}, {params2}]. Also, keep in mind that some dates should be in the future and today is " + new Date() + ". \n\n " + json;

    const completion = await openai.createChatCompletion(
        {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }]
        }
    );

    const response = completion.data.choices[0].message;
    return response;
}

module.exports = {
    parametersExtraction
}