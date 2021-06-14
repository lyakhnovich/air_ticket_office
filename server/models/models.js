const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Aircrafts = sequelize.define('aircrafts', {
  aircraft_code: {type: DataTypes.CHAR(3), primaryKey: true, autoIncrement: true},
  model: {type: DataTypes.TEXT},
  range: {type: DataTypes.INTEGER}
})

const Airports = sequelize.define('airports', {
  airport_code: {type: DataTypes.CHAR(3), primaryKey: true, autoIncrement: true},
  airport_name: {type: DataTypes.TEXT},
  city: {type: DataTypes.TEXT},
  longitude: {type: DataTypes.DOUBLE},
  latitude: {type: DataTypes.DOUBLE},
  timezone: {type: DataTypes.TEXT}
})

const BoardingPasses = sequelize.define('boarding_passes', {
  ticket_no: {type: DataTypes.CHAR(13), primaryKey: true},
  flight_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  boarding_no: {type: DataTypes.INTEGER},
  seat_no: {type: DataTypes.CHAR(4)}
})

const Bookings = sequelize.define('bookings', {
  book_ref: {type: DataTypes.CHAR(6), primaryKey: true, autoIncrement: true},
  book_date: {type: DataTypes.DATE, timestamps: true},
  total_amount: {type: DataTypes.DECIMAL}
})

const Flights = sequelize.define('flights', {
  flight_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  flight_no: {type: DataTypes.CHAR(6), unique: true},
  scheduled_departure: {type: DataTypes.DATE, timestamps: true},
  scheduled_arrival: {type: DataTypes.DATE, timestamps: true},
  departure_airport: {type: DataTypes.CHAR(3)},
  arrival_airport: {type: DataTypes.CHAR(3)},
  status: {type: DataTypes.CHAR(20)},
  aircraft_code: {type: DataTypes.CHAR(3)},
  actual_departure: {type: DataTypes.DATE, timestamps: true},
  actual_arrival: {type: DataTypes.DATE, timestamps: true}
})

const Seats = sequelize.define('seats', {
  aircraft_code: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  seat_no: {type: DataTypes.CHAR(4), primaryKey: true, unique: true},
  fare_conditions: {type: DataTypes.CHAR(10)}
})


const TicketFlights = sequelize.define('ticket_flights', {
  ticket_no: {type: DataTypes.CHAR(13), primaryKey: true, autoIncrement: true},
  flight_id: {type: DataTypes.INTEGER, primaryKey: true},
  fare_conditions: {type: DataTypes.CHAR(10), notNull: true},
  amount: {type: DataTypes.DECIMAL(10, 2), notNull: true}
})

const Tickets = sequelize.define('tickets', {
  ticket_no: {type: DataTypes.CHAR(13), primaryKey: true, autoIncrement: true},
  book_ref: {type: DataTypes.CHAR(6)},
  passenger_id: {type: DataTypes.CHAR(20), notNull: true},
  passenger_name: {type: DataTypes.TEXT, notNull: true},
  contact_data: {type: DataTypes.JSONB}
})

