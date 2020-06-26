import mongoose from 'mongoose';

export default mongoose.Schema({
  name: String,
  description: String,
  topicIds:[String]
}, { collection: 'Project' });