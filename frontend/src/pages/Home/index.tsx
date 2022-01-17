import React, { RefObject, useCallback, useEffect, useRef } from 'react';
import { Formik } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as SC from './styles';
import { useUser } from '../../hooks/user';
import Table from '../../components/Table';
// import DonutChart from "react-donut-chart";
import Chart from "../../components/Chart";

interface IUserProps {
    firstName: string;
    lastName: string;
    participation: number;
}

const Home = () => {

    const { findAllUsers, usersList, loading, createUser } = useUser();

    const handleCreateUser = useCallback(async (data: IUserProps) => {
        try {
            await createUser({
                firstName: data.firstName,
                lastName: data.lastName,
                participation: data.participation,
            });
        } catch (error) {
            console.log(error);
        }
    }, [createUser])

    // useEffect(() => {
    //     findAllUsers();
    // }, [findAllUsers]);

    return (
        <SC.Container>
            <SC.Header>
                <Formik
                    onSubmit={handleCreateUser}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        participation: 0,
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <>
                            <Input 
                                label="First Name"
                                onChange={handleChange('firstName')}
                                value={values.firstName}
                            />
                            <Input 
                                label="Last Name"
                                onChange={handleChange('lastName')}
                                value={values.lastName}
                            />
                            <Input 
                                label="Participation"
                                onChange={handleChange('participation')}
                                value={values.participation}
                                type="number"
                            />
                            <Button 
                                onClick={handleSubmit}
                                label="Send"
                            />
                        </>
                    )}
                </Formik>
            </SC.Header>
            <SC.Title>Data</SC.Title>
            <SC.Text>Lorem ipsum dolor sit amet, consect</SC.Text>
            {
                loading
                ? (
                    <SC.Text>LOADING</SC.Text>
                ) : null
            }
            <SC.ContentContainer>
            <Table
                data={usersList}
            />
            <button onClick={() => console.log(usersList)}>Press me</button>
            <Chart
                data={usersList}
            />

            </SC.ContentContainer>
            <SC.Footer>
                <SC.FooterText>Created by</SC.FooterText>
                <SC.FooterLinkText
                    href='https://github.com/JPLeopoldino'
                    target='_blank'
                >
                    João Pedro Leopoldino
                </SC.FooterLinkText>
            </SC.Footer>
        </SC.Container>
    );
}

export default Home;
