import React from 'react'

import GitHub from '../images/social/github.svg'
import LinkedIn from '../images/social/linkedin.svg'
import Dribbble from '../images/social/dribbble.svg'
import Behance from '../images/social/behance.svg'
import Twitter from '../images/social/twitter.svg'

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href={`https://github.com/SamBrock`} target="_blank"><img src={GitHub} /></a>
      <a href={`https://www.aedin.com/in/sam-brocklehurst/`} target="_blank"><img src={LinkedIn} /></a>
      <a href={`https://dribbble.com/sambrock`} target="_blank"><img src={Dribbble} /></a>
      <a href={`https://www.behance.net/sambrocklehurst`} target="_blank"><img src={Behance} /></a>
      <a href={`https://twitter.com/SxmBrock`} target="_blank"><img src={Twitter} /></a>
    </div>
  )
}
