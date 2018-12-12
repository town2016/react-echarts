import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import './asset/less/app.less'
import Sidebar from './views/sideBar'
import MainContent from './views/mainContent'
import Toper from './views/Toper'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App flex">
          <Sidebar />
          <div className='flex-1 flex flex-v'>
            <Toper />
            <MainContent />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
