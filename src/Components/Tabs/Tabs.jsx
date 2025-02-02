import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs=[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`panel-${index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`panel-${index}`}
            role="tabpanel"
            hidden={activeIndex !== index}
            className="tab-panel"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
