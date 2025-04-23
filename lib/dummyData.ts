// lib/dummyData.ts

export const dummyAccounts = [
    {
      appwriteItemId: "dummy-account-1",
      name: "Primary Bank",
      currentBalance: 4520.75,
      type: "Checking",
      currency: "USD",
      color: "#4A90E2"
    },
    {
      appwriteItemId: "dummy-account-2",
      name: "Savings Account",
      currentBalance: 10325.50,
      type: "Savings",
      currency: "USD",
      color: "#7ED321"
    }
  ];
  
  export const dummyTransactions = [
    {
      _id: "txn1",
      amount: 150.00,
      type: "expense",
      category: "Groceries",
      date: "2025-04-20",
      note: "Walmart",
      createdAt: "2025-04-20T10:00:00Z",
      accountId: "dummy-account-1"
    },
    {
      _id: "txn2",
      amount: 75.50,
      type: "expense",
      category: "Transportation",
      date: "2025-04-19",
      note: "Uber",
      createdAt: "2025-04-19T14:30:00Z",
      accountId: "dummy-account-1"
    },
    {
      _id: "txn3",
      amount: 200.00,
      type: "income",
      category: "Freelance",
      date: "2025-04-18",
      note: "Upwork project",
      createdAt: "2025-04-18T16:45:00Z",
      accountId: "dummy-account-2"
    }
  ];
  