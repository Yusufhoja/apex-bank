import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import User from './components/User'
import Work from './components/Work'
import News from './components/News'
import Apps from './components/Apps'
import Search from './components/Search'

    

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<User></User>}></Route>
          <Route path='/work' element={<Work></Work>}></Route>
          <Route path='/news' element={<News></News>}></Route>
          <Route path='/apps' element={<Apps></Apps>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
