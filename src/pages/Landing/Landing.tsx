import React from 'react';
import { VStack, StackDivider } from '@chakra-ui/react';

import content from '../../content/landing.json';

import TopNav from '../../components/TopNav';
import LandingHero from '../../blocks/LandingHero';
import TextBlock from '../../blocks/Text';
import BenefitBlock from '../../blocks/Benefit';

const Landing: React.FC = () => {
    return (
        <>
            <TopNav />
            <LandingHero />
            <TextBlock lead={content.spiderLIMSAbout.lead} />
            <VStack divider={<StackDivider borderColor={'gray.200'} />}>
                {content.benefits.map(benefit => (
                    <BenefitBlock name={benefit.name} />
                ))}
            </VStack>
        </>
    );
};

export default Landing;
