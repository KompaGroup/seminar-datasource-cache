import { MongoDataSource } from "../../datasource-mongo";

export default class Topic extends MongoDataSource {
  initialize(config) {
    super.initialize({
      ...config,
      debug: true,
    });
  }
  // async loadOneById(id) {
  //   return this.findOneById(id, {ttl:60});
  // }
  // getAll() {
  //  return this.collection.find({});
  // }
  // findByQuery(query) {
  //   return this.findManyByQuery(query, {ttl: 60});
  // }
  // async update(id, name) {
  //   await this.collection.updateOne({_id: id}, { name });
  //   await this.deleteFromCacheById(id);
  //   return this.findOneById(id, {ttl:60});
  // }
}