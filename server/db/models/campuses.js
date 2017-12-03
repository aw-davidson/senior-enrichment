const db = require('../');
const Sequelize = require('sequelize')

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.VIRTUAL,
    defaultValue: 'something',
    get () {
      //defaultValue??
      return `/api/something`;
    },
    description: {
      type: Sequelize.TEXT
    }

  }
})

module.exports = Campuses;
