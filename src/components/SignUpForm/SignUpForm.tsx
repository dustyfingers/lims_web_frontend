import React, { useState } from 'react';
import { useFormik } from 'formik';

import Form from '../Form';
import TextInput from '../fields/TextInput';
import customFetch from '../../helpers/customFetch';
import Button from '../Button';

const SignUpForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => handleSignUp(values),
    });

    const handleSignUp = async (values: any) => {
        const { email, password } = values;
        // console.log(email, password, confirmPassword);
        const res = await customFetch({
            url: 'http://localhost:3000/auth/email/sign_up',
            method: 'POST',
            body: {
                email,
                password,
                orgName: 'Dougs Dogs',
            },
        });
        console.log(res);
    };

    // handle case for organization owner or member
    return (
        <Form onSubmit={formik.handleSubmit}>
            <TextInput
                type="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <TextInput
                type="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <TextInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default SignUpForm;
