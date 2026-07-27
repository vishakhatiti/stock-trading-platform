import React from 'react';

function Currency() {
    return ( 
        <div
    className="border rounded m-5"
    style={{
        fontSize: "13px",
        color: "#424242",
        borderColor: "#dee2e6"
    }}
>

    {/* Header */}
    <div
        className="row m-0 border-bottom align-items-center fw-medium text-center"
        style={{ minHeight: "36px" }}
    >
        <div className="col-2"></div>
        <div className="col-5">
            Currency futures
        </div>

        <div className="col-5">
            Currency options
        </div>
    </div>

    {/* Brokerage */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            Brokerage
        </div>

        <div className="col-5">
            0.03% or ₹20/executed order whichever is lower
        </div>

        <div className="col-5">
            ₹20/executed order
        </div>

    </div>

    {/* STT */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            STT/CTT
        </div>

        <div className="col-5">
            No STT
        </div>

        <div className="col-5">
            No STT
        </div>

    </div>

    {/* Transaction Charges */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            Transaction charges
        </div>

        <div className="col-5">
            NSE: 0.00035% <br />
            BSE: 0.00045%
        </div>

        <div className="col-5">
            NSE: 0.0311% <br />
            BSE: 0.001%
        </div>

    </div>

    {/* GST */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            GST
        </div>

        <div className="col-5">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>

        <div className="col-5">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>

    </div>

    {/* SEBI Charges */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            SEBI charges
        </div>

        <div className="col-5">
            ₹10 / crore
        </div>

        <div className="col-5">
            ₹10 / crore
        </div>

    </div>

    {/* Stamp Charges */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            Stamp charges
        </div>

        <div className="col-5">
            0.0001% or ₹10 / crore on buy side
        </div>

        <div className="col-5">
            0.0001% or ₹10 / crore on buy side
        </div>

    </div>

</div>
     );
}

export default Currency;