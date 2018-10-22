import React from "react"
import styles from "./layout.module.css"
import logo from "../images/Glitch_White_RGB.png"

const Menu = props => (
  <div className={styles.menu}>
    <div className={styles.menu_logo}>
      <img src={logo} alt="Logo" /> 
    </div>
    <div className={styles.menu_text}>
      <h1>Twitch Game Search</h1>
    </div>
  </div>
)

export default ({ children }) => (
  <div style={{ }}>
    <Menu />
    
    {children}
  </div>
)