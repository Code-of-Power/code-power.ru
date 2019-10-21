import { Parallax } from 'react-spring/renderprops-addons';

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

export interface ICarouselItem {
    title: string;
    image: string;
    description: string;
    tech: ITechItem[];
}

export interface ITechItem {
    ico: string;
    title: string;
}

export type CustomerOption = 'spa' | 'testing' | 'api' | 'mobile' | 'desktop' | 'devops';

export interface IModel<T> {
    nextState(state:T): T;
    asState(): T;
}

export interface IExtParallax extends Parallax {
    onScroll(event: any): void;
    container: HTMLDivElement;
    content: HTMLElement;
}