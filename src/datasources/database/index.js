import Project from './project';
import Topic from './topic';

export default (db) => ({
  Project: Project(db),
  Topic: Topic(db)
});