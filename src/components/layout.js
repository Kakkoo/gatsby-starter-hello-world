import React from 'react'
import Header from "./header.js"
import Footer from "./footer.js"
export default function layout({children}) {
  return (
    <div>
      <Header />
      {children}
     
      <Footer />
    </div>
  )
}
