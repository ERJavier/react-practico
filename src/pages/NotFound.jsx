import React from 'react'
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div>
        <h1 className="title-404">404</h1>
        <p className="text-404">Oops! Not found.</p>
        <a className="button-404" href="./">Try going back to the main page.</a>
    </div>
  )
}

export default NotFound
