import * as React from 'react';

interface IFireflyProps {
    size: number;
    x: number;
    y: number;
}

export function Firefly(props: IFireflyProps) {
    const style = {
        width: props.size,
        height: props.size,
        left: `${props.x}%`,
        top: `${props.y}%`
    };

    return (
        <div className="firefly" style={style}></div>
    );
}