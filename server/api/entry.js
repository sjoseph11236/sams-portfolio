const router = require('express').Router();
const { Entry } = require('../db');

router.get('/', async(req, res, next) => { 
  try {
    const entries = await Entry.findAll();
    console.log('entries',entries);
    res.send(entries);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;