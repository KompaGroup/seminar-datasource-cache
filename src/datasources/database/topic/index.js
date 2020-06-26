import TopicModel from './model';
import TopicSchema from './schema';

export default (db) => new TopicModel(db.model('Topic', TopicSchema));
