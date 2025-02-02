import React, { useState } from "react";
import "./tableWithFilter.css";
import DateFilter from "../DateFilter/DateFilter";
import { filterTransactionByDateRange } from "../../utility/commanFn/calculateRewardPoints";

const withFilter = (WrappedComponent, title) => {
  return ({ transactions = [], ...props }) => {
    const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
    const filteredTransaction = filterTransactionByDateRange(
      transactions,
      dateRange
    );
    return (
      <>
        <div className="filter-container">
          <h3>{title}</h3>
          <DateFilter dateRange={dateRange} handleOnChange={setDateRange} />
        </div>

        <WrappedComponent transactions={filteredTransaction} {...props} />
      </>
    );
  };
};

export default withFilter;
