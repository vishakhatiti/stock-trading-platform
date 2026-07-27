import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f7f7f7",
        padding: "42px 60px",
        minHeight: "215px",
      }}
    >
      {/* Top Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1
          className="m-0 fw-bold"
          style={{
            fontSize: "35px",
            color: "#424242",
            letterSpacing: "-0.5px",
          }}
        >
          Support Portal
        </h1>

        <button
          className="btn"
          style={{
            backgroundColor: "#387ed1",
            color: "#fff",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "600",
            padding: "10px 18px",
            border: "none",
          }}
        >
          My tickets
        </button>
      </div>

      {/* Search Box */}
      <div className="input-group">
        <span
          className="input-group-text bg-white border-end-0"
          style={{
            borderColor: "#dee2e6",
            paddingLeft: "22px",
            paddingRight: "8px",
          }}
        >
          <i
            className="fa fa-search"
            style={{ color: "#666", fontSize: "18px" }}
          ></i>
        </span>

        <input
          type="text"
          className="form-control border-start-0 shadow-none"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          style={{
            height: "60px",
            fontSize: "16px",
            color: "#424242",
            borderColor: "#dee2e6",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;