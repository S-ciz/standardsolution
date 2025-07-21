"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "./style.css"
import Navbar from "@/app/includes/navbar/navbar";
import Footer from "@/app/includes/footer/footer";
import { useState, useEffect } from "react";

const Resources = ()=>{

  function truncate(text, max=4)  
  {
    if(window.innerWidth > 600)   
    { 

      if( text.split(" ").length < max) 
      {
        return text;
      }
      let words = ""
      for(let i = 0; i < max; i++)
      {
        words += text.split(" ")[i] + " "
      }
    
     return words;
    }

    return text;

  }

  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('')
  const [papers, setPapers] = useState([])

 async function getPapers(e) 
 {
    e.preventDefault();
   let response = await fetch('/data.json');
   let data = await response.json();

   let filtered = data.filter((item)=> item.grade == parseInt(grade) && item.subject == subject)
   setPapers(filtered)

 }

  const displayPapers = papers.map((obj, index)=>  (<div key={index} class="resource_card">
      <span style={{fontWeight: "bold", color: "#333"}}> <small> {++index}. </small>  { obj.title.split("").length > 1 ? truncate(obj.title) : obj.subject}  </span>
      <span>
        <FontAwesomeIcon color="red" width={50} height={50} icon={faFilePdf}/>
        <small>Mathematics </small>

      </span>
      <a target="_blank" className="card_btn" href={obj.pdf} >Download pdf file</a>
    </div>
) )


    return <>
    <Navbar/>

    <form onSubmit={getPapers} className="resources">
  <h1>Past exam papers</h1>
  <section id="resources_form " className="resources_form">

    <div className="resources_header">
      <div className="control">
        <label >Grade
          <select onChange={(e)=> setGrade(e.target.value)} required name="" id="grades_select">
            <option value="">-- Select Service --</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
        </label>
      </div>
      <div className="control">
        <label >Subject
          <select onChange={(e)=> setSubject(e.target.value)} required name="" id="subjects_select">
            <option value="">-- Select Service --</option>
            <option value="mathematics">Mathematics</option>

          </select>
        </label>
      </div>

      <button  id="resources_btn">Filter Past papers</button>
    </div>

  </section>

  <div id="resource_cards" className="resouces_cards">
    
    { papers.length > 0 && displayPapers  }

  </div>
</form>


    <Footer/>
    </>
}

export default Resources;