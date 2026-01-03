import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const Navigate = useNavigate();
  let [id,setid] = useState('');
  let [pass,setpass] = useState('');
  
  return (<>
    <h1>Login</h1>
    <form>
      <input type="text" name="user_id" placeholder="user id" value={id} onChange={(e)=>setid(e.target.value)}/>
      <input type="password" name="password" placeholder="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
      <button type="submit" onClick={(e)=>{
        e.preventDefault();
        fetch('/api/user/login',{
          method : 'POST',
          headers :{
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            user_id : id,
            password : pass
          })
        }).then(t=>t.json()).then(o=>{
          if(!o.error){
            Navigate('/dashboard');
          } else {
            alert('something is wrong');
          }
        }).catch(e=>alert('error'))
      }}>Submit</button>
    </form>
  </>)
}