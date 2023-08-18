import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App =()=> {
 
  const[progress,setprogress]=useState(0)

    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} height={3} />
          <Routes>

            <Route exact path='/' element={<News setprogress={setprogress} key='general' pagesize={9} country="us" category="general"></News>}></Route>
            <Route exact path='/business' element={<News setprogress={setprogress} key='business' pagesize={9} country="us" category="business"></News>}></Route>
            <Route exact path='/entertainment' element={<News setprogress={setprogress} key='entertainment' pagesize={9} country="us" category="entertainment"></News>}></Route>
            <Route exact path='/general' element={<News setprogress={setprogress} key='general' pagesize={9} country="us" category="general"></News>}></Route>
            <Route exact path='/health' element={<News setprogress={setprogress} key='health' pagesize={9} country="us" category="health"></News>}></Route>
            <Route exact path='/science' element={<News setprogress={setprogress} key='science' pagesize={9} country="us" category="science"></News>}></Route>
            <Route exact path='/sports' element={<News setprogress={setprogress} key='sports' pagesize={9} country="us" category="sports"></News>}></Route>
            <Route exact path='/technology' element={<News setprogress={setprogress} key='technology' pagesize={9} country="us" category="technology"></News>}></Route>

          </Routes>
        </div>
      </Router>
    )
  }
export default App;