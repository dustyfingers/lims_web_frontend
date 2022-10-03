import React from 'react';

import Form from '../Form';
import TextInput from '../fields/TextInput';

const SignUpForm: React.FC = () => {
    // handle case for organization owner or member
    return (
        <Form>
            <TextInput type="email" label="Email" />
            <TextInput type="password" label="Password" />
            <TextInput type="password" label="Confirm Password" />
        </Form>
    );
};

export default SignUpForm;
