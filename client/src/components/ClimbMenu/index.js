import React from "react";
import { Link } from "react-router-dom";

const ClimbMenu = ({ climbs }) => {
  // if (!climbs.length) {
  //   return <h3>No Climbs Yet</h3>;
  // }
  return (
    <div>
      <div>
        <h2>Climbs</h2>
      </div>
      <div>
        {climbs &&
          climbs.map((climb) => (
            <div key={climb._id} className="">
              <h3><Link to={`/climbs/${climb._id}`}>
                {climb.name}
              </Link></h3>
              <div className=" bg-transparent" bg="custom-color-800-lght">
                <p>{climb.description}</p>
                <p>{climb.grade}</p>
                <p>{climb.stars}</p>
                <p>{climb.meters}</p>
                <p>{climb.style}</p>
                <p>{climb.crag.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClimbMenu;
