
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    category: string;
    thumbnail: string;
}

export interface Filter {
    price: number;
    category: string;
}

export interface CartProduct {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    id: number;
}