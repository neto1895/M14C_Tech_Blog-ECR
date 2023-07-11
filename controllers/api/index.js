const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/comments', commentRoutes); 

module.exports = router;
