const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('get/places')
})

module.exports = router
