import React from 'react'
// import { Link } from "react-router-dom"

import "../styles/links.css"
import PropTypes from 'prop-types'
export const Links = (props) => {
    const sty1={
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      

    }
  return (
    <div>
        <div className="container" style={sty1}>
            <a href="">{props.titles}</a>
        </div>
    </div>
  )
}
