import React from 'react';

import Hero from './Hero';
import Brokerage from './Brokerage';
import ChargesTable from './ChargesTable';
import ChargesExplained from './ChargesExplained';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokerage />
        <ChargesTable />
        <ChargesExplained />
        </>
     );
}

export default PricingPage;