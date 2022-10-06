import React from 'react';

// this should list a benefit, some details about it
// and a cool image

interface IBenefit {
    name: string;
}

const Benefit: React.FC<IBenefit> = ({ name }: IBenefit) => {
    return <div>{name}</div>;
};

export default Benefit;
