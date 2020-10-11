var express = require('express');
var router = express.Router();
const EventsService = require('../services/events.service');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({
    message: 'Your application is up and running!'
  })
});

router.get('/checkEventEmitter', (req, res) => {
  try {
    EventEmitterService.eventEmition();
    res.status(200).json({
      message: 'Event emitter executed successfully'
    })
  } catch (error) {
    res.status(400).json({
      message: 'Event emitter execution failed!',
      error: error
    })
  }
})

router.get('/startIOTask', async (req, res) => {
  try {
    EventsService.manageEvents();
    res.status(200).json({
      message: 'IO Task executing successfully!'
    })
  } catch (error) {
    res.status(400).json({
      message: 'Failed to execute the IO Task',
      response: error
    })
  }
})

module.exports = router;
