import * as React from "react";

export interface StatusProps {
    title: string;
    message: string;
    type: string;
    onClose: () => void;
}

export interface StatusState {
    disappear: boolean;
}

export class Status extends React.Component<StatusProps, StatusState> {
    state = {
        disappear: false
    };

    render() {
        return (
            <div className={`status card border-${this.props.type} ${this.state.disappear ? "disappear" : ""}`}>
                <div className="row">
                    <div className="col-2 col-md-1 white-link-area">
                        <button
                            className="btn btn-link p-3 svg-current-color"
                            onClick={() => {
                                this.setState({ disappear: true });
                                setTimeout(this.props.onClose, 200);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        </button>
                    </div>

                    <div className="col-10 col-md-11 p-3">
                        <h4 className="mb-3">{this.props.title}</h4>
                        <p style={{ whiteSpace: "pre-wrap" }}>{this.props.message}</p>
                    </div>
                </div>
            </div>
        );
    }
}