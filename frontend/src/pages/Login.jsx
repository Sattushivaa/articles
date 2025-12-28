//import './Login.css'

export default function Login(){
  return (<>
    <h1>Login</h1>
    <form method="POST" action="./api/user/login/">
      <input type="text" name="user_id" placeholder="userid"/>
      <input type="password" name="password" placeholder="password"/>
      <button type="submit">Submit</button>
    </form>
  </>)
}