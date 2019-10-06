import React from "react";

import { icons } from "../Global";

export function HomePage() {
    return (
        <div>
            <article className="mb-5">
                <h1 className="mt-4 mb-3 page-header">Trademarks</h1>

                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <img src={require("../images/coin.svg")} className="img-fluid" style={{ maxHeight: "300px" }} alt="T-Coin" />
                        </div>

                        <div className="card-footer">
                            <h5 className="card-title">T-Coin</h5>
                            <a href={require("../images/coin.svg")} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                                {icons.cloud_download_outlined} {"White SVG"}
                            </a>
                        </div>
                    </div>
                    <div className="card">

                        <div className="card-body">
                            <img src={require("../images/logo.svg")} className="card-img-top" alt="T-Coin" />
                        </div>

                        <div className="card-body" />

                        <div className="card-footer">
                            <h5 className="card-title">Logo</h5>
                            <a href={require("../images/logo.svg")} className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                                {icons.cloud_download_outlined} {"White SVG"}
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            <article className="mb-5">
                <h1 className="mt-4 mb-3 page-header">Web Theme (Bootstrap)</h1>
                <p>
                    We use <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> with a custom theme for our sites. The theme is saved at Colorganize.
                </p>
                <a href="https://colorganize.com/webTheme/52" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                    {"Web Theme on Colorganize"} {icons.open_in_new}
                </a>
            </article>

            <article>
                <h1 className="mt-4 mb-3 page-header">Color palette</h1>
                <div className="embed-responsive" style={{ height: "680px" }}>
                    <iframe className="embed-responsive-item" title="Colorganize" src="https://colorganize.com/palette/84/widget" />
                </div>
            </article>
        </div>
    );
}