import React from "react";

import { Loading } from "../components/Loading";

export function Loading2Page() {
    return (
        <div>
            <h1 className="mt-4 mb-3">Loading demo 2</h1>

            <Loading animation="2" />
        </div>
    );
}