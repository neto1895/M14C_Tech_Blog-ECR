const User = require('./User');
const Project = require('./Project');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');
const PostComment = require('./PostComment');


User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Project.belongsTo(User, {
  foreignKey: 'user_id'
});



User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(Comment, { 
  foreignKey: 'user_id'
});
Comment.belongsTo(User, { 
  foreignKey: 'user_id' 
});


Blogpost.hasMany(Comment, { 
  foreignKey: 'blogpost_id' 
});
Comment.belongsTo(Blogpost, { 
  foreignKey: 'blogpost_id' 
});


// User.hasMany(Comment, {
//   foreignKey: 'user_id',
// })


// Blogpost.hasMany(PostComment, {
//   foreignKey: 'blogpost_id'
// });


// PostComment.belongsTo(Blogpost, {
//   foreignKey: 'blogpost_id'
// });
// PostComment.hasMany(Comment, {
//   foreignKey: 'comment_id'
// });


// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });
// Comment.belongsTo(PostComment, {
//   foreignKey: 'postComment_id'
// });







module.exports = { User, Project, Blogpost, Comment, PostComment };
