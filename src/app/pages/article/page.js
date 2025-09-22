"use client"

import "./article.css"
import Navbar from "@/app/includes/navbar/navbar";
import Footer from "@/app/includes/footer/footer";
import Image from "next/image";
import logo from "../../../../public/logo.webp"
import { useEffect, useState } from "react";


const defaultUrl = "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg"

const Article = () => {
    let [objArticle, setObjArticle] = useState({})
    useEffect(() => {

        let blog = JSON.parse(sessionStorage.getItem('blog'));

        if (blog) {
            setObjArticle(blog)
        }

    })



    return <>
        <Navbar />
       
        <main className="article_wrapper">

            <section className="article">

                <h1>{objArticle.title}</h1>
                <p>standard solutions production</p>

                <div className="author">
                    <Image width={120} alt="article" loading="lazy" height={100} src={logo} />
                    <small> {objArticle.date}</small>
                </div>


                <div style={{backgroundImage: `url(${objArticle.img})`}} className="article_img_wrapper">
                    {/* <Image className="article_img" src={objArticle.img} alt="article graphics" width={300} height={300} /> */}
                </div>

                <article>
                   {objArticle.text}
                </article>

            </section>

        </main>

        <Footer />
    </>
}

export default Article;