import React from "react";

export function StatusPage() {
    return (
        <div>
            <h1 className="mt-4 mb-3">Status alerts</h1>

            <div className="status alert alert-danger">
                Something went wrong
            </div>
        </div>
    );
}