import React, { Component} from 'react';
import './alltransactions.css';
import axios from "axios";
import Auth from "../../auth";

class AllTransactions extends Component {

    state = {
        userTransaction: []
    };


    getPersonId(){
        return localStorage.getItem("person_id").toString();
    }

    getUserTransactions(person_id){
        const verb = '';
        const URL = Auth.getURL();
        const ax = axios.create({
            baseURL: URL
        });
        return ax.get('transaction.json')
            .then((response) =>{
                const data = response.data;
                //const sessionStr = localStorage.getItem("user");
                //const id = JSON.parse(sessionStr).PERSON_ID;
                //console.log(data[person_id]);
                return data[person_id];

            });
    }
        componentDidMount() {
        const person_id = this.getPersonId();
        this.getUserTransactions(person_id).then((response)=>{
            this.setState({userTransaction: response})
        });
    }

    title = "All Transactions";
    render() {
        return (
            <div className="templateDiv">
                <h1 className={"templateTitle"}>{this.title}</h1>
                <table className={"transactionTbl"}>
                    <tr>
                        <th>TRANSACTION</th>
                        <th>AMOUNT</th>
                        <th>CATEGORY</th>
                        <th>TYPE</th>
                    </tr>
                    <tbody>
                    {this.state.userTransaction.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data["TRANSACTION_MERCHANT"]}</td>
                                <td>$ {data["TRANSACTION_AMOUNT"]}</td>
                                <td>{data["TRANSACTION_CATEGORY"]}</td>
                                <td>{data["TRANSACTION_TYPE"]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AllTransactions;