import React, { InputHTMLAttributes } from 'react';
import * as SC from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
}

export default function Input ({
    label,
    ...props
}: InputProps) {
    return (
        <SC.Input
            placeholder={label}
            {...props}
        />
    );
}

// export default Input;
