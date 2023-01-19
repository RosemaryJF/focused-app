import React from 'react';
// Imports the `useQuery()` hook from Apollo Client
import { useQuery } from '@apollo/client';
// Imports the query being executed from its file
import { QUERY_DAYS } from '../../utils/queries'
import DayList from '../DayList';

const Days = () => {
  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_DAYS);

  // Use optional chaining to check if data exists and if it has a days property. If not, return an empty array to use.
  const days = data?.days || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DayList
              days={days}
              title="Your stored focus days are:"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Days;

