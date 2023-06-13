import React from 'react'
import {GameArticles} from '../../components'
import { blog02,blog03,blog05} from './imports'
import './games.css'

const Games = () => {
  return (
    <div className='spinach__games section__padding' id='games'>
      <div className='spinach__games-heading'>
        <h1 className='gradient__text'>
          Our Releases
        </h1>
      </div>
      <div className='spinach__games-container'>
        <GameArticles imgUrl={blog02}  title="GAMES IN PROD" />
        <GameArticles imgUrl={blog03}  title="NETWORK RELEASE 20TH JUNE" />
        <GameArticles imgUrl={blog05}  title="NETWORK RELEASE 4TH JULY" />
      </div>
    </div>
  )
}

export default Games
