import React, { useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as SC from './styles';

import { IUserProps, useUser } from '../../hooks/user';

interface TableProps {
    data: IUserProps[];
}

const Table: React.FC<TableProps> = ({ data }) => {

    const {
        deleteUser,
        deleteLoading,
        usersList,
        setUsersList
    } = useUser();

    const hadleDeleteUser = useCallback(async (id?: string) => {
        try {
            await deleteUser(id);
            let users = usersList.filter(item => item.id !== id)
            setUsersList([...users]);
        } catch (error) {
            console.log(error);
        } 
    }, [deleteUser, usersList, setUsersList]);

    return (
        <SC.Container>
            <SC.Table>
                <SC.TableHeader>
                    <tr>
                        <th></th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Participation</th>
                        <th></th>
                    </tr>
                </SC.TableHeader>
                <SC.TableBody>
                    {
                        data.map((item, index) => {
                            return (
                                <SC.TableLine key={index}>
                                    <SC.TableTinyItem>{index + 1}</SC.TableTinyItem>
                                    <SC.TableFirstNameItem>{item.firstName}</SC.TableFirstNameItem>
                                    <SC.TableLastNameItem>{item.lastName}</SC.TableLastNameItem>
                                    <SC.TableParticipationItem>{item.participation}%</SC.TableParticipationItem>
                                    <SC.TableTinyItem key={index}>
                                        <Tooltip title="delete">
                                            <Button 
                                                icon={<DeleteOutlined />}
                                                disabled={deleteLoading}
                                                onClick={() => hadleDeleteUser(item.id)}
                                            />
                                        </Tooltip>
                                    </SC.TableTinyItem>
                                </SC.TableLine>
                            );
                        })
                    }
                </SC.TableBody>
            </SC.Table>
        </SC.Container>
    );
}

export default Table;
