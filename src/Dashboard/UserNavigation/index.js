import React, { Component } from 'react';
import './UserNavigation.css';
import {Link} from 'react-router-dom';


class UserNavigation extends Component {
    render() {
        return(
          <div className={"navigation"}>
              <ul>
                  <li><Link to={"/dashboard"}>Dashboard</Link></li>
                  <li><Link to={"/dashboard/transactions"}>All Transactions</Link></li>
              </ul>
          </div>
        )
    }
}

export default UserNavigation;