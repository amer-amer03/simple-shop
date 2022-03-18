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
    quantity?: number;
    specs: ISpecs[];
}

export interface ISpecs {
    title: string;
    price: number;
    description: string;
    checked?: boolean
}


