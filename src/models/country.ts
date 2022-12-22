export interface ICountryResponse {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface ICountry  {
    results: ICountryResponse[];
    offset: number;
    number: number;
    totalResults: number;
}