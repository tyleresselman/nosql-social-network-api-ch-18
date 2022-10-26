const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  newThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');


router.route('/').get(getThoughts).post(newThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reactions').post(newReaction);


router.route('/:thoughtId/reactions/:reactionsId').delete(deleteReaction);

module.exports = router;