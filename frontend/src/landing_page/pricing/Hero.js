import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center'>
                <h1 className='mt-5 fs-3'>Charges</h1>
                <h3 className='text-muted mt-4 fs-5' style={{marginBottom:"-25px"}}>List of all charges and taxes</h3>
            </div>
             <div className='row p-5' style={{marginBottom:"-50px"}}>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricing-eq.svg' style={{width:"70%"}}/>
                    <h3 className='mb-3 fs-4'>Free equity delivery</h3>
                    <p className='mt-2' style={{fontSize:"15px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4 text-center' style={{marginTop:"20px"}}>
                    <img src='media/images/Free direct MF.svg' style={{width:"60%"}}/>
                    <h3 className='mb-3 fs-4'>Intraday and F&O trades</h3>
                    <p className='mt-2'style={{fontSize:"15px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricing-eq.svg' style={{width:"70%"}}/>
                    <h3 className='mb-3 fs-4'>Free direct MF</h3>
                    <p className='mt-2'style={{fontSize:"15px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;