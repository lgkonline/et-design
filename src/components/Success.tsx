import * as React from "react";

export interface ISuccessProps {
    onClose: () => void;
}
export interface ISuccessState {
    disappear: boolean;
}

export class Success extends React.Component<ISuccessProps, ISuccessState> {
    state = {
        disappear: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ disappear: true });
            setTimeout(this.props.onClose, 200);
        }, 3000);
    }

    render() {
        return (
            <div className={`success text-success ${this.state.disappear ? "disappear" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
            </div>
        );
    }
}