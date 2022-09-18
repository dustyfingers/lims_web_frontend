import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
    return (
        <div>
            <p>Manage your laboratory in the safety of the cloud.</p>
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
