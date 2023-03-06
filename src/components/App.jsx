import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';
import styled from 'styled-components';
import Profile from '../components/Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from '../components/FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Section>
        <Profile user={user} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};

//! added styled for example (just for test it)
const Section = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 15px;
`;
