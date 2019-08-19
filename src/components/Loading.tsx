import * as React from "react";
import ReactDOM from "react-dom";
import lottie from "lottie-web";

const loadingAnimationData = require("../animation/loading.json");
const loadingAnimationData2 = require("../animation/loading2.json");

export interface ILoadingProps {
    className?: string;
    style?: React.CSSProperties
    animation: string;
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
            animationData: this.props.animation === "2" ? loadingAnimationData2 : loadingAnimationData
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