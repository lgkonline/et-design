import React, { useState } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { LoadingPage } from "./pages/LoadingPage";
import { CasesPage } from "./pages/CasesPage";

function App() {
    const [showTabs, setShowTabs] = useState(true);

    const navItems = [
        {
            icon: {
                normal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>,
                active: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            },
            label: "Home",
            to: "/",
            exact: true
        },
        {
            icon: {
                normal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3zM12 7.98l2.07 5.52H9.93L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z" /></svg>,
                active: <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" /></svg>
            },
            label: "Loading Demo",
            to: "/loading"
        },
        {
            icon: {
                normal: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" /></svg>),
                active: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" /><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" /></svg>)
            },
            label: "Cases",
            to: "/cases"
        }
    ];

    // let basename;

    // if (!(!process.env.NODE_ENV || process.env.NODE_ENV === "development")) {
    //     basename = "et-design";
    // }

    let previousPosition = window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", (event) => {
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (previousPosition < currentPosition && currentPosition > 2) {
            // scroll down
            setShowTabs(false);
        }
        else if (currentPosition <= window.innerHeight) {
            // scroll up
            setShowTabs(true);
        }
        previousPosition = currentPosition;
    });

    return (
        <Router>
            <div className="App container-fluid">
                <div className="row">
                    <div className="side d-none d-md-block col-md-3 bg-acrylic pt-3 position-fixed">
                        <div className="offset-lg-3">
                            <img src={require("./images/logo.svg")} alt="EasyTrade.bet" className="mx-3 mt-4 mb-3" style={{ maxWidth: "160px" }} />

                            <nav className="et-nav menu-nav svg-current-color white-link-area">
                                {navItems.map((navItem, index) =>
                                    <NavLink key={index} className="et-nav-item" to={navItem.to} exact={navItem.exact}>
                                        <div className="et-nav-item-icon-outlined">
                                            {navItem.icon.normal}
                                        </div>
                                        <div className="et-nav-item-icon-filled">
                                            {navItem.icon.active}
                                        </div>
                                        <div className="et-nav-item-label">{navItem.label}</div>
                                    </NavLink>
                                )}
                            </nav>
                        </div>
                    </div>

                    <div className="offset-md-3 col-md-9 pt-3 bg-main">
                        <div className="main">
                            <h1 className="display-4 mt-4 mb-3">Design System</h1>


                            <Route exact path="/" component={HomePage} />
                            <Route path="/loading" component={LoadingPage} />
                            <Route path="/cases" component={CasesPage} />
                        </div>
                    </div>
                </div>

                <nav className={"et-nav tabs-nav bg-acrylic d-md-none svg-current-color white-link-area " + (!showTabs ? "hide" : "")}>
                    {navItems.map((navItem, index) =>
                        <NavLink key={index} className="et-nav-item" to={navItem.to} exact={navItem.exact}>
                            <div className="et-nav-item-icon-outlined">
                                {navItem.icon.normal}
                            </div>
                            <div className="et-nav-item-icon-filled">
                                {navItem.icon.active}
                            </div>
                            <div className="et-nav-item-label">{navItem.label}</div>
                        </NavLink>
                    )}
                </nav>
            </div>
        </Router>
    );
}

export default App;
