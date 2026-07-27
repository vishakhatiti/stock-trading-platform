import React from "react";

function Equity() {
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
        <div className="col-2">Equity delivery</div>
        <div className="col-2">Equity intraday</div>
        <div className="col-2">F&amp;O - Futures</div>
        <div className="col-4">F&amp;O - Options</div>
    </div>

    {/* Brokerage */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">Brokerage</div>

        <div className="col-2">
            Zero Brokerage
        </div>

        <div className="col-2">
            0.03% or Rs. 20/executed order whichever is lower
        </div>

        <div className="col-2">
            0.03% or Rs. 20/executed order whichever is lower
        </div>

        <div className="col-4">
            Flat Rs. 20 per executed order
        </div>
    </div>

    {/* STT */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">STT/CTT</div>

        <div className="col-2">
            0.1% on buy &amp; sell
        </div>

        <div className="col-2">
            0.025% on the sell side
        </div>

        <div className="col-2">
            0.05% on the sell side
        </div>

        <div className="col-4">
            <ul className="mb-0 ps-3">
                <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                <li>0.15% on sell side (on premium)</li>
            </ul>
        </div>
    </div>

    {/* Transaction Charges */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">Transaction charges</div>

        <div className="col-2">
            NSE: 0.00307%<br />
            BSE: 0.00375%
        </div>

        <div className="col-2">
            NSE: 0.00307%<br />
            BSE: 0.00375%
        </div>

        <div className="col-2">
            NSE: 0.00183%<br />
            BSE: 0
        </div>

        <div className="col-4">
            NSE: 0.03553% (on premium)<br />
            BSE: 0.0325% (on premium)
        </div>
    </div>

    {/* GST */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">GST</div>

        <div className="col-2">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>

        <div className="col-2">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>

        <div className="col-2">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>

        <div className="col-4">
            18% on (brokerage + SEBI charges + transaction charges)
        </div>
    </div>

    {/* SEBI */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">SEBI charges</div>

        <div className="col-2">₹10 / crore</div>
        <div className="col-2">₹10 / crore</div>
        <div className="col-2">₹10 / crore</div>
        <div className="col-4">₹10 / crore</div>
    </div>

    {/* Stamp */}
    <div className="row m-0 py-2 align-items-center">
        <div className="col-2">Stamp charges</div>

        <div className="col-2">
            0.015% or ₹1500 / crore on buy side
        </div>

        <div className="col-2">
            0.003% or ₹300 / crore on buy side
        </div>

        <div className="col-2">
            0.002% or ₹200 / crore on buy side
        </div>

        <div className="col-4">
            0.003% or ₹300 / crore on buy side
        </div>
    </div>

</div>
    );
}

export default Equity;