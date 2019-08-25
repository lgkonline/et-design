import React from "react";

export interface PageProps {
    className?: string;
    children: any;
}

export function Page({ className, children }: PageProps) {
    return (
        <div className={`page ${className}`}>
            {children}

            <div id="loading" />
            <div id="success" />
            <div id="status" />
        </div>
    );
}