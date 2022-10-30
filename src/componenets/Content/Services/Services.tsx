import React, { useEffect, useMemo, useState } from 'react';
import getSiteData from '../../../services/fetchData';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import BasicTable from '../../commons/BasicTable/BasicTable';
import columns from '../../commons/BasicTable/Columns';
import Product from '../../commons/BasicTable/ProductModel';
import './Services.css';

const Services = () => {

    const [ products, setProducts ] = useState<Product[]>([]);
    const columnConfig = useMemo( () => columns, [] );

    useDocumentTitle( 'JS Codes & Machine Learning | Services');

    useEffect( () => {
        async function getData() {
            try{
                const data = await getSiteData();
                setProducts( data.services );
            } catch ( error ) {
                console.log( error as string );
            }
        }
        getData();
    }, []);

    return ( 
        <div className="container services">
            <div className="services">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum assumenda at expedita odit autem quasi alias est, hic incidunt sit libero minima earum sed dolor a consequuntur nam placeat.</p>
            </div>
            <div className="table">
                <BasicTable columns={columnConfig} data={products} />
            </div>
        </div>
     );
}
 
export default Services;