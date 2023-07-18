const axios = require('axios');
//obtengo los datos de la api
const URL = 'https://api.thedogapi.com/v1/breeds';

const getApiData = async () => {
    const response = (await axios.get(URL)).data;
    const apiDogs = response.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            temperament: dog.temperament?.split(', '),
            weight: dog.weight,
            height: dog.height,
            life_span: dog.life_span,
            bred_for: dog.bred_for,
            breed_group: dog.breed_group,
            origin: dog.origin,
        };
    });
    return apiDogs;
};

module.exports = getApiData;