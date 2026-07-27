import React, { useEffect, useState } from "react";

import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

function Brokerage() {

    const getTab = () => {

        switch (window.location.hash) {

            case "#tab-currency":
                return "currency";

            case "#tab-commodity":
                return "commodity";

            case "#tab-equities":
            default:
                return "equity";

        }
    };

    const [activeTab, setActiveTab] = useState(getTab());

    useEffect(() => {

        window.location.hash =
            activeTab === "equity"
                ? "tab-equities"
                : activeTab === "currency"
                ? "tab-currency"
                : "tab-commodity";

    }, [activeTab]);

    useEffect(() => {

        const handleHashChange = () => {
            setActiveTab(getTab());
        };

        window.addEventListener("hashchange", handleHashChange);

        return () =>
            window.removeEventListener("hashchange", handleHashChange);

    }, []);

    return (

        <div className="container py-5">

            <div
                className="d-flex border-bottom mb-4 ms-5 me-5"
                style={{ gap: "40px" }}
            >

                <button
                    className="btn p-0 pb-2 rounded-0 shadow-none"
                    onClick={() => setActiveTab("equity")}
                    style={{
                        fontSize: "25px",
                        fontWeight: activeTab === "equity" ? "600" : "400",
                        color: activeTab === "equity" ? "#424242" : "#387ed1",
                        borderBottom:
                            activeTab === "equity"
                                ? "2px solid #387ed1"
                                : "2px solid transparent",
                    }}
                >
                    Equity
                </button>

                <button
                    className="btn p-0 pb-2 rounded-0 shadow-none"
                    onClick={() => setActiveTab("currency")}
                    style={{
                        fontSize: "25px",
                        fontWeight: activeTab === "currency" ? "600" : "400",
                        color: activeTab === "currency" ? "#424242" : "#387ed1",
                        borderBottom:
                            activeTab === "currency"
                                ? "2px solid #387ed1"
                                : "2px solid transparent",
                    }}
                >
                    Currency
                </button>

                <button
                    className="btn p-0 pb-2 rounded-0 shadow-none"
                    onClick={() => setActiveTab("commodity")}
                    style={{
                        fontSize: "25px",
                        fontWeight: activeTab === "commodity" ? "600" : "400",
                        color: activeTab === "commodity" ? "#424242" : "#387ed1",
                        borderBottom:
                            activeTab === "commodity"
                                ? "2px solid #387ed1"
                                : "2px solid transparent",
                    }}
                >
                    Commodity
                </button>

            </div>

            {activeTab === "equity" && <Equity />}
            {activeTab === "currency" && <Currency />}
            {activeTab === "commodity" && <Commodity />}

        </div>

    );
}

export default Brokerage;