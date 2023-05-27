const axios = require('axios');


describe('API tests', () => {
    it('should return a successful response', async () => {
        const response = await axios.get('http://localhost:3000');
        expect(response.status).toBe(200);
    });
});

describe('Flight Offers Search', () => {
    it('should return a list of flights', async () => {
        const response = await axios.get('');
        expect(response.status).toBe(200);
    });
});
