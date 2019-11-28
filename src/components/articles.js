import React from 'react'

const Articles = ({ articles }) => {
  return (
    <div>
      <center><h1>All Articles</h1></center>
      {articles.map((article) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{article.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{article.link}</h6>
            <p class="card-text">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Articles

