import React, { useState } from "react";
import { HashRouter as Router, Route, NavLink, Redirect } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ComponentsPage, LoadingSimulateNetwork, LoadingDemo } from "./pages/ComponentsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { ExperimentsPage } from "./pages/ExperimentsPage";

function App() {
    const [showTabs, setShowTabs] = useState(true);

    const navItems = [
        {
            icon: {
                normal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z" /></svg>,
                active: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            },
            label: "Theming",
            to: "/",
            exact: true
        },
        {
            icon: {
                normal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3zM12 7.98l2.07 5.52H9.93L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z" /></svg>,
                active: <svg baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" /></svg>
            },
            label: "Icons & Font",
            to: "/typography"
        },
        {
            icon: {
                normal: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5m0-2C9.12 2.5 8 3.62 8 5H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4c1.38 0 2.5-1.12 2.5-2.5S20.38 11 19 11V7c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5z" /></svg>,
                active: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" /></svg>
            },
            label: "Components",
            to: "/components"
        },
        {
            icon: {
                normal: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" /></svg>),
                active: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z" /><path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" /></svg>)
            },
            label: "Experiments",
            to: "/experiments"
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
            <div className="App container-fluid svg-current-color">
                <div className="row">
                    <div className="side d-none d-md-block col-md-3 bg-acrylic pt-3 position-fixed">
                        <div className="offset-lg-3">
                            <img src={require("./images/logo.svg")} alt="EasyTrade.bet" className="mx-3 mt-4 mb-3" style={{ maxWidth: "160px" }} />

                            <nav className="et-nav menu-nav white-link-area">
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
                            <h1 className="mt-4 mb-5 display-3">Design System</h1>


                            <Route exact path="/" component={HomePage} />
                            <Route path="/typography" component={TypographyPage} />

                            <Route path="/components" component={ComponentsPage} />
                            <Route path="/components" exact render={() => <Redirect to="/components/network" />} />
                            <Route path="/components/network" component={LoadingSimulateNetwork} />
                            <Route path="/components/demo" component={LoadingDemo} />

                            <Route path="/experiments" component={ExperimentsPage} />
                        </div>
                    </div>
                </div>

                <nav className={"et-nav tabs-nav bg-acrylic d-md-none white-link-area " + (!showTabs ? "hide" : "")}>
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
