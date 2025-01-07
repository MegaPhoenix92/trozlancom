import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to BUNPX</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin">Admin Dashboard</Link>
          </li>
          <li>
            <Link href="/ceo">CEO Dashboard</Link>
          </li>
          <li>
            <Link href="/user">User Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;