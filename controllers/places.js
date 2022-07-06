const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
        res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
        res.render('places/new')
      })
      router.post('/', (req, res) => {
    
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = '../images/cafe.jpg'
        }
        if (!req.body.city) {
          req.body.city = 'Raliegh'
        }
        if (!req.body.state) {
          req.body.state = 'NC'
        }
        places.push(req.body)
        res.redirect('/places')
      })
      
      
      
 

module.exports = router
