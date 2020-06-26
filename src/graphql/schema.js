import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    project(id: String): Project
    projectByQuery(query: String): [Project]
    projects: [Project]
    topicByIds(ids: [String]): [Topic]
  }
  type Mutation {
    updatedProject(id: ID, name: String): Project
  }
  type Project {
    _id: ID 
    name: String
    description: String
    topics: [Topic]
  }

  type Topic {
    _id: ID
    name: String
    query: String
  }
`;