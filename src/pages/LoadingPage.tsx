import React from "react";
import { NavLink } from "react-router-dom";

import { Loading } from "../components/Loading";

export function LoadingPage({ children }: { children: any }) {
    return (
        <div>
            <h1 className="mt-4 mb-3">Loading</h1>

            <nav className="et-nav page-nav white-link-area">
                <NavLink to="/loading/1" className="et-nav-item">Animation 1</NavLink>
                <NavLink to="/loading/2" className="et-nav-item">Animation 2</NavLink>
            </nav>

            {children}
        </div>
    );
}

export function LoadingDemo1() {
    return (
        <Loading animation="1" />
    );
}

export function LoadingDemo2() {
    return (
        <Loading animation="2" />
    );
}