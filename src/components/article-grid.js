import React from "react"
import ArticleCard from "./article-card"

const ArticleGrid = ({ articles }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </div>
  )
}

export default ArticleGrid