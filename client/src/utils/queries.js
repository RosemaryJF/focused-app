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

// CHECKOUT / STRIPE
// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

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
  {
    crags {
      _id
      name
    }
  }
`;

export const QUERY_DAYS = gql`
  {
    days {
      _id
      dayDate
      climb {
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
