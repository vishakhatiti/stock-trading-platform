import React from 'react';

function Commodity() {
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
            Commodity futures
        </div>

        <div className="col-5">
            Commodity options
        </div>
    </div>

    {/* Brokerage */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            Brokerage
        </div>

        <div className="col-5">
            0.03% or Rs. 20/executed order whichever is lower
        </div>

        <div className="col-5">
            ₹20/executed order
        </div>

    </div>

    {/* STT/CTT */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            STT/CTT
        </div>

        <div className="col-5">
            0.01% on sell side (Non-Agri)
        </div>

        <div className="col-5">
            0.05% on sell side
        </div>

    </div>

    {/* Transaction Charges */}
    <div className="row m-0 py-2 align-items-center">

        <div className="col-2">
            Transaction charges
        </div>

        <div className="col-5">
            MCX: 0.0021% <br />
            NSE: 0.0001%
        </div>

        <div className="col-5">
            MCX: 0.0418% <br />
            NSE: 0.001%
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
            Agri: <br />
            ₹1 / crore <br />
            Non-agri: <br />
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
            0.002% or ₹200 / crore on buy side
        </div>

        <div className="col-5">
            0.003% or ₹300 / crore on buy side
        </div>

    </div>

</div>
     );
}

export default Commodity;