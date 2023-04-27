import React, { useEffect, useState } from "react"
import "./Articles.css"
import { Navigate } from "react-router-dom"

export const Articles = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [url, setUrl] = useState("")
    const [articles, setArticles] = useState([])
    const [userFilter, setUserFilter] = useState("")
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    const navigate = Navigate
    const submitArticle = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:title, synopsis:synopsis, url:url})
        })
            .then(res => res.json())
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/articles")
                .then (response => response.json())
                .then((articles) => {
                    setArticles(articles)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            if (articles) {
                //For customers
                const myArticles = articles.filter(article => article.userId === nutshellUserObject.id)
                setUserFilter(myArticles || [])
            }
        },
        [articles]
    )

    return (
        <main className="container--articles">
            <h1> Articles </h1>
            {articles.length > 0 && articles.map(article => {
                return (
                    <article key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.synopsis}</p>
                        <a href={article.url}>Read More</a>
                    </article>
                )
            })}



            <button onClick={() => setIsFormOpen(!isFormOpen)}>Open/Close Form</button>
            {isFormOpen && 
                <form className="form--articles" onSubmit={submitArticle}>
                    <label htmlFor="inputTitle"> Article Title </label>
                    <input type="text"
                        value={title}
                        onChange={evt => setTitle(evt.target.value)}
                        className="form-control"
                        placeholder="Put Title Here"
                        required autoFocus />
                    <label htmlFor="inputSynopsis"> Synopsis </label>
                    <input type="text"
                        value={synopsis}
                        onChange={evt => setSynopsis(evt.target.value)}
                        className="form-control"
                        placeholder="Put Synopsis Here"
                        required autoFocus />
                    <label htmlFor="inputUrl"> URL </label>
                    <input type="text"
                        value={url}
                        onChange={evt => setUrl(evt.target.value)}
                        className="form-control"
                        placeholder="Put URL Here"
                        required autoFocus />
                        <button type="submit"> Submit </button>
                </form>
                }
        </main>
    )
}

