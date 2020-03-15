import React from 'react'
import classes from './index.module.scss'
import logo from '../../img/logo-raise-now-inverted.svg'

function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="Raise Now logo"/>
    </header>
  )
}

export default Header
