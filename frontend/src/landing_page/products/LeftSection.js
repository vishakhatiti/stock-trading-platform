import React from "react";

function LeftSection({
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
  <div className="container mb-5">
    <div className="row p-3">
        <div className="col-7 p-5">
            <img src={imageURL} style={{marginRight:"50px", width:"95%", ...imageStyle}}/>
        </div>
        <div className="col-5 p-5 mt-3" style={{lineHeight:"1.9"}}>
            <h1 className="mb-3 fs-3">{productName}</h1>
            <p>{productDescription}</p>
            <div className="mt-3 mb-4">
                <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"50px", textDecoration:"None"}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
    
            <div className="mt-3">
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft:"30px"}}/></a>
            </div>
        </div>
    </div>
  </div>
  )
}


export default LeftSection;
