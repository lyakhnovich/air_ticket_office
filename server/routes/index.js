const Router = require('express')

const router = new Router()


const userRouter = require('./userRouter')

const nFlight = require('./nFlightRouter')
const arrivalAirportRouter = require('./arrivalAirportRouter')
const departureAirportRouter = require('./departureAirportRouter')
const scheduleArrivalRouter = require('./scheduleArrivalRouter')
const scheduleDepartureRouter = require('./scheduleDepartureRouter')

router.use('/userRouter', userRouter)

router.use('/nFlight', nFlight)
router.use('/scheduledDeparture', arrivalAirportRouter)
router.use('/scheduledArrival', departureAirportRouter)
router.use('/departureAirport', scheduleArrivalRouter)
router.use('/arrivalAirport', scheduleDepartureRouter)

module.exports = router;
