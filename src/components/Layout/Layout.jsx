import React from 'react'
import { Header }  from "../Header"
import { Footer } from '../footer'

function Layout(props) {

  const { children } = props
  return (
 <>
    <Header/>
      {children}
    <Footer/>
 </>
  )
}

export default Layout

