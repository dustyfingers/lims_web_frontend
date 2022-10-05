import React from 'react';
import { Link } from 'react-router-dom';

import LandingHero from '../../blocks/LandingHero';

const Landing: React.FC = () => {
    return (
        <div>
            <LandingHero />
            <Link to="/sign_up">
                <button>Sign Up</button>
            </Link>
            <Link to="/log_in">
                <button>Log In</button>
            </Link>
        </div>
    );
};

export default Landing;
