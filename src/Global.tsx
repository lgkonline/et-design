import React from "react";
import ReactDOM from "react-dom";

import { Status } from "./components/Status";
import { Loading } from "./components/Loading";
import { Success } from "./components/Success";

export const putStatus = (type: string, title: string, message: string) => {
    const domElement: Element = document.getElementById("status") as Element;
    ReactDOM.render(<Status
        type={type}
        title={title}
        message={message}
        onClose={() => ReactDOM.unmountComponentAtNode(domElement)}
    />, domElement);
};

export const putSuccess = () => {
    const domElement: Element = document.getElementById("success") as Element;
    ReactDOM.render(<Success
        onClose={() => ReactDOM.unmountComponentAtNode(domElement)}
    />, domElement);
};

export const showLoading = () => {
    ReactDOM.render(<Loading />, document.getElementById("loading"));
};

export const hideLoading = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("loading") as Element);
};

export const fetchData = (url: string) => {
    showLoading();

    return fetch(url)
        .then(res => {
            hideLoading();
            if (!res.ok) throw res;
            return res.json();
        })
        .catch(error => {
            console.log(error);
            const title = `${error.status} - ${error.statusText || "Oh no 😭"}`;
            putStatus("danger", title, "Maybe you should contact one of the team.");
        });
};

export const icons = {
    open_in_new: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>),
    cloud_download_outlined: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z" /></svg>)
};