import React, { useState } from "react";

function CreateTicket() {
  const [open, setOpen] = useState(0);

  const sections = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-o",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-ticket",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-inr",
      items: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      icon: "fa-bullseye",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-circle-thin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h2
        className="mb-4"
        style={{
          color: "#424242",
          fontWeight: 500,
        }}
      >
        To create a ticket, select a relevant topic
      </h2>

      <div className="row">

        {/* LEFT SIDE */}

        <div className="col-lg-8">

          {sections.map((section, index) => (

            <div
              key={index}
              className="border mb-4"
              style={{
                borderColor: "#e6e6e6",
              }}
            >

              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  cursor: "pointer",
                  height: "60px",
                }}
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
              >

                <div className="d-flex align-items-center">

                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#fafafa",
                      borderRight: "1px solid #eee",
                    }}
                  >
                    <i
                      className={`fa ${section.icon}`}
                      style={{
                        color: "#387ed1",
                        fontSize: "20px",
                      }}
                    />
                  </div>

                  <h5
                    className="mb-0 ms-3"
                    style={{
                      color: "#424242",
                      fontWeight: 400,
                    }}
                  >
                    {section.title}
                  </h5>

                </div>

                <div className="me-4">

                  <i
                    className={`fa ${
                      open === index
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                    style={{
                      color: "#387ed1",
                      fontSize: "18px",
                    }}
                  />

                </div>

              </div>

              {open === index && (

                <div
                  style={{
                    padding: "18px 30px",
                    borderTop: "1px solid #eee",
                  }}
                >

                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "22px",
                    }}
                  >

                    {section.items.map((item, i) => (

                      <li
                        key={i}
                        style={{
                          marginBottom: "18px",
                          color: "#387ed1",
                        }}
                      >
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          style={{
                            textDecoration: "none",
                            color: "#387ed1",
                            fontSize: "16px",
                          }}
                        >
                          {item}
                        </a>
                      </li>

                    ))}

                  </ul>

                </div>

              )}

            </div>

          ))}

        </div>

        {/* RIGHT SIDE */}

        <div className="col-lg-4">

          <div
            style={{
              background: "#fff7eb",
              borderLeft: "6px solid #ff9800",
              padding: "20px",
              marginBottom: "20px",
            }}
          >

            <ul style={{ marginBottom: 0 }}>
              <li className="mb-3">
                <a href="/" onClick={(e)=>e.preventDefault()}>
                  Adjustment of F&O contracts of ULTRACEMCO due to dividend
                </a>
              </li>

              <li>
                <a href="/" onClick={(e)=>e.preventDefault()}>
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>

          </div>

                    <div
            className="border"
            style={{
              borderColor: "#e6e6e6",
            }}
          >
            <div
              style={{
                background: "#f7f7f7",
                padding: "14px 20px",
                borderBottom: "1px solid #e6e6e6",
              }}
            >
              <h5
                className="mb-0"
                style={{
                  color: "#424242",
                  fontWeight: 500,
                }}
              >
                Quick links
              </h5>
            </div>

            <div className="list-group list-group-flush">

              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item"
                style={{
                  color: "#387ed1",
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                1. Track account opening
              </a>

              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item"
                style={{
                  color: "#387ed1",
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                2. Track segment activation
              </a>

              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item"
                style={{
                  color: "#387ed1",
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                3. Intraday margins
              </a>

              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item"
                style={{
                  color: "#387ed1",
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                4. Kite user manual
              </a>

              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="list-group-item"
                style={{
                  color: "#387ed1",
                  padding: "14px 20px",
                  textDecoration: "none",
                }}
              >
                5. Learn how to create a ticket
              </a>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;