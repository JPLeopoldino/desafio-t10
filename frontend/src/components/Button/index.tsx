import React from 'react';
import * as SC from './styles';

interface ButtonProps {
    label?: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <SC.Button
            onClick={onClick}
        >
            {label}
        </SC.Button>
    );
}

export default Button;
