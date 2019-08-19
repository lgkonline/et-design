import React from "react";

export function StatusPage() {
    const closestByClass = (el: Element, clazz: string) => {
        // Traverse the DOM up with a while loop
        while (el.classList && !el.classList.contains(clazz)) {
            // Increment the loop to the parent node
            el = el.parentNode as Element;
            if (!el) {
                return null;
            }
        }
        // At this point, the while loop has stopped and `el` represents the element that has
        // the class you specified in the second parameter of the function `clazz`

        // Then return the matched element
        return el;
    };

    return (
        <div>
            <h1 className="mt-4 mb-3">Status alerts</h1>

            <div className="status card border-danger">
                <div className="row">
                    <div className="col-2 col-md-1 white-link-area">
                        <button
                            className="btn btn-link p-3 svg-current-color"
                            onClick={({ currentTarget }) => {
                                const status = closestByClass(currentTarget as Element, "status") as HTMLElement;
                                if (status) {
                                    status.remove();
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        </button>
                    </div>

                    <div className="col-10 col-md-11 p-3">
                        <h4 className="mb-3">Something went wrong</h4>
                        <p>And here is some text about this error</p>
                    </div>
                </div>
            </div>
        </div>
    );
}