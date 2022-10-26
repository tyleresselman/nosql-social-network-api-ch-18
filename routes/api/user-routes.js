const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  newUser,
  updateUser,
  deleteUser,
  newFriend,
  deleteFriend
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(newUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(newFriend).delete(deleteFriend);

module.exports = router;