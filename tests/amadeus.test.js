const axios = require('axios');
const amadeusService = require('../services/amadeus');
const openaiService = require('../services/openai');

describe('API tests', () => {
    it('should return a successful response', async () => {
        const response = await axios.get('http://localhost:3000');
        expect(response.status).toBe(200);
    });
});

describe('Flight Offers Search', async () => {
    const response = await openaiService.parametersExtraction(request, json, numInputs);
    test.each(response.data)
        ('should return a list of flights', async (data) => {
            const result = await amadeusService.searchFlights(data);
            expect(result.status).toBe(200);
        }, 10000);
});
