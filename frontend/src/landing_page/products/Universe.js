import React from 'react';

function Universe() {
    return ( 
        <div className='container p-5'>
            <h1 className='text-center mt-5 fs-4'>The Zerodha Universe</h1>
            <p className='text-center mt-4 fs-5'>Extend your trading and investment experience even further with our partner platforms.</p>

            <div className='row p-3'>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/zerodhaFundhouse.png' alt='zerodhaFundhouse Img' style={{width:"80%"}}/>
                    <p className='text-muted mt-3' style={{fontSize:"12px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/sensibullLogo.svg' alt='sensibullLogo Img' style={{width:"80%"}}/>
                    <p className='text-muted mt-3' style={{fontSize:"12px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/tijori.svg' alt='tijori Img' style={{width:"60%", marginTop:"-8px"}}/>
                    <p className='text-muted mt-2' style={{fontSize:"12px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/streakLogo.png' alt='streakLogo Img' style={{width:"80%"}}/>
                    <p className='text-muted mt-2 p-3' style={{fontSize:"12px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/smallcaseLogo.png' alt='smallcaseLogo Img' style={{width:"80%"}}/>
                    <p className='text-muted mt-2 p-3' style={{fontSize:"12px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/dittoLogo.png' alt='dittoLogo Img' style={{width:"60%"}}/>
                    <p className='text-muted mt-2 p-3' style={{fontSize:"12px"}}>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free</p>
                </div>
            </div>
            <div className='text-center'>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;