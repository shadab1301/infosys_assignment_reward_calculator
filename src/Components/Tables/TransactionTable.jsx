import React from "react";
import withFilter from "../HOC/TableWithFilter"
const AllTransactionTable = ({ transactions = [] }) => {
  return (
    <div>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Purchased Product</th>
            <th>Product Price</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.customerName}</td>
              <td>{transaction.purchaseDate}</td>
              <td>{transaction.purchaseProduct}</td>
              <td>${transaction.price}</td>
              <td>{transaction.rewardPoint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TransactionTable=withFilter(AllTransactionTable,"All transaction")
export default TransactionTable;
