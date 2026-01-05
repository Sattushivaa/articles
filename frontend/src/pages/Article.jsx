import React, { useEffect, useState } from 'react'
import '../styles/Article.css'

export default function Article() {
    let [obj,setObj] = useState({
        heading : "",
        body : ""
    })
    const arr = location.href.split("/");
    const id = arr[arr.length-1];
    useEffect(()=>{
        fetch(`/api/articles/${id}`).then(t=>t.json()).then(o=>{
            o.error?null:setObj(o.article)
        })
    },[])
  return (
    <div dangerouslySetInnerHTML={{ __html :  obj.body }} className='article_container'>
        
    </div>
  )
}
