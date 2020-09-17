import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

export default function header() {
  return (
    <header>
      <Link to="/"><img className="logo" src={Logo} /></Link>
    </header>
  )
}
