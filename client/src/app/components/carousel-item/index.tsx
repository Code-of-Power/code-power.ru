import * as React from 'react';
import { ICarouselItem } from '@app/interfaces/app';

interface ICarouselItemProps {
    item: ICarouselItem;
}

export function CarouselItem(props: ICarouselItemProps) {
    const { item } = props;
    return (
        <div className="c-item rounded p-4 mx-2">
            <div>{item.title}</div>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div className="font-italic text-right mb-2">{item.description}</div>
            <div className="font-weight-bold text-center">Технологии</div>
            <div>
                {item.tech.map(t => <img src={t.ico} alt={t.title} />)}
            </div>
        </div>
    );
}
