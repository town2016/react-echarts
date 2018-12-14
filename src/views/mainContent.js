import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import '../asset/less/mainContent.less'
import Home from './subPages/home'
import PieList from './subPages/pieList'
class MainContent extends React.Component {
  render () {
    return (
      <div className='mainContent flex-1'>
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          <Route path='/pie' component={PieList}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default MainContent