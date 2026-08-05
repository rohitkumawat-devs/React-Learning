import React from 'react'
import styles from './header.module.css'
// import Button from '../button/Button'

const Header = () => {
  return (
    <div >
        <h1 className={styles.header}>header</h1>
        <button className={styles.btn} >Click me</button>
    </div>
  )
}

export default Header