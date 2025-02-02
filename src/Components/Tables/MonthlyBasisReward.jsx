import { monthlyRewardByEachCustomer } from "../../utility/commanFn/calculateRewardPoints";
import withFilter from "../HOC/TableWithFilter"
const MonthlyTable = ({ transactions = [] }) => {
  const monthlyTransaction = monthlyRewardByEachCustomer(transactions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Transactions Count</th>
            <th>Total Transactions</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.length > 0 ? (
            monthlyTransaction.map(
              ({
                id,
                customerName,
                rewardPoint,
                month,
                year,
                transactionCount,
                totalTransaction,
                totalSpent,
              }) => {
                return (
                  <tr key={`${id}_${customerName}`}>
                    <td>{id}</td>
                    <td>{`${month} ${year}`}</td>
                    <td>{customerName}</td>
                    <td>{transactionCount}</td>
                    <td>{totalTransaction}</td>
                    <td>{rewardPoint}</td>
                  </tr>
                );
              }
            )
          ) : (
            <tr className="">
              <h3>No Data found</h3>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
const MonthlyRewardTable = withFilter(MonthlyTable, "Monthly Rewards");
export default MonthlyRewardTable;
