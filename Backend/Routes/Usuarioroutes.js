const express = require('express');
const Bdcontroller = require('../Controllers/Bdcontroller');
const router = express.Router();



router.post('/', Bdcontroller.bdcontroller);
 

module.exports = router;
