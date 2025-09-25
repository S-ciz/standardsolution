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

    }, [])



    return <>
        <Navbar />
       
        <main className="article_wrapper">

            <section className="article">

                <h1 dangerouslySetInnerHTML={{__html: objArticle.title}}/>
                <p className="slogan">standard solutions production</p>

                <div className="author">
                    <Image priority={true} width={120} alt="article" loading="eager" height={100} src={logo} />
                    <small> {objArticle.date}</small>
                </div>


                {/* <div style={{backgroundImage: `url(${objArticle.img})`}} className="article_img_wrapper">
         
                </div> */}

                <article className="blog_content" dangerouslySetInnerHTML={{__html: objArticle.text}}/>
                
               

            </section>

        </main>

        <Footer />
    </>
}

export default Article;