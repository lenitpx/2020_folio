import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MY_COUNTS = gql`
  query GetMyCount {
    user(login: "lenitpx") {
      contributionCalendar {
        totalContributions
      }
    }
  }
`;

function AppCount() {
  const { loading, error, data } = useQuery(GET_MY_COUNTS);

    return (
      <div className="App-count">
        <p>placeholder 2</p>
      </div>
    )
}

export default AppCount;