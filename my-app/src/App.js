import React, {useEffect, useMemo, useRef, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import './styles/app.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('uath')){
      setIsAuth(true);
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value ={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
