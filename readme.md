# Generate automatic test inputs 

This project uses the GPT 3.5 model to generate input data from the OAS specification of the REST API. 

To run the project it is necessary to run `npm i` and `npm run dev`. In addition, a Postman collection is included where all possible requests are located. 

On the other hand, to execute the tests use the command `npx jest amadeus.test.js`.

---

For its execution it is necessary to have an [Open AI](https://openai.com/) API Key and an [Amadeus](https://developers.amadeus.com/) API Key and API Secret.
