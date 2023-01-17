import React, { useEffect } from 'react';
import { useQuery, useContext } from '@apollo/client';
import { QUERY_ALL_CLIMBS, QUERY_CLIMBS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ClimbMenu() {

  const [state, dispatch] = useContext();

  const { climbs } = state;

  const { loading, data: climbData } = useQuery(QUERY_ALL_CLIMBS);

  useEffect(() => {
    if (climbData) {
      dispatch({
        type: QUERY_CLIMBS,
        climbs: climbData.climbs,
      });
      climbData.climbs.forEach((climb) => {
        idbPromise('climbs', 'put', climb);
      });
    } else if (!loading) {
      idbPromise('climbs', 'get').then((climbs) => {
        dispatch({
          type: QUERY_CLIMBS,
          climbs: climbs,
        });
      });
    }
  }, [climbData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: QUERY_ALL_CLIMBS,
      currentClimb: id,
    });
  };

  return (
    <div>
      <h2>Choose a Climb:</h2>
      {climbs.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ClimbMenu;
