import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  imageStyle,
}) {
    return (
  <div className="container">
    <div className="row">
        
        <div className="col-5 p-5 mt-5" style={{lineHeight:"1.9"}}>
            <h1 className="mb-3 fs-3">{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3 mb-4">
                <a href={learnMore} style={{textDecoration:"None"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            </div>

            <div className="col-7 p-3">
            <img src={imageURL} style={{...imageStyle}}/>
        </div>

        
    </div>
  </div>
  )
}


export default RightSection;
