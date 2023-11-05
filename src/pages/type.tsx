export type userState = {
    users: dataType<userType>;
};

export interface dataType<T> {
    products: Array<T>;
    total: number;
    skip: number;
    limit: number;
}
export type userType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
};
