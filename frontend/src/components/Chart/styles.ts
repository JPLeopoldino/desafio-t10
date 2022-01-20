import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1025px) {
        width: 30%;
    }
`;
