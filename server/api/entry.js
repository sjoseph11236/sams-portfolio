const router = require('express').Router();
const { Entry } = require('../db');

router.get('/', async(req, res, next) => { 
  try {
    const entries = await Entry.findAll();
    res.send(entries);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = { ...req.body, userId: 1 }
    console.log('entry',entry);
    const createdEntry = await Entry.create(entry);
    res.send(createdEntry);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;