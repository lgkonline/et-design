import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

import { Loading } from "../components/Loading";
import { Status } from "../components/Status";

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
    const putStatus = (type: string, title: string, message: string) => {
        const domElement: Element = document.getElementById("status") as Element;
        ReactDOM.render(<Status
            type={type}
            title={title}
            message={message}
            onClose={() => ReactDOM.unmountComponentAtNode(domElement)}
        />, domElement);
    };

    const startLoading = () => {
        ReactDOM.render(<Loading />, document.getElementById("loading"));
    };

    const finishLoading = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("loading") as Element);
    };

    const fetchData = () => {
        startLoading();

        setTimeout(() => {
            finishLoading();
        }, 2000);

        fetch("https://jsonplaceholder.typicode.com/todods/1")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log("Error");
                putStatus("danger", "Something went wrong", "Try not to cry");
            });
    };

    const fetchDataFail = () => {
        putStatus("danger", "Oh no 🙃", "You did it! You broke our app");
    };

    return (
        <div>
            <button className="btn btn-outline-primary mt-3" onClick={fetchData}>Fetch data</button>
            <button className="btn btn-outline-primary ml-2 mt-3" onClick={fetchDataFail}>Fetch data fails</button>

            <div id="loading" />
            <div id="status" />
        </div>
    );
}

export function LoadingDemo() {
    return (
        <Loading />
    );
}