import * as React from 'react';

interface IButton {
    type: 'primary' | 'danger' | 'default';
    children: string;
    cssClass?: string;
}

export function Button(props: IButton) {
    return (
        <button className={`cop-button rounded font-weight-bold ${props.type} ${props.cssClass || ''}`}>
            {props.children}
        </button>
    );
}