/**
 * Created by Rory on 10/29/2015.
 */
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});
