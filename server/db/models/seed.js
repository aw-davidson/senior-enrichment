
const Promise = require('bluebird')
const db = require('../')
const Students = require('./students')
const Campuses = require('./campuses')

const data = {
  campuses: [{name: 'Mars', description: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. `}, {name: 'Uranus', description: `The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball.
  `}, {name: 'Neptune', description: `Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.`}, {name: 'Saturn', description: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.`}, {name: 'Mercury', description: `Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.`}, {name: 'Venus', description: `Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites.`}, {name: 'Neptune', description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.'}],
  students: [{firstName: 'Michael', lastName: 'Jordan', email: 'mj@gmail.com', gpa: 3.7, campusId: 1}, {firstName: 'Cardi', lastName: 'B', email: 'cardi@gmail.com', gpa: 2.7, campusId: 1}, {firstName: 'Frank', lastName: 'Ocean', email: 'smooth@gmail.com', gpa: 4.0, campusId: 1}, {firstName: 'Pablo', lastName: 'Picasso', email: 'theBull@gmail.com', gpa: 3.9, campusId: 2}, {firstName: 'Andy', lastName: 'Warhol', email: 'flowerpower@gmail.com', gpa: 3.2, campusId: 1}, {firstName: 'Vincent', lastName: 'Van Gough', email: 'earProblems@gmail.com', gpa: 2.4, campusId: 3}, {firstName: 'Takashi', lastName: 'Murakami', email: 'octopusman@gmail.com', gpa: 3.9, campusId: 1}, {firstName: 'Kanye', lastName: 'West', email: 'yeezy@gmail.com', gpa: 3.1, campusId: 3}]
}

db.sync()
.then(function () {
    return Promise.map(data.campuses, function (item) {
      Campuses.create(item);
    });
  })
  .then(function () {
    return Promise.map(data.students, function (item) {
      Students.create(item)
      ;
    });
  })
.then(function () {
  console.log(`IMPORTANT: I could not figure out how to add foriegn keys during seed. Finished inserting data (press ctrl-c to exit)
  `);
})
.catch(function (err) {
  console.error('There was a problem', err, err.stack);
});
