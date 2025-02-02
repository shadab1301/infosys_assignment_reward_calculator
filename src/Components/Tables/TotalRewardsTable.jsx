import React from "react";
import { CalLastThreeMonthsData } from "../../utility/commanFn/calculateRewardPoints";

const TotalRewardsTable = ({ transactions = [] }) => {
  const lastThreeMonthTransaction = CalLastThreeMonthsData(transactions);
  return (
    <div>
      <h3>Total Rewards</h3>
      <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Transactions Count</th>
            <th>Total Transactions</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(lastThreeMonthTransaction).map(
            ({
              id,
              customerName,
              totalReward,
              transactionCount,
              totalTransaction,
              totalSpent,
            }) => {
              return (
                <tr key={customerName}>
                  <td>{id}</td>
                  <td>{customerName}</td>
                  <td>{transactionCount}</td>
                  <td>{totalTransaction}</td>
                  <td>{totalReward}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TotalRewardsTable;
