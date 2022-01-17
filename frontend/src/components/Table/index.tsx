import React from 'react';
import { IUserProps } from '../../hooks/user';
import * as SC from './styles';

interface TableProps {
    data: IUserProps[];
}

export default function Table ({
    data
}: TableProps) {
    return (
        <SC.Table>
            <thead>
                <tr>
                    <th></th>
                    <SC.TableHeaderLine>firstName</SC.TableHeaderLine>
                    <SC.TableHeaderLine>lastName</SC.TableHeaderLine>
                    <SC.TableHeaderLine>participation</SC.TableHeaderLine>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <SC.TableLine key={index}>
                                <td>{index}</td>
                                <SC.TableFirstNameItem>{item.firstName}</SC.TableFirstNameItem>
                                <SC.TableLastNameItem>{item.lastName}</SC.TableLastNameItem>
                                <SC.TableParticipationItem>{item.participation}%</SC.TableParticipationItem>
                            </SC.TableLine>
                        );
                    })
                }
            </tbody>
        </SC.Table>
    );
}