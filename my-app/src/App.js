import React, {useEffect, useState,} from "react";
import {BrowserRouter, Route, Routes, Navigate, Outlet} from "react-router-dom";
import './App.scss';
import {MyCycle} from "./development/MyCycle/MyCycle";
import {CarouselMain} from "./CarouselMain/CarouselMain";
import {Navigation} from "./Navigation/navigation";
import {MyProfile} from "./development/MyProfile/MyProfile";
import {TeamCycle} from "./development/TeamCycle/TeamCycle";
import {Methods} from "./development/Methods/Methods";
import {Login} from "./Login/Login";

import {TopBar} from "./TopBar/TopBar";
import './darkMode.scss'
/*
Font awsome pattern
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faCake} from "@fortawesome/free-solid-svg-icons";
*/

function App() {

  const [user, setUser] = useState("on")

  useEffect(()=> {

     if (!localStorage.getItem("user")) {
       setUser("off")
     }
  },[])


  const ProtectedRoutes = ({
    user,
    redirectPath = "/login",
    children
  }) => {
    if (user === "off") {
      return <Navigate to={redirectPath} />
    }
    return children ? children : <Outlet/>
  };

  const updateState = (user) => {
    setUser(user)
  }


  function handleCallbackResponse(response) {

  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "1040051880507-b5g7lrkg1kn6n6vc1c1i5uoqajvif5rv.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.account.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );

  },[])

  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  return <BrowserRouter>
    <div className={`App ${theme}`}>
      <TopBar user={user} toggle={toggleTheme}/>
      <CarouselMain/>
      <Navigation/>
      <Routes>
        <Route element={<ProtectedRoutes user={user}/> }>
          <Route path="" element={<MyProfile user={user}/>} />
          <Route path="my-cycle" element={<MyCycle/>} />
          <Route path="team-cycle" element={<TeamCycle/>} />
          <Route path="methods" element={<Methods/>} />
        </Route>
        <Route>
          <Route path="login" element={<Login updateState={updateState}/>} />
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
}

export default App;
