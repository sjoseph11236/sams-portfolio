const Sequelize = require('sequleize');
const db = require('../db');


const Entry  = db.define('entry', {
  title:{
    type:Sequelize.SRING,
    allowNull: false,
    validate: { 
      notEmpty: true,
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull:fasle, 
    validate: { 
      notEmpty: true
    }
  }
});


module.exports = Entry;