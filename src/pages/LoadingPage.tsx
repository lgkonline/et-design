import React from "react";

import { Loading } from "../components/Loading";

export function LoadingPage() {
    return (
        <div>
            <h1 className="mt-4 mb-3">Loading demo</h1>

            <Loading />
        </div>
    );
}