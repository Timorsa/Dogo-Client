import React from 'react'
import Post from './Post';

const Feed = () => {
    return (
        <div className='feed'>
            <input type='text' name='search' className='feed-input' placeholder='need to write place holder...' />
            <button className='post-btn'>Post</button>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
       
    )
}

export default Feed
