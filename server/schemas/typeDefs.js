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
    grade: Int
    stars: Int
    meters: Int
    style: String
    crag: Crag
  }

  type Day {
    _id: ID
    user: User
    dayDate: Day 
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
    crags(climb: ID, name:String): [Crag]
    crag(_id: ID!, climb: ID, name: String): Crag
    climbs(crag: ID, name: String): [Climb]
    climb(_id: ID!, crag: ID, name: String): Climb
    user: User
    days(climb: ID, name: String): [Day]
    day(_id: ID!): Day
    # checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addDay(
      _id: ID!, 
      user: String!,
      dayDate: Int,
      crag: String!,
      climbs: String!,
      focus: String,
      attempts: Int,
      rests: Int,
      beta: String,
      notes: String,
    ): Day
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateDay(_id: ID!, climbs: String, focus: String, attempts: Int, rests: Int, beta: String, notes:String): Day
    login(email: String!, password: String!): Auth
    deleteDay(_id: ID!): Day
  }
`;

module.exports = typeDefs;