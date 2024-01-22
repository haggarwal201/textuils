//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
// import About from './components/About';
import Calculator from './components/Calculator' 
import React,{useState} from 'react'
import Alert from './components/Alert'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [alert,setAlert]=useState(null)

  let showalert =(message,type)=>
  {
        setAlert({msg:message,
        type:type})

        setTimeout(()=>{
         setAlert(null);
         },1500);
  }
  const [mode,setMode]=useState('light');
  let togglecolor =()=>{
         if(mode==='dark')
         {
           setMode('light');
           document.body.style.backgroundColor = 'white';
           showalert("Light mode has been enabled",'success')
           
           
       

         } 
         else{
              setMode('dark');
              document.body.style.backgroundColor = '#08234b ';
              showalert("Dark mode has been enabled",'success')
                
          // setInterval=(()=>{
          //   document.title ='best course at calculax';
          // },1500)  

          // setInterval=(()=>{
          //   document.title ='get into iit';
          // },1000) 
         }
   }
  return (
           <>   
      {/* <Router> */}
               <Navbar Title ="CalcuX"  mode={mode} togglecolor={togglecolor}/>
              <Alert alert={alert}/>
              <div className="container" > 
            
          
          
         <Calculator sa={showalert}/>
        
                  
               </div>
      {/* </Router> */}
           </>
            );
}


export default App;
