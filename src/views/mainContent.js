import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import '../asset/less/mainContent.less'
import Home from './subPages/home'
import Pie from './subPages/pie'
class MainContent extends React.Component {
  render () {
    return (
      <div className='mainContent flex-1'>
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          <Route path='/pie' component={Pie}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
      </div>
    )
  }
}

export default MainContent