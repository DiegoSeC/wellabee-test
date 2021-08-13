import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import 'react-circular-progressbar/dist/styles.css';
import absoluteUrl from 'next-absolute-url';

import { WellabeeProvider } from './context';
import { User } from '../interfaces/user';
import UserPage from './User';

type HomeProps = {
  user: User;
};

const Home: NextPage<HomeProps> = ({ user }) => {
  return (
    <WellabeeProvider>
      <UserPage user={user} />
    </WellabeeProvider>
  );
};

/**
 * NextJS implementation to load user's data when the page is loaded
 */
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const response = await fetch(`${origin}/api/users`);
  const data = await response.json();

  return { props: { user: data } };
};

export default Home;
