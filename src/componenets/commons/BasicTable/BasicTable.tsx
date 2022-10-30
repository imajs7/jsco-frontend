import React from "react";
import { Column, useTable } from "react-table";
import Product from "./ProductModel";
import './BasicTable.css';

type Props = {
    columns: Column<object>[],
    data: Product[]
}

const BasicTable = ( { columns, data } : Props ) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return ( 
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map( headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( header => (
                                    <th {...header.getHeaderProps()}>
                                        {header.render( 'Header' )}
                                    </th>
                                ) )
                            }
                        </tr>
                    ) )
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map( row => {
                        prepareRow( row );

                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render( 'Cell' )}
                                        </td>
                                    ) )
                                }
                            </tr>
                        );

                    } )
                }
            </tbody>
        </table>
     );
}
 
export default BasicTable;