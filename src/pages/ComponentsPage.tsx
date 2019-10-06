import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Loading } from "../components/Loading";
import { Page } from "../components/Page";
import { fetchData, putSuccess } from "../Global";
import { Status } from "../components/Status";

export function ComponentsPage({ children }: { children: any }) {
    const [showStatus, setShowStatus] = useState(false);

    return (
        <div>
            <article className="mb-5">
                <h1 className="mt-4 mb-3 page-header">Status alerts</h1>

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

                <button className="btn btn-outline-secondary mt-3" onClick={putSuccess}>Show success</button>

                {showStatus &&
                    <Status
                        type="danger"
                        title="I don't feel so good 🤢"
                        message="Insert fancy error message here..."
                        onClose={() => setShowStatus(false)}
                    />
                }
            </article>

            <article>
                <h1 className="mt-4 mb-3 page-header">Loading</h1>

                <nav className="et-nav page-nav white-link-area">
                    <NavLink to="/components/network" className="et-nav-item">Network Simulation</NavLink>
                    <NavLink to="/components/demo" className="et-nav-item">Animation Demo</NavLink>
                </nav>

                {children}
            </article>
        </div>
    );
}

export function LoadingSimulateNetwork() {
    const fetchDataSuccess = () => {
        fetchData("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => {
                console.log("Got data");
                console.log(res);

                putSuccess();
            });
    };

    const fetchDataFail = () => {
        fetchData("https://jsonplaceholder.typicode.com/todoss/1")
            .then(res => {
                // Will fail
                console.log(res);
            });
    };

    return (
        <Page>
            <button className="btn btn-outline-secondary mt-4" onClick={fetchDataSuccess}>Fetch data</button>
            <button className="btn btn-outline-secondary ml-2 mt-4" onClick={fetchDataFail}>Fetch data fails</button>
        </Page>
    );
}

export function LoadingDemo() {
    return (
        <Loading />
    );
}