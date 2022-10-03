import React from 'react';

interface IForm {
    children: React.ReactNode;
    onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

const Form: React.FC<IForm> = ({ children, onSubmit }: IForm) => {
    return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
