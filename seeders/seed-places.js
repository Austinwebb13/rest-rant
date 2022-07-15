const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/cafe2.jpg',
    founded: 1989
}, {
    name: 'City Cafe',
    city: 'Raleigh',
    state: 'NC',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafe.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
