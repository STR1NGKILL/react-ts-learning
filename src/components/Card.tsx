import React, {FC, useState} from 'react';

export enum CardVariants {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVariants
    children?: React.ReactNode
    onClick: (num: number) => void
}

const Card: FC<CardProps> = (
    {
        width,
        height,
        variant,
        children,
        onClick
    }
) => {
    const [state, setState] = useState(0)

    return (
        <div style={{
            width, height,
            border: variant === CardVariants.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariants.primary ? 'lightgrey' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;