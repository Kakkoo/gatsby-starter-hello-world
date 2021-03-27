import React from 'react'

export default function header({children}) {
  return (
    <div>
      <div>
        <header>
          {children}
         
         <h3>My application using GatsbyJS</h3>
        
      </header>
      </div>
    </div>
  )
}
