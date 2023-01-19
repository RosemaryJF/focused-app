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
    $climb: climb
    $crag: crag
    $focus: String!
    $attempts: Number
    $rests: Number
    $beta: String
    $notes: String
  ) {
    addDay(
      user: $user
      dayDate: $dayDate
      climb: $climb
      crag: $crag
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

