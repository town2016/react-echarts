import React from 'react'
import {NavLink} from 'react-router-dom'
import '../asset/less/sidebar.less'
class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuList: [
        {
          path: '/pie',
          name: '饼图',
          id: 'pie'
        }
      ]
    }
  }
  render () {
    return (
      <div className='sideBar'>
        <div className='admin-title'>
          <h2>Echarts Admin</h2>
        </div>
        <ul className='menuList'>
          {this.state.menuList.map(menu => (
            <li key={menu.id}>
              <NavLink to={menu.path} activeClassName="active">
                <span className='icon'></span>
                <span className='path-name'>{menu.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Sidebar