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
    totalPrice: number;
    quantity?: number;
    specs: ISpecs;
}
export interface ISpecs {
    antivirus: ISpec;
    os: ISpec;
    screencare: ISpec;
}
export interface ISpec {
    title: string;
    price: number;
    description: string;
    checked?: boolean;
}
