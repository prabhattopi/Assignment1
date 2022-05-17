import React from 'react'
import { Link } from "react-router-dom"

import "../styles/links.css"
export const Links = () => {
    const sty1={
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      

    }
  return (
    <div>
        <div className="container" style={sty1}>
            <a href="/">Services</a>
            <a href="/">Projects</a>
            <a href="/">About</a>
        </div>
    </div>
  )
}
