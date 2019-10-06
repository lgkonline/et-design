import React from "react";

import { icons } from "../Global";
import { Page } from "../components/Page";

export function TypographyPage() {
    return (
        <Page>
            <article className="mb-5">
                <h1 className="mt-4 mb-3 page-header">Icons from Material Design</h1>

                <h1 className="display-1">
                    <span style={{ color: "#f44336" }}><svg xmlns="http://www.w3.org/2000/svg" width="128px" height="128px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" /></svg></span>
                    <span style={{ color: "#2196f3" }}><svg xmlns="http://www.w3.org/2000/svg" width="128px" height="128px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg></span>
                    <span style={{ color: "#ceaa60" }}><svg xmlns="http://www.w3.org/2000/svg" width="128px" height="128px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" /><path fill="none" d="M0 0h24v24H0z" /></svg></span>
                </h1>

                <p>
                    We use the icons from Material Design, which is an open source design system by Google. On menus, for inactive items we use the outlined icon style and for active items the filled style.
                </p>

                <a href="https://material.io/resources/icons" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                    {"Material Design icons"} {icons.open_in_new}
                </a>
            </article>
            <article>
                <h1 className="mt-4 mb-3 page-header">HK Grotesk</h1>

                <h1 className="display-1">Hey! you there, with the hands</h1>
                <h1 className="display-4">Chase red laser dot my slave human didn't give me any food so i pooped on the floor friends are not food i vomit in the bed in the middle of the night</h1>

                <p>
                    Our main font "HK Grotesk" is made by Hanken Design Co and <a href="https://www.fontsquirrel.com/license/hk-grotesk" target="_blank" rel="noopener noreferrer">licensed under SIL</a>.<br />
                    You can download it for free from Font Squirrel.
                    If you want to embed it as a webfont, you can use it from https://lib.lgk.io/webfont.
                </p>

                <a href="https://www.fontsquirrel.com/fonts/hk-grotesk" className="btn btn-outline-secondary mb-3" target="_blank" rel="noopener noreferrer">
                    {"Download font from Font Squirrel"} {icons.open_in_new}
                </a><br />

                <a href="https://lib.lgk.io/webfont/stylesheet.min.css" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                    {"Get webfont"} {icons.open_in_new}
                </a>
            </article>
        </Page >
    );
}