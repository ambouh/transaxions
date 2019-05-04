import React, { Component} from 'react';


class TransactionForm extends Component {
    state = {};

    handleAddTrans = (event)=>{
        event.preventDefault();
        this.props.handleTransactionView("Mango and Peaches");
        this.props.handleTransactionForm(event);
    }

    render(){
        return(
            <div>
                <form className={"transactionForm"}>
                    <input value="transaction_merchant" name={"merchant"}/>
                    <input value="$00.00"  name={"amount"}/>
                    <input value="transaction_category" name={"category"}/>
                    <button className={"button submit"} onClick={this.handleAddTrans}>submit</button>
                </form>
            </div>
        );
    };
}

export default  TransactionForm;