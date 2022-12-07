const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);


// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId
//router.route('/api/thoughts').post(createThought);
router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router; 