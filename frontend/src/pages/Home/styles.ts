import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    padding: 3rem 24rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.blue};
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #394B50;
`;

export const Text = styled.p`
    font-size: 1.15rem;
    color: #394B50;
`;

export const ContentContainer = styled.div`
    width: 100%;
    padding: 3rem 24rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.25rem 0;
    background-color: ${colors.dark_blue};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
`;

export const FooterText = styled.p`
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
        color: #CC3363;
    }
`;
