export interface ProductModelServer {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    images: string;
    discount: number;
}


export interface ServerResponse {
    count: number;
    products: ProductModelServer[];
}
