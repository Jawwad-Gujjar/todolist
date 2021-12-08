import React from 'react'
import { sidebarElements } from '../../modules/sidebar-elements'
import { socialLinks } from '../../modules/social-links'
import { NavLink } from 'react-router-dom'
import Icon from '../icon/icon'
import IconTexBtn from '../btn/btn'
import './sidebar.scss'
import { icons } from '../../modules/icons'

function Sidebar(props) {
  return (
    <header id="sidebar">
      <div className="sidebar-items col top-space-lg">
        <span className="row aic bottom-space-md">
          <Icon class="icon-lg right-space-sm" href={icons.logo} />
          <h1 className="primary-heading">Todo App</h1>
        </span>
        {sidebarElements.map((item) => (
          <NavLink key={item.icon} to={item.route}>
            <IconTexBtn
              class="tertiary-icon-text-btn-lg"
              iconClass="icon-sm"
              key={item.icon}
              href={item.icon}
              content={item.name}
            />
          </NavLink>
        ))}
        <IconTexBtn
          class="tertiary-icon-text-btn-lg"
          iconClass="icon-sm"
          key={icons.moon}
          href={document.className === 'dark' ? icons.moon : icons.sun}
          content="Change theme"
          onClick={props.changeTheme}
        />
      </div>
      <div className="sidebar-items row bottom-space-lg">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            key={link.url}
            className="tertiary-icon-btn-sm"
            target="_blank">
            <Icon class="icon-sm" href={link.icon} />
          </a>
        ))}
      </div>
    </header>
  )
}

export default Sidebar
