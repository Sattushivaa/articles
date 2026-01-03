//import React from 'react'
//import './Global.css'
import { useEffect } from 'react';
import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  
  const Navigate = useNavigate();

  useEffect(() => {
    fetch('/api/user/hasauth',{credentials:'include'}).then(t=>t.json()).then(r=>r.error?null:Navigate("/dashboard",{ replace : true })).catch(er=>console.log(er));
  }, []);

  return (
    <>
    
    <div className="container">
      <div className="card">
        <div className="content">
         <span className="medium"> A place for people who write — not to impress an algorithm, but </span><br />
       <br /><span className="big"> to express thoughts</span><br /><br />. Here, articles, poems, and stories live for readers who actually care. Whether you write often or only when something inside you demands words, this platform gives your writing a home.
        </div>
      </div>
    </div>
    
    <div className="container">
      <div className="card">
        <div className="content">
         <span className="medium"> Most platforms reward noise. This one </span><br />
       <br /><span className="big">rewards meaning</span><br /><br />. Follow writers you resonate with, subscribe to their work, and read without distractions
        </div>
      </div>
    </div>
    
    <br /><br/>
  <div className="center">
    <div>
    <button onClick={()=>{Navigate("/signup")}} className="signup">Start Today</button> <br />
    <button onClick={()=>{Navigate("/login")}} className="login">Login</button>
    </div>
  </div>
    <br /><br />
    
  <br /><br />
  <div className="line"></div>

    </>
  )
}
