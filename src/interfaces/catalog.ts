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
    specs: ISpecs;
}

export interface ISpecs {
    antivirus: ISpecsDescription;
    os: ISpecsDescription;
    screenCare: ISpecsDescription;
}

export interface ISpecsDescription {
    price: number;
    description: string
}
