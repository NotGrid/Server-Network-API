const { allUsers, singleUser, newUser, updateUser, deleteUser, newFriend, deleteFriend } = require('../../controllers/userController');

const router = require('express').Router();

router.route('/users').get(allUsers).post(newUser);
router.route('/users/:id').get(singleUser).put(updateUser).delete(deleteUser);

router.route('/users/:userId/friends/:friendId').post(newFriend).delete(deleteFriend);

router.route('/thoughts').get(allThoughts).post(newThoughts);
router.route('/thoughts/:id').get(singleThought).put(updateThought).delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions/:reactionId?').post(newReaction).delete(deleteReaction);
module.exports = router;