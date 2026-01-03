import { useNavigate } from "react-router-dom"
import "../styles/Dashboard.css"
import { useEffect } from "react";

export default function Dashboard() {
  const Navigate = useNavigate();
  useEffect(()=>{
    fetch("/api/user/hasauth",{credentials:'include'}).then(t=>t.json()).then(o=>o.error?Navigate("/",{replace:true}):null)
  },[]);
  return (
    <>
    <br/>
    <div className="dash">
        <section className="layout">
            <div className="works">
                <h2>Your works</h2>
                <hr />
            </div>
            <div className="recents">
recents
            </div>
            <div className="subscriptions">
subs
            </div>
        </section>
    </div>
    </>
  )
}
