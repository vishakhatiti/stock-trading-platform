import React from 'react';

function Pricing() {
    return ( 
        <div className='container pt-3 py-5'>
            <div className='row align-item-start'>

                {/* Column - Part 1 */}
                <div className='col-5 ps-3 pt-5'>
                    <h1 className='mt-5 mb-4'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                {/* Column - Part 2 */}
                <div className='col-7 d-flex' style={{position:"relative",top:"-30px"}}>
                    <div className='d-flex align-items-end' style={{width:"30%"}}>
                        <img src='media/images/pricing-eq.svg' alt='pricing-eq Img' style={{width:"65%"}}></img>
                        <p className='mb-0' style={{marginLeft:"-30px", fontWeight:"200", fontSize:"12px"}}>Free account opening</p>
                    </div> 

                    <div className='d-flex align-items-end' style={{width:"40%"}}>
                        <img src='media/images/pricing-eq.svg' alt='pricing-eq Img' style={{width:"50%"}}></img>
                        <p className='mb-0' style={{marginLeft:"-30px", fontWeight:"200", fontSize:"12px"}}>Free equity delivery and direct mutual funds</p>
                    </div>

                     <div className='d-flex align-items-end' style={{width:"30%"}}>
                        <img src='media/images/other-trades.svg' alt='other-trades Img' style={{width:"65%"}}></img>
                        <p className='mb-0' style={{marginLeft:"-30px", fontWeight:"200", fontSize:"12px"}}>Intraday and F&O</p>
                    </div> 
                </div>

            </div>
        </div>
     );
}

export default Pricing;