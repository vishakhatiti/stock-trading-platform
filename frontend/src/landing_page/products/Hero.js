import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
           <div className='row text-center border-bottom'>
             <h1 className='mt-4 fs-3'>Zerodha Products</h1>
            <h3 className='text-muted mt-2 mb-4 fs-5'>Sleek, modern, and intuitive trading platforms</h3>
            <p style={{marginBottom:"100px"}}>Check out  <a href='' style={{textDecoration:"none,"}}>our investment offerings {" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
           </div>
        </div>
     );
}

export default Hero;