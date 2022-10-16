import React, { useContext } from 'react';
import SiteContext from '../../../models/SiteContext';
import useDocumentTitle from '../../../utils/useDocumentTitle';

const Services = () => {

    const { siteTitle } = useContext(SiteContext).siteInfo;

    useDocumentTitle( siteTitle + ' | Services');

    return ( 
        <>
            <div className="add-padding">
                <h2>Content area comin from services page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum assumenda at expedita odit autem quasi alias est, hic incidunt sit libero minima earum sed dolor a consequuntur nam placeat.</p>
            </div>
        </>
     );
}
 
export default Services;