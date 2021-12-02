import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
        </>
    );
};

export default Home;