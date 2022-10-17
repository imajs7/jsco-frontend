import axios from 'axios';

const getSiteInfo = async () => {
    const response = await axios.get( 'https://jscobackend.jsco.ml' );
    console.log(response.data);
    return response.data;
};

export default getSiteInfo;