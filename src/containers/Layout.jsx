import React from 'react'
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
    </div>
  )
}

export default Layout;