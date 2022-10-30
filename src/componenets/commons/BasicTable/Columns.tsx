const baseUrl = process.env.REACT_APP_BASE_URL;

const columns = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Image',
        accessor: 'image',
        Cell: ( props : any ) => {
            return (
                <img 
                    src={baseUrl + props.value}
                    alt="product_image"
                    width={60}
                    height={60}
                />
            )
        }
    },
    {
        Header: 'Title',
        accessor: 'title'
    },
    {
        Header: 'Description',
        accessor: 'desc'
    },
    {
        Header: 'Category',
        accessor: 'category',
        Cell: ( props : any ) => props.value.join( ', ' )
    },
    {
        Header: 'Price',
        columns: [
            {
                Header: 'Regular',
                accessor: 'price.regular',
                Cell: ( props : any ) => '₹' + props.value 
            },
            {
                Header: 'Discounted',
                accessor: 'price.discounted',
                Cell: ( props : any ) => '₹' + props.value
            }
        ]
    },
    {
        Header: 'Tax',
        accessor: 'tax',
        Cell: ( props : any ) => props.value + '%'
    }
];

export default columns;