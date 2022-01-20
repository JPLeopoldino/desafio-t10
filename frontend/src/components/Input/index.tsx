import React, { InputHTMLAttributes } from 'react';
import * as SC from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    ...props
}) => {
    return (
        <SC.Input
            placeholder={label}
            {...props}
        />
    );
}

export default Input;
