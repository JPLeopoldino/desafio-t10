import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
    height: 3.5rem;
    width: 10rem;
    border: 2px solid rgba(255, 255, 255, 0.8);
    outline: none;
    background: none;
    border-radius: 3px;
    color: #FFF;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border: 2px solid #FFF;
    }
    &:focus {
        background-color: rgba(255, 255, 255, 0.15);
        border: 2px solid ${colors.pink};
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.5);
        border: 2px solid ${colors.pink};
    }

    :disabled {
        cursor: not-allowed;
    }
`;
    