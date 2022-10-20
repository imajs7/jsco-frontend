import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getSiteData = async () => {
  try {
    const response = await axios.get( `${baseUrl}` );
    return response.data;
  } catch( error ) {
      console.log( error as Error );
  }
  
};

export default getSiteData;