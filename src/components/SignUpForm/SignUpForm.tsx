import React, { useState } from 'react';

import Form from '../Form';
import TextInput from '../fields/TextInput';
import customFetch from '../../helpers/customFetch';
import Button from '../Button';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSignUp = async (evt: React.FormEvent) => {
        console.log(email, password, confirmPassword);
        evt.preventDefault();
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
        <Form>
            <TextInput
                type="email"
                label="Email"
                value={email}
                onChange={(evt: any) => setEmail(evt.target.value)}
            />
            <TextInput
                type="password"
                label="Password"
                value={password}
                onChange={(evt: any) => setPassword(evt.target.value)}
            />
            <TextInput
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(evt: any) => setConfirmPassword(evt.target.value)}
            />
            <Button type="submit" onClick={handleSignUp}>
                Submit
            </Button>
        </Form>
    );
};

export default SignUpForm;
