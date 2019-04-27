import React, { Component} from 'react';
import './alltransactions.css';

class AllTransactions extends Component {
    title = "All Transaction";
    render() {
        return (
            <div className="templateDiv">
                <h1 className={"templateTitle"}>{this.title}</h1>
                <p className={"templateText"}>This is the {this.title} template</p>
            </div>
        );
    }
}

export default AllTransactions;