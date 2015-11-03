/**
 * Created by Rory on 11/2/2015.
 */
// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}