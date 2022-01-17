import styled from 'styled-components';

export const Table = styled.table`
    width: 25vw;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 14px;
    border: none;
`;

export const TableHeaderLine = styled.th`
    border-bottom: 2px solid #CCC;
`;

export const TableLine = styled.tr`
    cursor: pointer;
    padding: 24px;
    transition: background 0.2s ease;

    user-select: none;

    &:hover {
        color: #222;
        background-color: #EEE;
    }

    &:active {
        transition: 0s;
        color: #FFF;
        background-color: #CC3363;
    }
`;

export const TableFirstNameItem = styled.td`
    padding: 0 0.15rem 0;
    text-align: right;
`;

export const TableLastNameItem = styled.td`
    padding: 0 0 0 0.15rem;
    text-align: left;
`;

export const TableParticipationItem = styled.td`
    width: 10%;
    text-align: center;
`;
