import '../styles/Create.css'
import ArticleEditor from '../components/ArticleEditor'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {

  const Navigate = useNavigate();
  const [heading, setheading] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => { fetch("/api/user/hasauth").then(t => t.json()).then(o => o.error ? Navigate("/login") : null).catch(console.log) }, []);

  function publish() {
    fetch("/api/articles", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        heading,
        body: content
      })
    }).then(t => t.json()).then(o => {
      //console.log(o);
      if (!o.error) {
        setContent("");
        setheading("");
        Navigate("/dashboard")
      }

    });
  }


  return (
    <div className="cp">
      <div className="name">
        <input value={heading} placeholder='Untitled' onChange={(e) => setheading(e.target.value)} type="text" name="" id="" />
      </div>
      <div className="wrapper">
        <ArticleEditor value={content} onChange={setContent} />
      </div>
      <div className="pub-wrapper">
        <button onClick={publish}>PUBLISH</button>
      </div>

    </div>
  )
}