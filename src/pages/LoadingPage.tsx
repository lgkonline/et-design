import React from "react";
import { NavLink } from "react-router-dom";

import { Loading } from "../components/Loading";
import { Page } from "../components/Page";
import { fetchData, putSuccess } from "../Global";

export function LoadingPage({ children }: { children: any }) {
    return (
        <div>
            <h1 className="mt-4 mb-3">Loading</h1>

            <nav className="et-nav page-nav white-link-area">
                <NavLink to="/loading/network" className="et-nav-item">Network Simulation</NavLink>
                <NavLink to="/loading/demo" className="et-nav-item">Animation Demo</NavLink>
            </nav>

            {children}
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