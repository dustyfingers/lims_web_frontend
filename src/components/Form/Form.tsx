import React from 'react';

interface Form {
    children: React.ReactNode;
}

const Form: React.FC<Form> = ({ children }: Form) => {
    return <form>{children}</form>;
};

export default Form;
