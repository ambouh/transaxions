import React, {Component} from 'react';
import './summary.css';
import axios from "axios";
import Auth from '../../auth';

class Summary extends Component {
    title = "Dashboard";

    state = {
        userTransaction: [],
        userData: []
    };

    getPersonData() {
        const verb = '';
        const URL = Auth.getURL();
        const ax = axios.create({
            baseURL: URL
        });
        return ax.get('person.json')
            .then((response) => {
                const data = response.data;
                const obj = JSON.parse(localStorage.getItem("user"));
                const username = obj["USERNAME"];

                return Auth.getUser(username, data);
            });
    }

    getUserTransactions(person_id) {
        const verb = '';
        const URL = Auth.getURL(); //http://localhost:60080/api/
        const ax = axios.create({
            baseURL: URL
        });
        return ax.get('transaction.json')
            .then((response) => {
                const data = response.data;
                //const sessionStr = localStorage.getItem("user");
                //const id = JSON.parse(sessionStr).PERSON_ID;
                //const hello = "hey"
                //console.log(data[person_id]);
                return data[person_id];

            });
    }

    componentDidMount() {
        //const this.getPersonData();
        this.getPersonData().then((response) => {
            this.setState({userData: response})
        });
        const person_id = localStorage.getItem("person_id").toString();
        this.getUserTransactions(person_id).then((response) => {
            const top3 = [];
            for (let i = 0; i < 3; i++) {
                top3.push(response[i]);
            }
            this.setState({userTransaction: top3});
        });
    }

    render() {
        return (
            <div className="templateDiv">
                <h1 className={"templateTitle"} style={{marginBottom: 0}}>{this.title}</h1>
                <div className={"contentWrapper"}>
                    <div className={"content"}>
                        <h1 className={"templateTitle"}>RECENT TRANSACTIONS ></h1>
                        <div className={"box"}>
                            <ul className={"recTransactions"}>

                                {this.state.userTransaction.map((data, i) => {
                                        return (
                                            <li className={"transaction"} key={i}>
                                                <div>
                                                    <p>{data["TRANSACTION_MERCHANT"]}</p>
                                                    <p>{data["TRANSACTION_TYPE"]}</p>
                                                </div>
                                                <span>$ {data["TRANSACTION_AMOUNT"]}</span>
                                            </li>
                                        )
                                    }
                                )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={"content"}>
                        <h1 className={"templateTitle"}>ACCOUNTS ></h1>
                        <div className={"box"}>
                            <ul className={"recTransactions"}>
                                <li className={"transaction"}>
                                    <div>
                                        <p>CHECKING ACCOUNT #00{this.state.userData["PERSON_ID"]}</p>
                                        <p>VISA </p>
                                    </div>
                                    <span style={{color: "#3E7BB8"}}>${this.state.userData["CHECKING_BALANCE"]}</span>
                                </li>
                                <li className={"transaction"}>
                                    <div>
                                        <p>SAVINGS ACCOUNT #00{this.state.userData["PERSON_ID"]}</p>
                                        <p>VISA </p>
                                    </div>
                                    <span style={{color: "#3E7BB8"}}>${this.state.userData["SAVINGS_BALANCE"]}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;