import React from 'react'
import './Empty.css'
import { ReactComponent as Icon404 } from '../assets/404.svg'

function Empty() {
  return (
    <div className="empty">
      <Icon404 /> 
      <p>Empty...</p>
    </div>
  )
}

export default Empty