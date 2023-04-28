import { useState } from "react"

export const Article = ({setArticles, article}) => {

    const [showEdit, setShowEdit] = useState(false)
    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [url, setUrl] = useState("")
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const editArticle = (e,id) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/articles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title:title, synopsis:synopsis, url:url, userId:nutshellUserObject.id})
        })
        .then(response => response.json()) 
        .then(data => {
            if (data.hasOwnProperty("id")) {
                fetch("http://localhost:8088/articles")
                .then(res => res.json())
                .then((articles) => {
                    const myArticles = articles.filter(article => article.userId === nutshellUserObject.id)
                    setArticles(myArticles)
                    setShowEdit(false)
                })
            }
        })
    }

    return (
        <><article className="article" key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.synopsis}</p>
            <a href={article.url}>Read More</a>
            <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        </article>
            {showEdit &&
        <form key={article.id + "--edit"} className="form--articles" onSubmit={ (e) => editArticle(e,article.id)}>
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
        </form>}</>
    )
}