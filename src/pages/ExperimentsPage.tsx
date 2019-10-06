import React from "react";
import { HorizontalScroll } from "../components/HorizontalScroll";

export function ExperimentsPage() {
    return (
        <div>
            <h1 className="mt-4 mb-3 page-header">Horizontal scroll</h1>
            <p>Could be used to display many cases.</p>
            <HorizontalScroll className="mb-3 cases-scroll">
                {[...Array(16)].map((j, i) => (
                    <div
                        key={i}
                        className="cases-scroll-item"
                    >
                        <img src={require("../images/blue-ice.png")} alt="" />
                    </div>
                ))}
            </HorizontalScroll>
        </div>
    );
}