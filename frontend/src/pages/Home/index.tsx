import React, { useCallback, useEffect, useState } from 'react';
import { message } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as SC from './styles';

import { useUser } from '../../hooks/user';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Table from '../../components/Table';
import Chart from "../../components/Chart";
import LoadingIndicator from "../../components/LoadingIndicator";

interface IUserProps {
    firstName: string;
    lastName: string;
    participation: number | null;
}

const Home: React.FC = () => {

    const { 
        findAllUsers,
        usersList,
        loading,
        createUser,
    } = useUser();

    const [submitDelay, setSubmitDelay] = useState(false);

    const handleCreateUser = useCallback(async (data: IUserProps) => {
        try {
            setSubmitDelay(true);
            const schema = Yup.object().shape({
                firstName: Yup.string().required('O nome é obrigatório'),
                lastName: Yup.string().required('O nome é obrigatório'),
                participation: Yup.number()
                .nullable(true)
                .min(0)
                .max(100)
                .required('A participation é obrigatória'),
            })
            await schema.validate(data, {
                abortEarly: false,
              });
            
            await createUser({
                firstName: data.firstName,
                lastName: data.lastName,
                participation: data.participation,
            });
            findAllUsers();
            setSubmitDelay(false);
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error);
      
                const {
                  firstName: errFirstName,
                  lastName: errLastName,
                  participation: errParticipation,
                } = errors;
      
                if (errFirstName) message.warning(errFirstName);
                if (errLastName) message.warning(errLastName);
                if (errParticipation) message.warning(errParticipation);

                setSubmitDelay(false);
              }
        }
    }, [createUser])

    useEffect(() => {
        findAllUsers();
    }, [findAllUsers]);

    return (
        <SC.Container>
            <SC.Header>
                <Formik
                    onSubmit={(values, { resetForm }) => {
                        handleCreateUser(values);
                        resetForm();
                    }}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        participation: null,
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <>
                            <Input 
                                label="First name"
                                onChange={handleChange('firstName')}
                                value={values.firstName}
                            />
                            <Input 
                                label="Last name"
                                onChange={handleChange('lastName')}
                                value={values.lastName}
                            />
                            <Input 
                                label="Participation"
                                onChange={handleChange('participation')}
                                value={values.participation ? values.participation : ''}
                                type="number"
                                min={0}
                                max={100}
                            />
                            <Button 
                                onClick={handleSubmit}
                                disabled={submitDelay}
                                label="Send"
                            />
                        </>
                    )}
                </Formik>
            </SC.Header>
            <SC.Body>
                {
                    loading
                    ? (
                        <LoadingIndicator
                            size={84}
                            color="blue"
                        />
                    ) : (
                        <>
                            <SC.Title>Data</SC.Title>
                            <SC.Text>Lorem ipsum dolor sit amet, consect</SC.Text>
                            <SC.ContentContainer>
                                {
                                    usersList.length
                                    ? (
                                        <>
                                            <Table
                                                data={usersList}
                                            />
                                            <Chart
                                                data={usersList}
                                            />
                                        </>
                                    ) : (
                                        <SC.ErrorText>No registered user</SC.ErrorText>
                                    )
                                }
                                
                            </SC.ContentContainer>
                        </>
                )
                }
            </SC.Body>
            <SC.Footer>
                <SC.FooterText>Created by</SC.FooterText>
                <SC.FooterLinkText
                    href='https://github.com/JPLeopoldino/desafio-t10'
                    target='_blank'
                >
                    João Pedro Leopoldino
                </SC.FooterLinkText>
            </SC.Footer>
        </SC.Container>
    );
}

export default Home;
