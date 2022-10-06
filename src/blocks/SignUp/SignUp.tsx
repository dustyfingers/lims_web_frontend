import React from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import SignUpForm from '../../components/SignUpForm';

const SignUp: React.FC = () => {
    return (
        <Box height={'100vh'}>
            <Flex height={'100%'} alignItems={'center'}>
                <Container>
                    <Heading>Sign Up to SpiderLIMS</Heading>
                    <SignUpForm />
                </Container>
            </Flex>
        </Box>
    );
};

export default SignUp;
