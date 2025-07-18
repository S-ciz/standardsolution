import "./bio.css"
import Image from "next/image";
import Profile_image from "../../../../public/profile.jpeg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Bio = ()=>{
    return(
        <section className="bio">
    <header className="bio_header">
        <div className="bio_credentials">
            <h3>Founder</h3>
            <h1>Stanley Cizungu</h1>
            <h4>Full Stack Developer & Senior Tutor</h4>
        </div>
        <div className="bio_footer">
            <h2>About me</h2>
            <p>As a <strong>Software developer</strong> and <strong> Senior tutor</strong> in both Programming and Mathematics, I am dedicated to improving knowledge in students and efficiency in businesses - explaining difficult concepts in simple and fun ways and hence building confidence, understanding and effeciency. I specialize in everything from <strong>algebra to calculus</strong>, <strong>HTML5 to React</strong> - using side Technologies like <strong> JAVASCRIPT, NODE.JS and JAVA</strong> for creating applications </p>
            <p>Invest in your knowledge and business by booking a software product<strong> Consultaton session</strong> and/or <strong>tutoring services</strong> at affordable prices</p>
        </div>
        <div className="bio_visuals">
            <Image className="img" src={Profile_image} alt="profile"/>
            <ul>
                <li><a target="_blank" href="https://www.facebook.com/stan.cizungu.9"> 
                <FontAwesomeIcon color="black" icon={faFacebook}/></a></li>
                <li><a target="_blank" href="https://www.instagram.com/stan.ley2979/">
                <FontAwesomeIcon color="black" icon={faInstagram}/>
                  </a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/stanley-cizungu/">
                  <FontAwesomeIcon color="black" icon={faLinkedin}/>
                </a></li>
            </ul>
        </div>
    </header>

</section>
    )
}

export default Bio;