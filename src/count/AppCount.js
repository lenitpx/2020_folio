import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MY_COUNTS = gql`
  query GetMyCount {
    user(login: "lenit") {
      contributionCalendar {
        totalContributions
      }
    }
  }
`;

function AppCount() {
  const { loading, error, data } = useQuery(GET_MY_COUNTS);
    if (loading) return <div><p>Loading...</p></div>
    if (error) return <div><p>There was a problem fetching this data</p></div>
    return (
      <div className="App-count">
        <p>data</p>
      </div>
    )
}

export default AppCount;