const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Crag {
    _id: ID
    name: String
    climbs: [Climb]
  }

  type Climb {
    _id: ID
    name: String
    description: String
    grade: Number
    stars: Int
    meters: Int
    style: String
    crag: Crag
  }

  type Day {
    _id: ID
    dayDate: Date
    crag: Crag
    climbs: [Climb]
    focus: String
    attempts: Int
    rests: Int
    beta: String
    notes: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    days: [Day]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    crags(climb: ID, name: String): [Crag]
    # crag(_id: ID!): Crag
    climbs(crag: ID, name: String): [Climb]
    climb(_id: ID!): Climb
    user: User
    days(_id: ID!): Day
    day(_id: ID!): Day
    # checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addDay(climbs: [ID]!): Day
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateDay(_id: ID!, climbs: [ID]!, focus: [ID]!, attempts: [ID]!, rests: [ID]!, beta: [ID]!, notes:[ID]!): Day
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;