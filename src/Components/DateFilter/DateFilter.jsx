import React from "react";
import "./date_filter.css";
const DateFilter = ({
  dateRange,
  handleOnChange,
}) => {
  return (
    <div className="date-filter-container">
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={dateRange.startDate}
          onChange={(e) => handleOnChange({...dateRange,startDate:e.target.value})}
        />
      </div>
      <div>
        <label>End Date: </label>
        <input
          type="date"
          value={dateRange.endDate}
          onChange={(e) => handleOnChange({...dateRange,endDate:e.target.value})}
        />
      </div>
    </div>
  );
};

export default DateFilter;
