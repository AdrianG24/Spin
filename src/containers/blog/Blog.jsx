import React from 'react'
import {Article} from '../../components'
import { blog01,blog02,blog03,blog04,blog05} from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='spinach__blog section__padding' id='blog'>
      <div className='spinach__blog-heading'>
        <h1 className='gradient__text'>
          LATEST POSTS
        </h1>
        <div/>
      </div>
      <div className='spinach__blog-container'>
        <div className='spinach__blog-container-groupA'>
          <Article imgUrl={blog01} date="08.06.2023" title="Unlocking the Secrets of Successful Slot Strategies: Discover Expert Tips at Spinach's Blog"/>
        </div>
        <div className='spinach__blog-container-groupB'>
        <Article imgUrl={blog02} date="Sep 26, 2021" title="The Evolution of Online Slot Gaming: A Journey into the Future" />
        <Article imgUrl={blog03} date="Sep 26, 2021" title="Exploring the Thrill of Bonus Features: Unlocking Hidden Treasures" />
        <Article imgUrl={blog04} date="Sep 26, 2021" title="The Rise of Mobile Slot Gaming: Spinning the Reels on the Go" />
        <Article imgUrl={blog05} date="Sep 26, 2021" title="From Mega Jackpots to New Releases: Catch up on the Hottest Slot News at Spinach" />
        </div>
      </div>
    </div>
  )
}

export default Blog
