import { describe, expect, it } from "vitest";
import { calculateRewardPoints } from "../utility/commanFunctions/calculateRewardPoints";

describe("RewardPoints calculation function", () => {
  it("should calculate reward points correctly for transaction less than $50", () => {
    const rewardPoints = calculateRewardPoints(50);
    expect(rewardPoints).toBe(0); // 0 points
  });
  it("should calculate reward points correctly for transaction  exactly $50", () => {
    const rewardPoints = calculateRewardPoints(50);
    expect(rewardPoints).toBe(0); // 0 points
  });

  it("should calculate reward points correctly for transaction between $50 and $100", () => {
    const rewardPoints = calculateRewardPoints(75);
    expect(rewardPoints).toBe(25); // 75 - 50 = 25 points
  });

  it("should calculate reward points correctly for transaction  greater than $100", () => {
    const rewardPoints = calculateRewardPoints(130);
    expect(rewardPoints).toBe(110); // 110 ponit
  });

  it("should calculate reward points correctly for transaction  exactly  $100", () => {
    const rewardPoints = calculateRewardPoints(100);
    expect(rewardPoints).toBe(50); // 50
  });

  // For Decimal transaction
  it("should calculate reward points correctly for decimal transaction", () => {
    const rewardPoints = calculateRewardPoints(75.5);
    expect(rewardPoints).toBe(25); // Math.floor(75.50 )- 50 = 25 points
  });
  it("should calculate reward points correctly for transaction  exactly  $100.6", () => {
    const rewardPoints = calculateRewardPoints(100.6);
    expect(rewardPoints).toBe(50); // 0 points
  });
  it("should calculate reward points correctly for transaction  exactly  $50.5", () => {
    const rewardPoints = calculateRewardPoints(50.5);
    expect(rewardPoints).toBe(0); // 0 points
  });
});
