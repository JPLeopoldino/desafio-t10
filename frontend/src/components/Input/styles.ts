import styled from 'styled-components';

export const Input = styled.input`
    width: 20rem;
    border: 3px solid #FFF;
    outline: none;
    padding: 18px;
    border-radius: 3px;

    transition: border 0.2s ease;

    &:focus {
        border: 3px solid #CC3363;
    }

     /* {
        border: 2.5px solid #CCC;
    } */
`;