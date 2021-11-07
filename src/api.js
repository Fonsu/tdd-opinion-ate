import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/4E6OwurlYnuDX8ccyifw21BNiCHkoTYW',
});

const api = {
  loadRestaurants() {
    return client
      .get('/restaurants')
      .then(response => response.data)
      .catch(() => {});
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(response => response.data);
  },
};

export default api;
