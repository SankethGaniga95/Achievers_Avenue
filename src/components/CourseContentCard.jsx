import { color } from 'framer-motion';
import React from 'react'


const CourseContentCard = ({ title, ind, setCurrentVideo, videoUrl,img,name }) => {

    const handlePlay = () => {
        setCurrentVideo(videoUrl)
    }

    return (
        <div style={{ padding: '3px', marginBottom: '15%' }}>
            <div style={{display:"flex"}}>
            <div>
            <img src={img} width="300px" alt="" /> 
            </div>
            <div style={{marginLeft:"15px"}}>
            <p>{`${ind + 1}. ${title}`}</p>
            <p>{name}</p>
            <button style={{ marginLeft: '10px', padding: '3px 10px 3px 10px', backgroundColor: '#376ed5', color: 'white', borderRadius: '4px', border:"none",marginTop:"10px" }} onClick={handlePlay}>Play</button>
            </div>
            </div>
        </div>
    )
}

export default CourseContentCard;
