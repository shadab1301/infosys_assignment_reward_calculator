export const calculateRewardPoints = (price) => {
  let tempPrice = Math.floor(price);
  let points = 0;
  if (price > 100) {
    points += (tempPrice - 100) * 2 + 50;
  } else if (tempPrice <= 100 && tempPrice > 50) {
    points += (Math.min(100, tempPrice) - 50) * 1;
  }
  return points;
};

export const transactionsWithRewardPoints = (transactions = []) => {
  return transactions.map((transaction) => {
    let reward = calculateRewardPoints(transaction.price);
    return {
      ...transaction,
      rewardPoint: reward,
    };
  });
};

export const CalLastThreeMonthsData = (transactions = []) => {
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);
  return transactions.reduce(
    (acc, { id, rewardPoint, customerName, price, ...transaction }) => {
      const date = new Date(transaction.purchaseDate);
      if (date >= threeMonthsAgo && date <= today) {
        if (!acc[customerName]) {
          acc[customerName] = {
            id,
            customerName,
            totalReward: 0,
            transactionCount: 0,
            totalTransaction: 0,
          };
        }
        acc[customerName].totalReward += rewardPoint;
        acc[customerName].transactionCount += 1;
        acc[customerName].totalTransaction += price;
      }
      return acc;
    },
    {}
  );
};

export const monthlyRewardByEachCustomer = (transactions = []) => {
  const groupByDateAndCustomername = transactions.reduce((acc, transaction) => {
    const { id, customerName, purchaseDate, price, rewardPoint } = transaction;
    let tranDate = new Date(purchaseDate);
    const month = tranDate.toLocaleString("default", { month: "short" });
    const year = tranDate.getFullYear();
    const key = `${month}_${year}`;
    if (!acc[key]) acc[key] = {};
    if (!acc[key][customerName]) {
      acc[key][customerName] = {
        id,
        customerName,
        month,
        year,
        rewardPoint: 0,
        totalTransaction: 0,
        transactionCount: 0,
      };
    }
    acc[key][customerName].rewardPoint += rewardPoint;
    acc[key][customerName].totalTransaction += price;
    acc[key][customerName].transactionCount += 1;
    return acc;
  }, {});

  const formattedTransaction = Object.keys(groupByDateAndCustomername).reduce(
    (acc, dateKey) => {
      const allCustomerInOneMonth = Object.keys(
        groupByDateAndCustomername[dateKey]
      );
      for (let i = 0; i < allCustomerInOneMonth.length; i++) {
        acc.push(groupByDateAndCustomername[dateKey][allCustomerInOneMonth[i]]);
      }
      return acc;
    },
    []
  );
  return formattedTransaction;
};

export const filterTransactionByDateRange = (data, dateRange) => {
  if (!dateRange) return data;
  if (!dateRange?.startDate || !dateRange?.endDate) return data;
  const start = new Date(dateRange.startDate);
  const end = new Date(dateRange.endDate);
  return data.filter((item) => {
    const purchaseDate = new Date(item.purchaseDate);
    return purchaseDate >= start && purchaseDate <= end;
  });
};
