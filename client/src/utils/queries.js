import { gql } from '@apollo/client';

export const QUERY_CLIMBS = gql`
  query getClimbs($crag: ID) {
    climbs(crag: $crag) {
      _id
      name
      description
      grade
      stars
      meters
      style
      crag {
        name
      }
    }
  }
`;

export const QUERY_ALL_CLIMBS = gql`
  {
    climbs {
      _id
      name
      description
      grade
      stars
      meters
      style
      crag {
        name
      }
    }
  }
`;

export const QUERY_CRAGS = gql`
  query getCrags {
    crags {
      _id
      name
    }
  }
`;

export const QUERY_DAYS = gql`
  query getDays {
    days {
      _id
      # dayDate 
      user {
        firstName
      }
      climbs {
        _id
      }
      crag {
        _id
      }
      
      focus
      attempts
      rests
      beta
      notes
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      days {
        dayDate
        climb {
          _id
          name
          crag {
            name
          }
        }
        focus
        attempts
        rests
        beta
        notes
      }
    }
  }
`;
