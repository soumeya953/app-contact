import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage';
import News from './components/pages/News';
import Register from './components/pages/Register';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';



function App() {
  //utilisation d'une API
  const [ContactState, setContactState] = useState([]);
  const [ArticleState, setArticleState] = useState([]);

  console.log("page initialized");
  useEffect( () => {
    console.log("page monted - user");
    fetch("https://freefakeapi.io/api/users")
    .then(res => res.json())
    .then(data => {
    console.log(data);
    setContactState(data);
    console.log(ContactState);
    })
    .catch(err => console.log(err))
  },[])

  useEffect( () => {
    console.log("page monted - article");
    fetch("https://freefakeapi.io/api/posts?limit=5")
    .then(res => res.json())
    .then(data => {
    console.log(data);
    setArticleState(data);
    console.log(ArticleState);
    })
    .catch(err => console.log(err))
  },[])

  return (
    <Router>
    <HeaderPage />

    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage articleState={ArticleState} />}/>
        <Route path="/Contact" element={<Contact />}/>    
        <Route path="/News" element={<News />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>

    <FooterPage />
    </Router>
  );
}

export default App;
