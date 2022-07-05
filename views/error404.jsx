const React = require('react')
const Def = require('./default')

    function error404 () {
        return (
          <Def>
              <main>
                
                  <h1>404: PAGE NOT FOUND</h1>
                  <p>Oops, sorry, we can't find this page!</p><div>
              <img src='/images/404_2x.webp' alt='404' />
              <div>
            Photo by <a href='https://dribbble.com/stories/2019/12/23/404-page-designs?utm_source=Clipboard_
            undefined&utm_campaign=undefined&utm_content=undefined&utm_medium=Social_Share'> Renee Fleck</a>
            <a href="https://dribbble.com/stories/2019/12/23/404-page-designs">Dribbble</a>
              </div>
                </div>
              </main>
          </Def>
        )
      }
      

module.exports = error404
