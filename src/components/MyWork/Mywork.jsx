import React from 'react'
import "./Mywork.css";
import mywork_data from "../../Assets/mywork_data";
import arrow_icon from "../../Assets/arrow_icon.svg";
import theme_pattern from "../../Assets/theme_pattern.svg";

const Mywork = () => {
  return (
    <div id='myWork' className="mywork">
        <div className="mywork-title">
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="" srcset="" />
        </div>
        <div className='mywork-container'>
            {mywork_data.map((work,index)=>(
            <div key={index} className="mywork-pics">
                    <img src={work.w_img} alt="" />
            </div>
            ))}

        </div>
        <div className="show-more">
                <p>Show More</p>
                <img src={arrow_icon} alt="" srcset="" />
            </div>
    </div>
  )
}

export default Mywork;