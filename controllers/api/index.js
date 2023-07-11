const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const blogpostRoutes = require('./blogpostRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;
