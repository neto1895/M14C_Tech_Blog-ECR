const sequelize = require('../config/connection');
const { User, Blogpost, Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogpost = await Blogpost.bulkCreate(blogpostData);
  const comment = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();