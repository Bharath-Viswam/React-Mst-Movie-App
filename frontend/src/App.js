
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <div className="App">
<Navbar></Navbar>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/addmovie' element={<AddMovie data={{moviename:'',year:'',actor:'',camera:'',actress:'',producer:'',director:'',language:''}} method="post"/>}></Route>
  <Route path='/aboutus' element={<AboutUs/>}></Route>
  <Route path='/search' element={<SearchResults/>}></Route>
</Routes>
    </div>
  );
}

export default App;
