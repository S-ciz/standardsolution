"use client";
import { useEffect } from "react";
import "./showcase.css"


const Showcase = () => {


    useEffect(() => {
        const showcase = document.getElementById('showcase');

        const software_content = `<section class="showcase-text">
        <h1>SOFTWARE <span style="color: white">solutions</span> </h1>
        <p> Equip your organisation with the tools to thrive in the digital world through innovative software solutions </p>
        <div class="showcase-buttons">
            <button>Request software solution</button>
        </div>
    </section>
    <section class="showcase-bg">

    </section>`
        const tutoring_content = `    <section class="showcase-text">
        <h1>TUTORING <span style="color: white">solutions</span> </h1>
        <p> Empower yourself with the knowledge to thrive in the digital world through expert tutoring solutions </p>
        <div class="showcase-buttons">
            <button>Book your session today</button>
        </div>
    </section>
    <section class="showcase-bg">

    </section>`

        let isSoftware = true;
        setInterval(() => {

            if (isSoftware) {
                showcase.innerHTML = software_content;
                showcase.style.backgroundImage = "url('/app.jpg')";
            } else {
                showcase.innerHTML = tutoring_content;
                showcase.style.backgroundImage = "url('/maths.jpg')";

            }

            isSoftware = !isSoftware;

        }, 7000);
    }, [])



    return (
        <main id="showcase" className="showcase">

            <section className="showcase-text">
                <h1>SOFTWARE <span style={{ color: "white" }}>solutions</span> </h1>
                <p> Equip your organisation with the tools to thrive in the digital world through innovative software solutions </p>
                <div className="showcase-buttons">
                    <button> Request software solution</button>
                </div>
            </section>
            <section className="showcase-bg">

            </section>

        </main>
    )
}

export default Showcase;