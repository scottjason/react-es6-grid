import axios from 'axios';

const onError = err => console.log('api request error', err);
const onSucess = res => res.data;

export const getPhotos = url => {
  return axios.get(url).then(onSucess, onError);
};
