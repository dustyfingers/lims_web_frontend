import React from 'react';
import { Box, Button, ButtonGroup, Container, Flex, Heading } from '@chakra-ui/react';

import Link from '../Link';

import './TopNav.scss';

const TopNav: React.FC = () => {
    return (
        <Box className="TopNav">
            <Container maxWidth="container.xl">
                <Flex alignItems="center" justifyContent="space-between">
                    <Link to="/">
                        <Heading>SpiderLIMS</Heading>
                    </Link>

                    {/* TODO: need menu for mobile */}
                    <ButtonGroup gap="2">
                        <Link to="/sign_up">
                            <Button variant="ghost">Sign Up</Button>
                        </Link>
                        <Link to="/log_in">
                            <Button variant="ghost">Log In</Button>
                        </Link>
                    </ButtonGroup>
                </Flex>
            </Container>
        </Box>
    );
};

export default TopNav;
