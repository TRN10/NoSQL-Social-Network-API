const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,

} = require('../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);


// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId
router.route('/api/users').post(createUser);

module.exports = router;