import axios from 'axios';


const clientId = 'zjp28aWLta8PBt-lGNLHOxQ5ry1uzguBcduC_BrG7_Q';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      'Authorization': `Client-ID ${clientId}`
    },
    params: {
      query: term
    }
  })
    .then(response => {
      return response.data.results;
    //   console.log(response)
    //   return response;
    })
    .catch(error => {
      console.error(error);
    });
};

export default searchImages;

