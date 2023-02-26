import './App.css';
import { Routes, Route } from 'react-router-dom';
import React , { useState }from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './Components/Footer';

const App = ()=> {
  const [progress, setProgress] = useState(0)
  const pageSize=15
  const API=process.env.REACT_APP_NEWS_API
    return (

      <div>
        <Navbar/>
        <LoadingBar color='#f11946'
        height={3}
        progress={progress}
        />
        <Routes>
        <Route exact path='/business'element={<News setProgress={setProgress} key='business' pageSize={pageSize} API={API} Country={'in'} Category={'business'}/>}/>
        <Route exact path='/entertainment'element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} API={API} Country={'in'} Category={'entertainment'}/>}/>
        <Route exact path='/'element={<News setProgress={setProgress} key='general' pageSize={pageSize} API={API} Country={'in'} Category={'general'}/>}/>
        <Route exact path='/health'element={<News setProgress={setProgress} key='health' pageSize={pageSize} API={API} Country={'in'} Category={'health'}/>}/>
        <Route exact path='/science'element={<News setProgress={setProgress} key='science' pageSize={pageSize} API={API} Country={'in'} Category={'science'}/>}/>
        <Route exact path='/sports'element={<News setProgress={setProgress} key='sports' pageSize={pageSize} API={API} Country={'in'} Category={'sports'}/>}/>
        <Route exact path='/technology'element={<News setProgress={setProgress} key='technology' pageSize={pageSize} API={API} Country={'in'} Category={'technology'}/>}/>
        </Routes>
        <Footer/>
      </div>
    )
}

export default App