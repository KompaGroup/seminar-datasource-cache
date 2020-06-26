export const resolvers = {
  Query: {
    project: (_, {id}, { dataSources: { Project } }) => Project.loadOneById(id),
    projects: (root, args, { dataSources: { Project } }) => Project.getAll(),
    projectByQuery: (_, {query}, { dataSources: { Project } }) => {
      return Project.findByQuery({name: { $regex: query, $options: "i" }});
    },
    topicByIds: (_, {ids}, {dataSources: {Topic}}) => Topic.findManyByIds(ids, {ttl: 120})
  },
  Mutation: {
    updatedProject: (_, {id, name}, { dataSources: {Project} }) => Project.update(id, name)
  },

  Project: {
    topics: ({topicIds}, args, { dataSources: {Topic} }) => Topic.findManyByIds(topicIds, {ttl: 120})
  }
};