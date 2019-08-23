import React, { useState } from "react";

import { Status } from "../components/Status";

export function StatusPage() {
    const [showStatus, setShowStatus] = useState(true);

    return (
        <div>
            <h1 className="mt-4 mb-3">Status alerts</h1>

            <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    checked={showStatus}
                    onChange={() => setShowStatus(!showStatus)}
                />

                <label className="custom-control-label" htmlFor="customCheck1">Show status</label>
            </div>

            {showStatus &&
                <Status
                    type="danger"
                    title="I don't feel so good 🤢"
                    message="Insert fancy error message here..."
                    onClose={() => setShowStatus(false)}
                />
            }
        </div>
    );
}