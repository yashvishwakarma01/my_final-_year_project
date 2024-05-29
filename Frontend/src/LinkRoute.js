import React from 'react'
import {Link} from 'react-router-dom'
export function LinkRoute() {
  return (
    <div>
      <Link to='/education'>Education</Link>
      <Link to='/Medication'>Medication</Link>
      <Link to='/Food'>Food</Link>
      <Link to='/housing'>Housing</Link>
      <Link to='/beauty'>Beauty</Link>
    </div>
  )
}

export default LinkRoute
