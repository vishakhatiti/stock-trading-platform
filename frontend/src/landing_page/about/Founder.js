import React from 'react';

function Founder() {
    return ( 
        <div className="container  mb-3">
      <div className="row border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div className="row p-5">
        <div className="col-6 p-5 text-center" style={{lineHeight:"2"}}>
          <img src='media/images/nithinkamath.jpg' style={{borderRadius:"100%", width:"60%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-5 text-muted'>Nithin Kamath</h1>
          <p className='text-muted'>Founder, CEO</p>
        </div>
        <div className="col-6 text-muted fs-6" style={{lineHeight:"2", fontSize:"1.2em"}}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on<a href=""style={{textDecoration:"none"}}> HomePage </a>/<a href=""style={{textDecoration:"none"}}> TradingQnA </a>/<a href=""style={{textDecoration:"none"}}> Twitter</a></p>
        </div>
      </div>
    </div>
     );
}

export default Founder;