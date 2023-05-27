const { Configuration, OpenAIApi } = require("openai")

const apiKey = "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";

const configuration = new Configuration({
    apiKey,
})

const openai = new OpenAIApi(configuration)

const parametersExtraction = async (request, json) => {
    const prompt = "Hi, I am going to attach an API specification in JSON format. Could you return me the body needed to make a request to " + request + " with all the required parameters in JSON format? \n\n " + json;

    const completion = await openai.createChatCompletion(
        {
            model: "gpt-3.5-turbo",
            messages: [ {role: "user", content: prompt} ]
        }
    );
    
    const response = completion.data.choices[0].message;
    console.log(response);
    return response;
}

module.exports = {
    parametersExtraction
}