import React from 'react'
import "./Services.css"
import Servicesdata from "../../Assets/services_data"
// import theme_pattern from "../../Assets/theme_pattern.svg"

const Services = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1> My Services</h1>
            {/* <img src={theme_pattern} alt="Here is Theme Pattern"/> */}
        </div>
        <div className="services-container">
                {Servicesdata.map((Service,index)=>(
                        <div key={index} className="service">
                            <h1 >{Service.s_no}</h1>
                            <h1 className='service-name'>{Service.s_name}</h1>
                            <p>{Service.s_desc}</p>
                            <p className='read-more'>Read More ➡</p>
                        </div>

                ))}
        </div>
    </div>
  )
}

export default Services