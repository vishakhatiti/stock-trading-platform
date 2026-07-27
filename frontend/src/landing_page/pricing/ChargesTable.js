import React from "react";

function ChargesTable() {
  return (
    <div className="container py-4 p-5" style={{marginTop:"-40px"}}>
      {/* ====================== DIV 1 ====================== */}
      <div className="mb-5 p-3">
        <h2
          className="fw-normal mb-4"
          style={{
            fontSize: "28px",
            color: "#2c3e50",
          }}
        >
          Charges for account opening
        </h2>

        <div
          className="border rounded"
          style={{
            borderColor: "#dee2e6",
          }}
        >
          {/* Header */}
          <div
            className="row m-0 border-bottom align-items-center"
            style={{
              minHeight: "54px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#444",
            }}
          >
            <div className="col-8 ps-3">Type of account</div>

            <div className="col-4">Charges</div>
          </div>

          {/* Row 1 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-8 ps-3">Individual account</div>

            <div className="col-4">
              <span
                className="badge bg-success px-2 py-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: ".3px",
                }}
              >
                FREE
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-8 ps-3">Minor account</div>

            <div className="col-4">
              <span
                className="badge bg-success px-2 py-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: ".3px",
                }}
              >
                FREE
              </span>
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-8 ps-3">NRI account</div>

            <div className="col-4">₹ 500</div>
          </div>

          {/* Row 4 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-8 ps-3">HUF account</div>

            <div className="col-4 d-flex align-items-center">
              <span
                className="badge bg-success px-2 py-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: ".3px",
                }}
              >
                FREE
              </span>

              <span
                className="ms-2"
                style={{
                  fontSize: "15px",
                }}
              >
                (online) / ₹ 500 (offline)
              </span>
            </div>
          </div>

          {/* Row 5 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-8 ps-3">
              Partnership, LLP, and Corporate accounts (offline only)
            </div>

            <div className="col-4">₹ 500</div>
          </div>
        </div>
      </div>

      {/* ====================== DIV 2 ====================== */}
      <div className="mb-4 p-3">
        <h2
          className="fw-normal mb-3"
          style={{
            fontSize: "28px",
            color: "#2c3e50",
          }}
        >
          Demat AMC (Annual Maintenance Charge)
        </h2>

        {/* Free Badge */}
        <div className="mb-4">
          <div
            className="d-inline-flex align-items-center px-3"
            style={{
              height: "42px",
              background: "#f5f9ff",
              borderLeft: "4px solid #387ed1",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                color: "#2c3e50",
              }}
            >
              Free for first year*
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="mb-3"
          style={{
            fontSize: "15px",
            color: "#424242",
          }}
        >
          From second year onwards, for BSDA accounts:
        </p>

        {/* Charges Box */}
        <div
          className="border rounded"
          style={{
            borderColor: "#dee2e6",
          }}
        >
          {/* Header */}
          <div
            className="row m-0 border-bottom align-items-center"
            style={{
              minHeight: "54px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#444",
            }}
          >
            <div className="col-4 ps-3">Value of holdings</div>

            <div className="col-8">AMC</div>
          </div>

          {/* Row 1 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-4 ps-3">Up to ₹4 lakh</div>

            <div className="col-8">
              <span
                className="badge bg-success px-2 py-2"
                style={{
                  fontSize: "11px",
                  letterSpacing: ".3px",
                }}
              >
                FREE
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-4 ps-3">₹4 lakh – ₹10 lakh</div>

            <div className="col-8">
              ₹100 per year + 18% GST, charged quarterly
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-4 ps-3">Above ₹10 lakh</div>

            <div className="col-8">
              ₹300 per year + 18% GST, charged quarterly
            </div>
          </div>
        </div>

        {/* Notes */}
        <p
          className="mt-3 mb-3"
          style={{
            fontSize: "14px",
            color: "#424242",
            lineHeight: "26px",
          }}
        >
          For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
          holdings value, charged quarterly.
        </p>

        <p
          className="mb-3"
          style={{
            fontSize: "14px",
            color: "#424242",
            lineHeight: "26px",
          }}
        >
          To learn more about BSDA,
          <a
            href="/"
            className="text-decoration-none ms-1"
            style={{ color: "#387ed1" }}
          >
            click here.
          </a>{" "}
          To learn more about AMC,
          <a
            href="/"
            className="text-decoration-none ms-1"
            style={{ color: "#387ed1" }}
          >
            click here.
          </a>
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#424242",
          }}
        >
          *Resident individual accounts only.
        </p>
      </div>

      {/* ====================== DIV 3 ====================== */}
      <div className="mb-5 p-3">
        <h2
          className="fw-normal mb-4"
          style={{
            fontSize: "28px",
            color: "#2c3e50",
          }}
        >
          Charges for optional value added services
        </h2>

        <div
          className="border rounded"
          style={{
            borderColor: "#dee2e6",
          }}
        >
          {/* Header */}
          <div
            className="row m-0 border-bottom align-items-center"
            style={{
              minHeight: "54px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#444",
            }}
          >
            <div className="col-3 ps-3">Service</div>

            <div className="col-4">Billing Frequency</div>

            <div className="col-5">Charges</div>
          </div>

          {/* Row 1 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-3 ps-3">Tickertape</div>

            <div className="col-4">Monthly / Quarterly / Annual</div>

            <div className="col-5">Free: 0 | Pro: 249/699/2399</div>
          </div>

          {/* Row 2 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-3 ps-3">Smallcase</div>

            <div className="col-4">Per transaction</div>

            <div className="col-5">Buy &amp; Invest More: 100 | SIP: 10</div>
          </div>

          {/* Row 3 */}
          <div
            className="row m-0 align-items-center"
            style={{
              minHeight: "52px",
              fontSize: "15px",
            }}
          >
            <div className="col-3 ps-3">Kite Connect</div>

            <div className="col-4">Monthly</div>

            <div className="col-5">Connect: 500 | Personal: Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargesTable;
