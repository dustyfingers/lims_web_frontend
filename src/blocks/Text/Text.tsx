import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const subtextPositions = ['top', 'bottom'] as const;

interface IText {
    lead: string;
    subtext?: string;
    subtextPosition?: typeof subtextPositions[number];
}

const Text: React.FC<IText> = ({ lead, subtext, subtextPosition = 'bottom' }: IText) => {
    return (
        <Box>
            <Container>
                <h2>{lead}</h2>
                <p>{subtext}</p>
            </Container>
        </Box>
    );
};

export default Text;
