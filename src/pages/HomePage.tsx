import React from "react";

import { icons } from "../Global";
import { DownloadDropdown } from "../components/DownloadDropdown";

export function HomePage() {
    return (
        <div>
            <article className="mb-5">
                <h1 className="mt-4 mb-3 page-header">Trademarks</h1>

                <a href="https://adobe.ly/2WfjC68" className="btn btn-lg btn-outline-secondary mb-3" target="_blank" rel="noopener noreferrer">
                    {icons.folder_shared} {"Explore all assets"}
                </a>

                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <img src={require("../images/coin.svg")} className="img-fluid" style={{ maxHeight: "300px" }} alt="T-Coin" />
                        </div>

                        <div className="card-footer">
                            <h5 className="card-title">T-Coin</h5>


                            <DownloadDropdown
                                className="mr-2"
                                icon={icons.format_shapes}
                                label="Download SVG"
                                links={[
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/svg/black.svg",
                                        label: "black.svg"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/svg/gold.svg",
                                        label: "gold.svg"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/svg/white.svg",
                                        label: "white.svg"
                                    }
                                ]}
                            />

                            <DownloadDropdown
                                icon={icons.image}
                                label="Download PNG"
                                links={[
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/png/black.png",
                                        label: "black.png"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/png/gold.png",
                                        label: "gold.png"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/t-coin-icon/png/white.png",
                                        label: "white.png"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="card">

                        <div className="card-body">
                            <img src={require("../images/logo.svg")} className="card-img-top" alt="T-Coin" />
                        </div>

                        <div className="card-body" />

                        <div className="card-footer">
                            <h5 className="card-title">Logo</h5>

                            <DownloadDropdown
                                className="mr-2"
                                icon={icons.format_shapes}
                                label="Download SVG"
                                links={[
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/svg/black.svg",
                                        label: "black.svg"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/svg/gold.svg",
                                        label: "gold.svg"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/svg/white.svg",
                                        label: "white.svg"
                                    }
                                ]}
                            />

                            <DownloadDropdown
                                icon={icons.image}
                                label="Download PNG"
                                links={[
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/png/black.png",
                                        label: "black.png"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/png/gold.png",
                                        label: "gold.png"
                                    },
                                    {
                                        href: "https://assets.adobe.com/public/1b13e2ea-235a-4406-6a09-762001075e51/trademarks/logo/png/white.png",
                                        label: "white.png"
                                    }
                                ]}
                            />
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