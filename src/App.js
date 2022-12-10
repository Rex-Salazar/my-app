import './App.css';
import React,{ useState } from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";



function App() {
  const [Mode,Setmode]= useState('light')
  //const [mode,changemode]= useState('light')
  const [alert,setAlert]= useState(null)

  //For button#1
  const togglemode1 = ()=>{
    if(Mode === 'light'){
      Setmode('dark')
      document.body.style.backgroundColor = '#6b5b95'
      //showAlert("Purple Mode Has Been Enabled","success")
    }
    else{
      Setmode('light')
      document.body.style.backgroundColor = 'white'
      //showAlert("Light Mode Has Been Enabled","success")
    }
  }
  
  // //For button#2
  // const togglemode = ()=>{
  //   if(mode === 'light'){
  //     changemode('dark')
  //     document.body.style.backgroundColor = '#042743'
  //     //showAlert("Dark Mode Has Been Enabled","success")
  //   }
  //   else{
  //     changemode('light')
  //     document.body.style.backgroundColor = 'white'
  //     //showAlert("Light Mode Has Been Enabled","success")
  //   }
  // }

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
     <Router>
    <Navbar title = "TextUtils"  Mode = {Mode} togglemode1 = {togglemode1}/>
    <Alert alert = {alert}/>
    
    <div className='container my-3'>
        { <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
              </Route>
              
        </Switch>}
        <TextForm showAlert = {showAlert} heading ="Enter Your Text Below"  Mode = {Mode}/>  
    </div>
    </Router>
    </>
  );
}

export default App;
