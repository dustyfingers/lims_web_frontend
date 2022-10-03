import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const buttonTypes = ['submit', 'button', 'reset'] as const;

interface IButton {
    type?: typeof buttonTypes[number];
    onClick?: any;
    children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ type = 'button', children, onClick }: IButton) => {
    return (
        <ChakraButton type={type} onClick={onClick}>
            {children}
        </ChakraButton>
    );
};

export default Button;
