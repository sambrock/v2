import React from 'react'
import Header from '../header'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div className="page__mask"></div>
    </div>
  )
}
