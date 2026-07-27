import React from 'react';

function Team() {
    return ( 
        <div className="container p-5 mb-3">
            <div className='row p-5 text-muted' style={{marginTop:"-110px", marginBottom:"-55px"}}>
                <div className='col p-5 text-center'>
                    <img src='media/images/Nikhil.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Nikhil Kamath</h1>
          <p className='fs-20'>Co-founder & CFO</p>
                </div>

                <div className='col p-5 text-center'>
                    <img src='media/images/Kailash.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Dr. Kailash Nadh</h1>
          <p className='fs-20'>CTO</p>
                </div>

                <div className='col p-5 text-center'>
                    <img src='media/images/Venu.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Venu Madhav</h1>
          <p className='fs-20'>COO</p>
                </div>
            </div>

            <div className='row p-5 text-muted' style={{marginTop:"-8px", marginBottom:"-55px"}}>
                <div className='col p-5 text-center'>
                    <img src='media/images/Seema.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Seema Patil</h1>
          <p className='fs-20'>Director</p>
                </div>

                <div className='col p-5 text-center'>
                    <img src='media/images/karthik.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Karthik Rangappa</h1>
          <p className='fs-20'>Chief of Education</p>
                </div>

                <div className='col p-5 text-center'>
                    <img src='media/images/Austin.jpg' style={{borderRadius:"100%", width:"80%", marginBottom:"20px", marginTop:"-40px"}}/>
          <h1 className='fs-6'>Austin Prakesh</h1>
          <p className='fs-20'>Director Strategy</p>
                </div>
            </div>
        
        </div>
     );
}

export default Team;