
import "./services.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faLaptopCode, faAtom,faChalkboard, faDrawPolygon, faMobile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const Services = ()=>{


    return(
        <section id="services" className="services">

    <h1 className="service_title">Book or request service today! </h1>

    <div className="services_service">

        <div className="service">
            <h2> Tutoring services</h2>

            <div className="cards">

                <div className="card">

                    <div className="card_bg_image">
                        <FontAwesomeIcon className="service_icon" color="steelblue" icon={faShapes}/>
                       
                    </div>
                    <h3>Mathematics</h3>
                    <span>Online</span>
                    <h4>R150 p/h</h4>
                    <Link className="button" href={"/pages/book"}> Book session</Link>
                  
                </div>
                <div className="card">

                    <div className="card_bg_image">

                       
                        <FontAwesomeIcon className="service_icon" color="#48D1CC" icon={faLaptopCode}/>


                    </div>
                    <h3>Programming</h3>
                   <span>Online</span>
                    <h4>R180 p/h</h4>
                     <Link className="button" href={"/pages/book"}> Book session</Link>
                </div>
                <div className="card">

                    <div className="card_bg_image">
                        {/* <i style="color: #005A9C" className="fa-solid fa-atom"></i> */}
                        <FontAwesomeIcon className="service_icon" color="#005A9C" icon={faAtom}/>


                    </div>
                    <h3>Computer science </h3>
                    <span> Online </span>
                    <h4> R100 p/h </h4>
                     <Link className="button" href={"/pages/book"}> Book session</Link>
                </div>


            </div>
        </div>
        <div className="service">
            <h2> Software services </h2>

            <div className="cards">

                <div className="card">

                    <div className="card_bg_image">
                        {/* <i style="color: #4D4DFF" className="fa-solid fa-chalkboard"></i> */}
                        <FontAwesomeIcon className="service_icon" color="#4D4DFF" icon={faChalkboard}/>

                        

                    </div>
                    <h3>Personal Websites</h3>
                    <p>Blogs, portfolio, landing pages and templates  and much more</p>
                     <Link className="button" href={"/pages/book"}> Book consultation</Link>
                </div>
                <div className="card">

                    <div className="card_bg_image">
                        {/* <i style="color:#3E8EDE" className="fa-solid fa-draw-polygon"></i> */}
                        <FontAwesomeIcon className="service_icon" color="#3E8EDE" icon={faDrawPolygon}/>

                        

                    </div>
                    <h3>Web application</h3>
                    <p>Social media platforms, eCommerce and much more</p>
                       <Link className="button" href={"/pages/book"}> Book consultation</Link>
                </div>
                <div className="card">

                    <div className="card_bg_image">
                        {/* <i style="color: #00416A" className="fa fa-mobile" aria-hidden="true"></i> */}
                        <FontAwesomeIcon className="service_icon" color="#00416A" icon={faMobile}/>

                    </div>
                    <h3>Mobile App</h3>
                    <p>Android and IOS platorms with React Native</p>
                      <Link className="button" href={"/pages/book"}> Book consultation</Link>
                </div>


            </div>
        </div>
    </div>
</section>
    )
}

export default Services;