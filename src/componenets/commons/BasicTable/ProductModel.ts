type Product = {
    "id": number,
    "title": string,
    "desc": string,
    "category": string[],
    "price": {
        "regular": number,
        "discounted"?: number
    },
    "tax"?: number,
    "image"?: string
}

export default Product;