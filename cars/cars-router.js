const express = require('express');
const knex = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  knex('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Failed to retrieve cars', error })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;

  knex('cars')
    .where({ id })
    .first()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Failed to retrieve car with specified ID', error })
    })
})

router.post('/', validatenInformation, (req, res) => {
  const carData = req.body;

  knex('cars').insert(carData)
    .then(ids => {
      knex('cars').where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Failed to save car to database', error })
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  knex('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      if(count > 0) {
        res.status(200).json({ message: `${count} record(s) updated 🎉` })
      } else {
        res.status(404).json({ message: 'Car not found! 🚫' })
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Error updating car information', error })
    });
});

router.delete('/:id', (req, res) => {
  knex('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json({ message: `${count} record(s) removed 💀` })
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Error deleting car 🚙', error })
    })
})

// custom middleware for validation 

function validatenInformation(req, res, next) {
  const carInfo = req.body;

  if(!carInfo.vin || !carInfo.make || !carInfo.model || !carInfo.mileage) {
    res.status(400).json({ errorMessage: 'Please provide vin, make, model, and mileage for car' })
  } else {
    next();
  }
}
module.exports = router;