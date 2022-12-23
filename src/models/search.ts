export interface ISearchResponse {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface ISearch  {
    results: ISearchResponse[];
    offset: number;
    number: number;
    totalResults: number;
}