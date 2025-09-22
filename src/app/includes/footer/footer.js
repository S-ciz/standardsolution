import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import Link from "next/link";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = ()=>{

    return (
<footer>
        <div className="footer">
            <section className="social">
                <h1>Social media</h1>
                <ul>
                    <li><a target="_blank" href="https://www.instagram.com/stan.dardsolution/">
                   
                    <FontAwesomeIcon icon={faInstagram}/>
                    @standardsol </a></li>
                    <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61578301613242">
                    <FontAwesomeIcon icon={faFacebook}/>
                    @standardsol</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/company/stan-dard-solutions/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                   @standsol</a></li>
                </ul>
                 </section>

            <section>
               <h1>Links</h1>
               <ul>
                <li> 
                    <Link href="/pages/book"> 
                     Booking form
                    </Link>
                   
                    </li>
              
                <li>
                        <Link href={"/pages/resources"}>
                        Past papers
                        </Link>
                    </li>
               </ul>
            </section>


            <section>
                <h1>Resources</h1>
                <ul>
                    <li>
                        <Link href={"/pages/resources"}>
                        Past papers
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    </footer>

    )
}

export default Footer;