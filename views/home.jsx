const React = require('react')
const Def = require('./default')



function home () {
    return (
      <Def>
          <main>
   
              <h1>REST-Rant</h1>
              <div>
              <img src='/images/perfect-burger.jpg' alt='perfect burger' />
             </div>
              <div>
                Photo by <a href="https://unsplash.com/@1ncreased?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lidye</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

              
              </div>
                       <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }
  

module.exports = home
