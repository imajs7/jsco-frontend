import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getSiteData from '../../../services/fetchData';
import './Panel.css';

const Panel = () => {

    const [ bannerImage, setBannerImage ] = useState<string>('//unsplash.it/1400/150');
    const [ bannerAction, setBannerAction ] = useState<string>('');

    useEffect( () => {
        async function getData() {
            try{
                const data = await getSiteData();
                setBannerImage( data.banner.image );
                setBannerAction( data.banner.action );
            } catch ( error ) {
                console.log( error as string );
            }
        }
        getData();
    }, []);

    return(

        <>
            {
                ( bannerImage !== '' ) &&
                <div className="banner">
                    <Link to={bannerAction}><img src={bannerImage} alt="banner" /></Link>
                </div>
            }
        </>

    );

};

export default Panel;