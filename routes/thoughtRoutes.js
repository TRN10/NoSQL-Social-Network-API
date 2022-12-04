const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,

} = require('../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);


// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId
router.route('/api/thoughts').post(createThought);

module.exports = router;