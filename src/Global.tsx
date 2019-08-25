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