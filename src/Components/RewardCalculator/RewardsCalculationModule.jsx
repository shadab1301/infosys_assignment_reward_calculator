import React, { useEffect, useMemo, useState } from "react";
import LoadingSpinner from "../Loader/loader";
import { fetchTransactions } from "../../utility/services/apiService";
import Tabs from "../Tabs/Tabs";
import { transactionsWithRewardPoints } from "../../utility/commanFunctions/calculateRewardPoints";
import TransactionTable from "../Tables/TransactionTable";
import MonthlyRewardTable from "../Tables/MonthlyBasisReward";
import TotalRewardsTable from "../Tables/TotalRewardsTable";
import "./tables.css";

const RewardsCalculationModule = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        setLoading(true);
        const data = await fetchTransactions("/data/data.json");
        setTransactions(data);
      } catch (err) {
        console.log({ error: err });
      } finally {
        setLoading(false);
      }
    };
    fetchTransactionData();
  }, []);
  const transactionsWithReward = useMemo(() => {
    return transactionsWithRewardPoints(transactions);
  }, [transactions]);

  const tabs = [
    {
      label: "All Transaction",
      content: <TransactionTable transactions={transactionsWithReward} />,
    },
    {
      label: "Monthly Reward",
      content: <MonthlyRewardTable transactions={transactionsWithReward} />,
    },
    {
      label: "Total Reward(Last three Month)",
      content: <TotalRewardsTable transactions={transactionsWithReward} />,
    },
  ];
  return (
    <div>
      <h1 className="title">Reward Points Dashboard</h1>
      {loading ? <LoadingSpinner /> : <Tabs tabs={tabs} />}
    </div>
  );
};

export default RewardsCalculationModule;
