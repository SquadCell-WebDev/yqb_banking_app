import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { dummyAccounts } from '@/lib/dummyData';
import React from 'react';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  // Use real accounts if available, otherwise fallback to dummyAccounts
  const accountsToShow = accounts?.length ? accounts : dummyAccounts;

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />

        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
          {accountsToShow.map((account: Account) => (
            <BankCard 
              key={account.id}
              account={account}
              userName={loggedIn?.firstName || 'Guest'}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
