import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    //console.log(context);
    return (
        <div>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction=
                {transaction} />
                ))}
                {/* <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>  */}
            </ul>

            
        </div>
    )
}
