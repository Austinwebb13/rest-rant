const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src="/images/cafe.jpg"></img>
            <h2>Rating</h2>
            <p>Not Yet Rated</p>
            <h3>Description</h3>
            <p>Located in Raleigh, NC and serving coffee, Bakery</p>
            <h3>Comments</h3>
            <p>No comments yet</p>
       <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
             Edit
              </a>     
 
        <form method="POST" action={`/places/${data.id}?_method=DELETE`} > 
        <button type="submit" className="btn btn-danger">
         Delete
          </button>
        </form>
 
        </main>    
        </Def>
    )
}
   
module.exports = show

