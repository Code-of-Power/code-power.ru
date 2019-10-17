import * as React from 'react';

interface IButton {
    type: 'primary' | 'danger' | 'default';
    disabled?: boolean;
    children: string;
    cssClass?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button(props: IButton) {
    const { children, cssClass, onClick, type, disabled } = props;
    const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button className={`cop-button rounded font-weight-bold ${type} ${cssClass || ''}`}
            disabled={disabled}
            onClick={(e) => click(e)}>
            {children}
        </button>
    );
}