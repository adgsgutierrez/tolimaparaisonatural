export interface IBanner {
    imgBanner: string;
    textBanner: string;
    version: string;
}

export interface ISubBanner{
    title: string;
    content: string;
    version: string;
}

export interface ICard{
    id: string;
    image: string;
    title: string;
    description: string;
    route: string;
}

export interface IDetailSite{
    card: string;
    title: string;
    description?: string;
    images?: string[];
    details?: ICard[];
}

export const defaultIBanner: IBanner = {
    imgBanner: '',
    textBanner: '',
    version: '0.0'
};

export const defaultISubBanner: ISubBanner = {
    title: '',
    content: '',
    version: '0.0'
};

export const defaultICard: ICard = {
    id: '',
    image: '',
    title: '',
    description : '',
    route: ''
};

export const defaultIDetailSite: IDetailSite = {
    card: '',
    title: '',
    description: '',
    images: [],
    details: []
}