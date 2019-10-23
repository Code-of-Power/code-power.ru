import * as React from 'react';

interface ICarouselProps {
    items: JSX.Element[];
}

export function Carousel(props: ICarouselProps) {
    return (
        <div className="d-flex wrapper py-2" onScroll={(e) => e.stopPropagation()}>
            <div className="d-flex">
                {props.items}
            </div>
        </div>
    );
}