"use client";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"
import Logo from "../../../../public/logo.webp"
import Link from "next/link";
import { useRef,useState } from "react";


 const Navbar = ()=>{

    const [toggle, setToggle] = useState(true)
  
    const ul_ref = useRef(null);
    function toggleNavBar()
    {

      if(ul_ref.current.className=== "active")
      {
        ul_ref.current.className = "inactive"
        setToggle(true)
      }else 
      {
        ul_ref.current.className = "active"
        setToggle(false)
      }
    }

 
    return( <nav className="navbar"> 
<header>

  <Link href={"/"}>
 <Image className="logo"  src={Logo}  alt="Image"/>
 </Link>
<div className="wrapper">

<div className="nav_icon_container"> <span></span>
 {/* <i id="nav_icon" className="fa fa-bars"></i> */}
 <FontAwesomeIcon className="toggler" onClick={toggleNavBar} id="nav_icon"  icon={toggle ? faBars : faTimes}/>

<ul className="list">
    <li>
      <Link  href={"/"}>
      Home
      </Link>
    </li>
   
    <li>
       <Link href={"/pages/resources"}>
      Resources
      </Link>
    </li>
    <li>
       <Link href={"/pages/articles"}>
      Articles
      </Link>
    </li>
   
    <li className="book">
       <Link style={{color: "var(--primary)"}} href={"/pages/book"}>
      BOOK TODAY
      </Link>
    </li>
</ul>

 </div>


<ul ref={ul_ref} id="nav_list" className="inactive">
    <li>
      <Link href={"/"}>
      Home
      </Link>
    </li>
   
    <li>
       <Link href={"/pages/resources"}>
      Resources
      </Link>
    </li>
      <li>
       <Link href={"/pages/articles"}>
      Articles
      </Link>
    </li>
   
    <li>
       <Link className="active" href={"/pages/book"}>
      BOOK TODAY
      </Link>
    </li>
</ul>


</div>
</header>

</nav>)

}

export default Navbar;