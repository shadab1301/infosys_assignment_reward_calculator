# Reward Points Calculator

## Project Overview

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).   Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Assumption:- The record could be of many years so displaying the records of the latest three months in descending order and combined points as per customer ID for the last three months.

## Running the Project

### Clone the project from github repository


```javascript
https://github.com/shadab1301/infosys_assignment_reward_calculator
```
**Install Dependencies**
```javascript
npm install
```
**Run the Application in Development Mode**
```javascript
npm run dev
```
**Run the Test Cases**
```javascript
npm run test
```
**The test cases file can be found at:**
```javascript

/infosys_assignment_reward_calculator/src/testCases/rewardCalculator.test.js

/infosys_assignment_reward_calculator/src/testCases/fetchTransactions.test.js


```
**Test Cases**

**calculatePoints function**
```javascript
✅ Should handle negative amount

✅ Should handle decimal amount

✅ Should handle large amounts like 1,000,000

✅ Should calculate points correctly for amounts over $100

✅ Should calculate points correctly for amounts between $50 and $100

✅ Should calculate points correctly for amount exactly $50

✅ Should handle amounts less than $50
```
**processTransactions function**
```javascript
✅ Should process transactions and calculate points correctly

✅ Should handle an empty transactions array
```
**fetchTransactions**
```javascript
✅ Should fetch transaction data successfully

✅ Should handle 404 error

✅ Should handle 500 error

✅ Should handle other fetch errors

✅ Should handle network errors
```
**Build the Application for Production**
```javascript
npm run build
```
**Application Screenshots**
![Application Running State](./assets/running_state.png)

**Application Running State**

(Include relevant screenshots here)

Assumption

The record could span multiple years; however, only the latest three months' data is displayed in descending order, with points calculated per customer ID for the last three months.

License

This project is open-source and available for use under the MIT License.

Contact

For any queries or contributions, feel free to reach out!



