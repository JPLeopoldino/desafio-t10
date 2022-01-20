import styled from 'styled-components';

export const Container = styled.div`
    height: 22rem;
    width: 50%;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    @media only screen and (min-width: 1025px) {
        width: 30%;
    }
`;

export const Table = styled.table`
    width: 100%;
    border: none;
    user-select: none;
`;

export const TableHeader = styled.thead`
    height: 2rem;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #FFF;
    border-bottom: 1px solid #CCC;
`;

export const TableBody = styled.tbody`
    width: 100%;
    height: 100%;
    border: none;
`;

export const TableLine = styled.tr`
    width: 100%;
    padding: 24px;
    transition: background 0.2s ease;

    &:hover {
        color: #222;
        background-color: #EEE;
    }
`;

export const TableTinyItem = styled.td`
    text-align: center;
    border: 1px solid #CCC;
    padding: 0 0.1rem;
    max-width: 0.85rem;
`;

export const TableFirstNameItem = styled.td`
    padding: 0 0.5rem;
    text-align: left;
    overflow: hidden;
    border: 1px solid #CCC;
`;

export const TableLastNameItem = styled.td`
    padding: 0 0.5rem;
    text-align: left;
    overflow: hidden;
    border: 1px solid #CCC;
`;

export const TableParticipationItem = styled.td`
    text-align: center;
    border: 1px solid #CCC;
`;
