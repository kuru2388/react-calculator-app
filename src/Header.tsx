import React from "react";
import './Header.css';

interface ClassHeaderState {
    currVal: string;
}

class ClassHeader extends React.Component<{}, ClassHeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = { currVal: "" };
    }

    handleClick = (value: string) => {
        if (value === "=") {
            try {
                this.setState({ currVal: eval(this.state.currVal) }); // Evaluate the expression
            } catch {
                this.setState({ currVal: "Error" }); // Handle errors in the expression
            }
        } else if (value === "c") {
            this.setState({ currVal: "" }); // Clear the display
        } else {
            this.setState({ currVal: this.state.currVal + value }); // Append the value to the display
        }
    };

    render(): JSX.Element {
        return (
            <div>
                <div className="calculator">
                    <input type="text" id="display" value={this.state.currVal} disabled />
                        <div className="calculator2">
                            <div>
                                <button onClick={() => this.handleClick("c")}>c</button>
                                <button onClick={() => this.handleClick("%")}>%</button>
                                <button onClick={() => this.handleClick("+")}>+</button>
                            </div>

                            <div>
                                <button onClick={() => this.handleClick("7")}>7</button>
                                <button onClick={() => this.handleClick("8")}>8</button>
                                <button onClick={() => this.handleClick("9")}>9</button>
                                <button onClick={() => this.handleClick("-")}>-</button>
                            </div>
                            <div>
                                <button onClick={() => this.handleClick("4")}>4</button>
                                <button onClick={() => this.handleClick("5")}>5</button>
                                <button onClick={() => this.handleClick("6")}>6</button>
                                <button onClick={() => this.handleClick("*")}>*</button>
                            </div>
                            <div>
                                <button onClick={() => this.handleClick("1")}>1</button>
                                <button onClick={() => this.handleClick("2")}>2</button>
                                <button onClick={() => this.handleClick("3")}>3</button>
                                <button onClick={() => this.handleClick("/")}>/</button>
                            </div>
                            <div>
                                <button style={{ width: '128px' }} onClick={() => this.handleClick("0")}>0</button>
                                <button onClick={() => this.handleClick(".")}>.</button>
                                <button onClick={() => this.handleClick("=")}>=</button>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ClassHeader;
