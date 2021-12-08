import React from 'react'
import './mobile-navbar.scss'
import Icon from '../icon/icon'
import { icons } from '../../modules/icons'
import IconBtn from '../icon-btn/icon-btn'

function MobileNavbar(props) {
  return (
    <nav className="mobile-navbar">
      <span className="row g1">
        <Icon class="icon-lg" href={icons.logo} />
        <h3 className="tertiary-heading">Todo App</h3>
      </span>
      <IconBtn
        class="tertiary-icon-btn-sm"
        href={document.className === 'dark' ? icons.moon : icons.sun}
        onClick={props.changeTheme}
        iconClass="icon-sm"
      />
    </nav>
  )
}

export default MobileNavbar
