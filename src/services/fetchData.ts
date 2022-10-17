import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const getSiteData = async () => {
    const response = await axios.get( `${baseUrl}` );
    return response.data;
};

export default getSiteData;