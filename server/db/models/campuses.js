const db = require('../');
const Sequelize = require('sequelize')

const images = [
  'http://www.iconarchive.com/show/bumpy-planets-icons-by-zairaam/10-neptune-icon.html',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/03-venus-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/07-jupiter-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/06-mars-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/08-saturn-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/11-pluto-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/05-moon-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/02-mercury-icon.png',
  'http://icons.iconarchive.com/icons/zairaam/bumpy-planets/256/thanatos-icon.png'
]

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];


const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: function() {
      return getRandomImage();
    },
    description: {
      type: Sequelize.TEXT
    }

  }
})

module.exports = Campuses;
