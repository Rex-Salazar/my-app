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
} from "react-router-dom";



function App() {
  const [Mode,Setmode]= useState('light')
  const [alert,setAlert]= useState(null)

  // const RemoveBodySpaces = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // }

  const togglemode1 = ()=>{
    //RemoveBodySpaces()
    //console.log(cls)
    //document.body.classList.add('bg-'+ cls)
    if(Mode === 'light'){
      Setmode('dark')
      document.body.style.backgroundColor = 'rgb(36 74 104)'
      //showAlert("Blue Mode Has Been Enabled","success")
    }
    else{
      Setmode('light')
      document.body.style.backgroundColor = 'white'
      //showAlert("Light Mode Has Been Enabled","success")
    }
  }

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
                <About Mode = {Mode}/>
              </Route>
              <Route exact path="/">
              <TextForm showAlert = {showAlert} heading ="Enter Your Text Below"  Mode = {Mode}/>  
              </Route>
              
        </Switch>}
        
    </div>
    </Router>
    </>
  );
}

export default App;
