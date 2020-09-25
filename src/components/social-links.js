import React from 'react'

import GitHub from '../images/social/github.svg'
import LinkedIn from '../images/social/linkedin.svg'
import Dribbble from '../images/social/dribbble.svg'
import Behance from '../images/social/behance.svg'
import Twitter from '../images/social/twitter.svg'

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href={`https://github.com/SamBrock`} target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub profile"/></a>
      <a href={`https://www.linkedin.com/in/sam-brocklehurst/`} target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn profile" /></a>
      <a href={`https://dribbble.com/sambrock`} target="_blank" rel="noopener noreferrer"><img src={Dribbble} alt="Dribbble profile"/></a>
      <a href={`https://www.behance.net/sambrocklehurst`} target="_blank" rel="noopener noreferrer"><img src={Behance} alt="Behance profile"/></a>
      <a href={`https://twitter.com/SxmBrock`} target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter profile"/></a>
    </div>
  )
}
