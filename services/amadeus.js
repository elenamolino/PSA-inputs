const axios = require('axios');

const getAccessToken = async () => {
    const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
        const response = await axios.post(url, "grant_type=client_credentials&client_id=3GdKBYuoHqAXgb8kGynA36S6bfX8vVhh&client_secret=rFvcX0nA7o0rnAUm", { headers });
        return response.data.access_token;
    }
    catch (error) {
        console.log(error);
    }
};

const searchFlights = async (data) => {
    const accessToken = await getAccessToken();
    const url = 'https://test.api.amadeus.com/v2/shopping/flight-offers';
    const headers = {
        'Authorization': 'Bearer ' + accessToken
    }
    try {
        const response = await axios.get(url, {
            params: data,
            headers: headers
          });
        return response;
    } catch (error) {
        console.log(error);
    }
};

const searchCity = async (data) => {
    const accessToken = await getAccessToken();
    const url = 'https://test.api.amadeus.com/v1/reference-data/locations/cities';
    const headers = {
        'Authorization': 'Bearer ' + accessToken
    }
    try {
        const response = await axios.get(url, {
            params: data,
            headers: headers
            });
        return response;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getAccessToken,
    searchFlights,
    searchCity
}
