import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };


    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement = (name) => {
        console.log(name)
        this.setState({ count: this.state.count + 1 });
    };

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }

    render() {
        console.log("The state is changing");
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.doHandleIncrement}
                    className="btn btn-secondary btn-sm">Increment</button>
            </div>

        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    // this is the logic for the element
    formatCount() {
        const { count } = this.state;

        return count === 0 ? "Zero" : count;
    }

}

export default Counter;