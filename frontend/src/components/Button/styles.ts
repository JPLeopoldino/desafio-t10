import styled from 'styled-components';

export const Button = styled.button`
    border: 2px solid #FFF;
    outline: none;
    background: none;
    padding: .8rem 4rem;
    border-radius: 3px;
    color: #FFF;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }

    &:active {
        background-color: rgba(255, 255, 255, 0.25);
    }
`;