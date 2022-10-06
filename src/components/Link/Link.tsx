import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface ILink {
    to: string;
    children: React.ReactNode;
}

const Link: React.FC<ILink> = ({ to, children }: ILink) => {
    return (
        <ChakraLink as={RouterLink} to={to}>
            {children}
        </ChakraLink>
    );
};

export default Link;
