import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const Navigate = useNavigate();
  
  return (<>
    <h1>Signup</h1>
    <form method="POST" action="./api/user/signup">
      <input type="text" name="user_id" placeholder="userid"/>
    <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <button type="submit">Submit</button>
    </form>
  </>)
}