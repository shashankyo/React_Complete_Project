import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//    Link
//   } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light'); //Whetehr dark mode is enabled or not
 
  const [alert, setalert] = useState(null);
  const showalert = (message, type)=> {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
    setmode('dark');
    document.body.style.background = 'grey';
    document.body.style.color = 'white';
    showalert("Dark mode has been enabled", "success")
    document.title = "Textutils - Dark Mode";
    // setInterval(() => {
    //   document.title = "Textutils is Amazing";

    // }, 2000);

    // setInterval(() => {
    //   document.title = "Install Textutils Now";

    // }, 1500);

    }
    else{
      setmode('light');
      // color: 'white'
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showalert("Light mode has been enabled", "success")
      document.title = "Textutils - Light Mode";

    }
  }
  return (
    <>
      {/* <Navbar title="Utils" AboutText="About TextUtils" HomeUtils="Home"/> */}
      {/* <Navbar/> */}
    {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      {/* <Switch> */}
        {/* <Route exact path="/about">
          <About/>
        </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm showalert={showalert} heading="Enter the text to analyse below" mode={mode}/>
        {/* </Route> */}

      {/* </Switch> */}
     {/* <About/> */}
      </div>
      {/* </Router>   */}
    </>
  );
}

export default App;

