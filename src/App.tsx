import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import AppRoutes from './AppRoutes';

const App: React.FC = () => {
    return (
        <div>
            <ChakraProvider>
                <AppRoutes />
            </ChakraProvider>
        </div>
    );
};

export default App;
