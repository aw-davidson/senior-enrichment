'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const { Campuses, Students } = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

apiRouter.route('/campuses')
	.get((req, res, next) => {
		Campuses.findAll()
		.then(campuses => res.status(200).json(campuses))
		.catch(next)
	})
	.post((req, res, next) => {
		Campuses.create(req.body)
		.then(campus => res.status(201).json(campus))
		.catch(next)
	})

apiRouter.route('/campuses/:campusId')
	.get((req, res, next) => {
		Campuses.findOne({
			where: {
				id: req.params.campusId
			}
		})
		.then(campus => res.status(200).json(campus))
		.catch(next)
	})
	.put((req, res, next) => {
		Campuses.update(req.body, {
			where: {
				id: req.params.campusId
			},
			returning: true,
			plain: true
		})
		.then(([numberOfRows, campus]) => {
			res.json(campus)
		})
		.catch(next)
	})
	.delete((req, res, next) => {
		Campuses.destroy({
			where: {
				id: req.params.campusId
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next)
	})

apiRouter.route('/students')
	.get((req, res, next) => {
		Students.findAll({
			include: [{model: Campuses}]
		})
		.then(students => res.status(200).json(students))
		.catch(next)
	})
	.post((req, res, next) => {
		Students.create(req.body)
		.then(student => res.status(201).json(student))
		.catch(next)
	})

apiRouter.route('/students/:studentId')
	.get((req, res, next) => {
		Students.findOne({
			where: {
				id: req.params.studentId
			}
		})
		.then(student => res.status(200).json(student))
		.catch(next)
	})
	.put((req, res, next) => {
		Students.update(req.body, {
			where: {
				id: req.params.studentId
			},
			returning: true,
			plain: true
		})
		.then(([numberOfRows, student]) => {
			res.json(student)
		})
		.catch(next)
	})
	.delete((req, res, next) => {
		Students.destroy({
			where: {
				id: req.params.studentId
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next)
	})



// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
