import React, { useState, useEffect } from "react";

export interface HorizontalScrollProps {
    className: string;
    children: any;
}

export const HorizontalScroll = ({ className, children }: HorizontalScrollProps) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrolledToEdge, setScrolledToEdge] = useState(false);

    const id = "horizontal-scroll-" + Math.random().toString(36).substr(2, 9);

    const doScroll = (amount: number) => {
        const scrollBodyElement = document.querySelector(`#${id} .horizontal-scroll-body`);
        if (scrollBodyElement) {
            scrollBodyElement.scrollTo(scrollLeft + amount, 0);
        }
    };

    const checkScrolledToEdge = () => {
        const scrollBodyElement = document.querySelector(`#${id} .horizontal-scroll-body`);
        if (scrollBodyElement) {
            if (scrollBodyElement.scrollLeft === (scrollBodyElement.scrollWidth - scrollBodyElement.clientWidth)) {
                setScrolledToEdge(true);
            }
            else {
                setScrolledToEdge(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            checkScrolledToEdge();
        });
    });

    return (
        <div id={id} className={"horizontal-scroll " + className}>
            <nav className="horizontal-scroll-nav white-link-area d-none d-md-flex">
                <button className="btn btn-link" onClick={() => doScroll(-300)} disabled={scrollLeft === 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /></svg>
                </button>

                <button className="btn btn-link" onClick={() => doScroll(300)} disabled={scrolledToEdge}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" /></svg>
                </button>
            </nav>

            <div className="horizontal-scroll-body" onScroll={(event) => {
                setScrollLeft(event.currentTarget.scrollLeft);
                checkScrolledToEdge();
            }}>
                {children}
            </div>
        </div>
    );
}