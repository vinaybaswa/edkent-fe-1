import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import './Sidebar.scss';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonSelected: null
    }
  }

  handleClick = buttonSelected => () => {
    this.setState({ buttonSelected })
  }

  render() {
    return (
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return (
              <li key={index}
                className={index === this.state.buttonSelected ? 'selected' : item.cName}
                onClick={this.handleClick(index)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Sidebar;