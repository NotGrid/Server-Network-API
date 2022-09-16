const { allUsers, singleUser, newUser, updateUser, deleteUser, newFriend, deleteFriend } = require('../../controllers/userController');
const { allThoughts, newThoughts, singleThought, updateThought, deleteThought, newReaction, deleteReaction, } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.route('/users').get(allUsers).post(newUser);
router.route('/users/:id').get(singleUser).put(updateUser).delete(deleteUser);

router.route('/users/:userId/friends/:friendId').post(newFriend).delete(deleteFriend);

router.route('/thoughts').get(allThoughts);
router.route('/thoughts/:id').get(singleThought).put(updateThought).delete(deleteThought);

router.route('/thoughts/:userId').post(newThoughts);

router.route('/thoughts/:thoughtId/reactions').post(newReaction);
router.route('/thoughts/:thoughtId/reactions/:reactionId').post(newReaction).delete(deleteReaction);
module.exports = router;