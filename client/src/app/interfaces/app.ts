export interface IMenuItem {
    title: string;
    route: string;
}

export interface IOption<T> {
    title: string;
    value: T;
    disabled?: boolean;
}

export interface IMember {
    name: string;
    position: string;
    description: string;
    photoUrl: string;
}

export type CustomerOption = 'spa' | 'testing' | 'api' | 'mobile' | 'desktop' | 'devops';
