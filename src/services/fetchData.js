import axios from 'axios';

const fetchUrl = "http://jscobackend.jsco.ml";

const getSiteInfo = async () => {
    try {
      const response = await axios.get( fetchUrl );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

export default getSiteInfo;