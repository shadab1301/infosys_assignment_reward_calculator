import React from "react";
import "../src/App.css"
import ErrorBoundryWrapper from "./Components/ErrorBoundry/ErrorBoundryWrapper";
import RewardsCalculationModule from "./Components/RewardCalculator/RewardsCalculationModule";
function App() {
  return (
    <ErrorBoundryWrapper>
      <RewardsCalculationModule/>
    </ErrorBoundryWrapper>
  );
}
export default App;
