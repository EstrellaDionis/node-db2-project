// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
} = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car)
})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})

module.exports = router
