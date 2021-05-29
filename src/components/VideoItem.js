import './VideoItem.css';

import React from 'react';

const VideoItem = ({video, onVideoSelect})=>{

    return(
        <div onClick={()=>{onVideoSelect(video)}} className='video-item item'>
            <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
            <div className='content'>
                <div className='header title'>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )

}


export default VideoItem;