import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    height: 40%;
    width: 100%;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue};
    gap: 1rem;
`;

export const Body = styled.div`
    height: 60%;
    width: 100%;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #394B50;
`;

export const Text = styled.p`
    font-size: 1.15rem;
    color: #394B50;
`;

export const ContentContainer = styled.div`
    width: 100%;
    margin: 3rem 0 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const ErrorText = styled.p`
    font-size: 1.5rem;
    color: #394B50;
    opacity: 0.5;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.2rem 0;
    background-color: ${colors.dark_blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
`;

export const FooterText = styled.p`
    margin: 0;
    color: #FFF;
`;

export const FooterLinkText = styled.a`
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s ease;
    outline: none;

    &:hover,
    &:focus {
        color: ${colors.pink};
    }
`;
