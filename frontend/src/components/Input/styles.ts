import styled from 'styled-components';
import colors from '../../styles/colors';

export const Input = styled.input`
    height: 3.5rem;
    width: 20rem;
    border: 2px solid #FFF;
    outline: none;
    padding: 0 18px;
    border-radius: 3px;

    transition: border 0.2s ease;

    &:focus {
        border: 2px solid ${colors.pink};
    }
`;
