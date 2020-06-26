import ProjectModel from './model';
import ProjectSchema from './schema';

export default (db) => new ProjectModel(db.model('Project', ProjectSchema));
