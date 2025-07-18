import "./dropdown.css"

const Dropdown = ()=>{


    return(
<section className="dropdowns">

<main className="dropdown_tutoring"> 

<div className="dropdown">
    <h3><span>Mathematics </span> <span> <i className="fa fa-chevron-up"></i>  </span></h3>
   <ol className="active_dropdown">
      <li>Grade 8 - 12 IEB & GDE </li>
      <li>Calculus - University level</li>
       <li>Past papers, semester tests and exams under <strong>Resources</strong> </li>
   </ol>
</div>
<div className="dropdown">
   <h3><span>Computer sciences </span> <span> <i className="fa fa-chevron-up"></i>  </span></h3>
   <ol className="active_dropdown">
      <li>Computer science 1A</li>
      <li>Computer science 1B</li>
      <li>Computer science 2A</li>
      <li>Computer science 3A</li>
      <li>Past papers, semester tests and exams under <strong>Resources</strong> </li>
      
   </ol>
</div>
<div className="dropdown">
   <h3><span>Programming </span> <span> <i className="fa fa-chevron-up"></i>  </span></h3>
   <ol className="active_dropdown">
      <li>Java</li>
      <li>PHP</li>
      <li>JAVASCRIPT</li>
      <li>PYTHON</li>
   </ol>
</div>

</main>

<main className="dropdown_software">
<div className="dropdown">
 <h3><span>Software </span> <span> <i className="fa fa-chevron-up"></i>  </span></h3>
   <ol className="active_dropdown">
      
      <li>APIs</li>
      <li>SEO</li>
       <li>Social media presence</li>
      <li>Website - business or personal</li>
      <li>Mobile application - IOS and/or ANDROID</li>
   </ol>
</div>
</main>

</section>
    )
}


export default Dropdown;