import React from 'react'
import './gameArticles.css'

const GameArticles = ({imgUrl, date, title}) => {
  return (
    <div className="spinach__games-container_article">
    <div className="spinach__games-container_article-image">
      <img src={imgUrl} alt="games_image" />
    </div>
    <div className="spinach__games-container_article-content">
        <h3>{title}</h3>
    </div>
  </div>
  )
}

export default GameArticles

