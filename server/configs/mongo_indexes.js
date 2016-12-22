/**
 * Configure MongoDB Indexes
 * Use Collection.rawCollection & createIndex instead of deprecated _ensureIndex
 * @see http://mongodb.github.io/node-mongodb-native/2.2/tutorials/create-indexes/
 * @see http://joshowens.me/how-to-optimize-your-mongo-database-for-meteor-js/
 * @see http://blog.differential.com/scaling-meteor-to-20000-users-in-7-days/#tip1ensureallpublishfunctionqueriesaresupportedbyanindex
 */
export default function () {
  // <Collection>.rawCollection().createIndex({ <field1>: <type1>, <field1>: <type1>, ... });
}
