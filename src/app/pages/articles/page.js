"use client"

import "./article.css"
import Navbar from "@/app/includes/navbar/navbar"
import Footer from "@/app/includes/footer/footer"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const Article = ({ objArticle }) => {



    const titleRef = useRef()

    function navigateToArticle() {
        sessionStorage.setItem('blog', JSON.stringify({
            title: objArticle.title.rendered,
            text: objArticle.content.rendered,
            date: objArticle.date.split(':')[0],
            img: objArticle.meta.advanced_seo_description

        }))

        window.location.href = "/pages/article"

    }
    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;

        if(div.textContent.length < 20)
        {
            return div.textContent + '...' || div.innerText + '...' 
        }
        return div.textContent.slice(0,20) || div.innerText.slice(0,20) || "";
    };


    return <div className="article">
        <Image priority={true} className="article_image" alt={objArticle.title} src={objArticle.meta.advanced_seo_description} width={400} height={300} />
        <div className="article_content">
            <h2 className="article_title"> {stripHtml(objArticle.title.rendered)} </h2>
            <small className="article_date">{objArticle.date.split(':')[0]}</small>
            <button onClick={navigateToArticle} className="article_btn">Read more</button>
        </div>



    </div>
}

const Articles = () => {

    let [listArticles, setArticles] = useState([])

    useEffect(() => {
        const url = 'https://public-api.wordpress.com/wp/v2/sites/filmsinc374783777.wordpress.com/posts'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setArticles(data)

            })

    }, [listArticles])

    const imgUrl = "https://images.unsplash.com/photo-1758320576708-a60c856c34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"

    // const listArticles = [
    //     {
    //         id: 0,
    //         title: "My article",
    //         date: "12 Jan 2025",
    //         img: imgUrl ,
    //         text: "Basic text explaining why things happen the way they do \n How can we make things better!"
    //     },
    //     {
    //         id: 1,
    //         title: "My article",
    //         date: "12 Jan 2025",
    //         img: imgUrl ,
    //         text: "Basic text explaining why things happen the way they do \n How can we make things better!"
    //     },
    //     {
    //         id: 2,
    //         title: "My article",
    //         date: "12 Jan 2025",
    //         img: imgUrl ,
    //         text: "Basic text explaining why things happen the way they do \n How can we make things better!"
    //     },
    //     {
    //         id: 3,
    //         title: "My article",
    //         date: "12 Jan 2025",
    //         img: imgUrl ,
    //         text: "Basic text explaining why things happen the way they do \n How can we make things better!"
    //     },
    //     {
    //         id: 4,
    //         title: "My article",
    //         date: "12 Jan 2025",
    //         img: imgUrl ,
    //         text: "Basic text explaining why things happen the way they do \n How can we make things better!"
    //     },
    // ]


    const displayArticles = listArticles.map((art) => <Article objArticle={art} key={art.id} />)

    return <>
        <Navbar />

        <main className="articles_wrapper">
            <h1>Recent <span style={{ color: "var(--primary)" }}>Articles</span></h1>

            <section className="articles">
                {listArticles.length > 0 && displayArticles}
            </section>


        </main>

        <Footer />
    </>
}

export default Articles;