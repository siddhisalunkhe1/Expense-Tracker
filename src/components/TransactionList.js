import React, {useContext} from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../Context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

    // console.log(context);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transactions => (<Transaction key={transactions.id} transaction={transactions}/> ))}
         
      </ul>
    </> 
  )
}

export default TransactionList;
