import React from 'react';
import * as SC from './styles';

import LoadingIndicator from '../LoadingIndicator';

interface ButtonProps {
    label?: string;
    disabled?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    onClick
}) => {
    return (
        <SC.Button
            onClick={onClick}
            disabled={disabled}
            type="submit"
        >
            {
                disabled
                ? <LoadingIndicator color="white" size={24}/>
                : label
            }
        </SC.Button>
    );
}

export default Button;
