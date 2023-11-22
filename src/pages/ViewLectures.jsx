import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player';
import CourseContentCard from '../components/CourseContentCard';
import "./ViewLectures.css"

export const ViewLectures = () => {
 const location=useLocation()
 const selectCourse=location.state.selectedCourse
 const firstVideo=selectCourse.lectures[0]
 const [currentVideo,setCurrentVideo]=useState(firstVideo)
  return (
    <div className='main-video-container'>
    <div className='left-side'>
      <div className='video-container' >
        <ReactPlayer
          url={currentVideo}
          controls={true}
          width='100%'
          height='100%'
          
        />
      </div>
      <div className='video-description-container'>
        <div className='video-nav'>
          <button><b>Overview</b></button>
          <button><b>Q & A</b></button>
        </div>
        <div className='container1'>
          <h2>
            <b>About this course</b>
          </h2>
          {/* <p>{data.description}</p> */}
        </div>
        <div className='container2'>
          <div>
            <p>By the numbers</p>
          </div>
          <div>
            <p>Skill Level: All Levels</p>
            {/* <p>Students: {data?.total_ratings}</p> */}
            <p>Languages: English</p>
            <p>Captions: Yes</p>
            {/* <p>Duration: {data?.duration}</p> */}
          </div>
        </div>
        <div className='container3'>
          <div>Certificates</div>
          <div>
            <p>Get Achievers Avenue certificate by completing the entire course</p>
            <br />
            <button>Achiervers Avenue Certificate</button>
          </div>
        </div>
        <div className='container4'>
          <div>Features</div>
          <div>
            <p>Available on iOS and Android</p>
            <br />
            <p>Exercises & Problems</p>
          </div>
        </div>
        <div className='container5'>
          <div>Description</div>
          <div>
            {/* <p>{data?.description}</p> */}
          </div>
        </div>
      </div>
    </div>

    <div className='right-side'>
      <h2><b>Course content</b></h2>
      <div>
        {
          selectCourse.lectures?.map((ele, ind) => (
            <CourseContentCard key={ele.id} title={selectCourse?.title} img={selectCourse?.image} name={selectCourse?.name}  ind={ind} setCurrentVideo={setCurrentVideo} videoUrl={ele}/>
          ))
        }
      </div>
    </div>
  </div>
  )
}
