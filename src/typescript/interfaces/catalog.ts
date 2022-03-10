export interface ICatalogData {
    results: ICatalogDataResults[]
}

export interface ICatalogDataResults {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    price: number;
    priceSale: number;
    quantity?: number
}
