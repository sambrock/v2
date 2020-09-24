import React from 'react'
import SocialLinks from './social-links'

export default function Footer({ children }) {
  return (
    <footer>
      <SocialLinks />
      {children}
    </footer>
  )
}
