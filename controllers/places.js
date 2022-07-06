const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'indian',
        pic: '/images/cafe2.jpg'
      }, {
        name: 'City Cafe',
        city: 'Raliegh',
        state: 'NC',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cafe.jpg'
      }]
        res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
        res.render('places/new')
      })
      
 

module.exports = router
