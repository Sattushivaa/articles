import { useNavigate } from "react-router-dom"
import "../styles/Dashboard.css"
import { useEffect } from "react";
import { CgAdd } from "react-icons/cg";

export default function Dashboard() {
  const Navigate = useNavigate();
  useEffect(()=>{
    fetch("/api/user/hasauth",{credentials:'include'}).then(t=>t.json()).then(o=>o.error?Navigate("/",{replace:true}):null)
  },[]);
  return (
    <>
    <br/>
    <div className="dp-dash">
        <section className="dp-layout">
            <div className="dp-works">
                <div className="dp-works-ribbon">
                  <h3>Your works</h3>
                  <div className="dp-works-actions">
                    <button onClick={()=>Navigate("/create")} className="dp-works-create-new"> <CgAdd />  <span className="dp-text">Add New</span> </button>
                  </div>
                </div>
            </div>
            <div className="dp-recents">
recents
            </div>
            <div className="dp-subscriptions">
subs
            </div>
        </section>
    </div>
    </>
  )
}
