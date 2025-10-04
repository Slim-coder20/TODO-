
import React from 'react'
import styles from './Header.module.css'
import reactLogo from '../../assets/react.svg'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="Logo" width={50} height={50}/>
        <div>
          <h1>Todo-React</h1>
          <div className="color-gray">
            <code>Éliminez le chaos, suivez le flux.</code>
          </div>
        </div>

      </div>
      <code className="color-primary"> 
        V.1.0 
      </code>
      
    </div>
  )
}
