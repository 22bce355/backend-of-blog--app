const express =  require('express');
const router = express.Router();
// const dummy = require('../controllers/like');
const {createpost,getallpost} = require('../controllers/createpost');
const createcomment = require('../controllers/createcomment');
const {liking,disliking} = require('../controllers/like')
router.post("/like",liking)
router.post("/unlike",disliking)
router.post("/createpost",createpost);
router.get("/getallpost",getallpost);

router.post("/createcomment",createcomment);
// router.get("/dummy",dummy)
module.exports=router;