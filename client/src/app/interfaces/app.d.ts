export interface IMenuItem {
    title: string;
    route: string;
}

export interface IOption<T> {
    title: string;
    value: T;
    disabled?: boolean;
}

export type CustomerOption = 'spa' | 'testing' | 'api' | 'mobile' | 'desktop' | 'devops';
