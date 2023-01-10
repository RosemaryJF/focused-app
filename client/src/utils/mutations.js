import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DAY = gql`
  mutation addDay(
    $user: ID!
    $dayDate: Day
    $climb: ID!
    $focus: String!
    $attempts: Number!
    $rests: Number
    $beta: String!
    $notes: String!
  ) {
    addDay(
      user{
        _id
        name
      }
      dayDate
      climb {
        _id
        name
        crag {
          name
        }
      }
      focus: $focus
      attempts: $attempts
      rests: $rests
      beta: $beta
      notes: $notes
    )
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

