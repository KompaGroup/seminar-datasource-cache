const data = {
  projects: [{
    name: "bidv",
    description: "bidv",
    pid: 1
  },{
    name: "vietcombank",
    description: "vietcombank",
    pid: 2
  },{
    name: "sacombank",
    description: "sacombank",
    pid: 3
  },{
    name: "vinamilk",
    description: "vinamilk",
    pid: 4
  },{
    name: "sacobe",
    description: "sacobe",
    pid: 5
  }],
  topics: [{
    name: "vietcombank topic",
    query: "ngan hang vietcombank",
    pid: [1,2,3]
  }, {
    name: "bidv topic",
    query: "ngan hang bidv",
    pid: [1,2,3]
  }, {
    name: "sacombank topic",
    query: "ngan hang sacombank",
    pid: [1,2,3]
  }, {
    name: "vinamilk topic",
    query: "cty vinamilk",
    pid: [4]
  }, {
    name: "sacobe topic",
    query: "cty sacobe",
    pid: [5]
  }]
};

export default async (models) => {
  const dataTopics = data.topics.map(({ name, query }) => ({ name, query }));
  let topics = await models.Topic.collection.insertMany(dataTopics);
  topics = topics.map(topic => {
    const { _doc } = topic;
    const findTopic = data.topics.find(f => f.name == _doc.name);
    return {
      ..._doc,
      pid: findTopic.pid
    }
  });

  console.log("topics:", topics);

  let projects = data.projects.map(p => {
    const topicIds = topics.filter(t => t.pid.includes(p.pid)).map(i => i._id);
    const { name, description } = p;
    return {
      name,
      description,
      topicIds
    }
  });

  await models.Project.collection.insertMany(projects);

}