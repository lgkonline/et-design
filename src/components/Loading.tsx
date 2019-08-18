import * as React from "react";
import ReactDOM from "react-dom";
import lottie from "lottie-web";

const loadingAnimationData = require("../animation/loading.json");

export interface ILoadingProps {
    className?: string;
    style?: React.CSSProperties
}
export interface ILoadingState { }

export class Loading extends React.Component<ILoadingProps, ILoadingState> {
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this) as Element;
        const child = node.querySelector(".loading-animation") as Element;

        lottie.loadAnimation({
            container: child,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: loadingAnimationData
        });
    }

    render() {
        return (
            <div
                className={"loading " + this.props.className}
                style={this.props.style}
                role="status"
            >
                <div className="loading-animation" />
            </div>
        );
    }
}