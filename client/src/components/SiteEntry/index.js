import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function SiteEntry() {

  function showSiteEntry() {
    if (Auth.loggedIn()) {
      return (
        <div id="homeSignedIn">
          <Link to="/profile">
            <button colorScheme='#C58940' variant='outline'>Profile</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div id="homeNotSignedIn">
          {/* <Stack spacing={2} direction='row' align='center'> */}
          <Link to="/signup">
            <button colorScheme='#C58940' variant='outline'>Signup</button>
          </Link>
          <Link to="/login">
            <button colorScheme='#C58940' variant='outline'>Login</button>
          </Link>
          {/* </Stack> */}
        </div>
      )
    }
  }

  return (
    { showSiteEntry }
  )
}

export default SiteEntry;