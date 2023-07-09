const sequelize = require('../config/connection');
const { User, Project, Blogpost, Comment, PostComment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');
const postCommentData = require('./postCommentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const blogpost of blogpostData) {
    await Blogpost.create({
      ...blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  const comment = await Comment.bulkCreate(commentData);
  const postComment = await PostComment.bulkCreate(postCommentData);

  process.exit(0);
};

seedDatabase();
