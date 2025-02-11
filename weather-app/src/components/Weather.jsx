import React from 'react'
import BsCloud from './BsCloud'
import {FaLocationDot} from 'react-icons/fa6'
import {BiSearch} from 'react-icons/bi'

const Weather = () => {
  return (
    <div>
      <div className='main-section'>
        <div className='weather-info'>
            <div className="location">
                <h3>New York - USA</h3>
            </div>
            <div className="condition">
                <h1>Overcast</h1>
            </div>

        </div>
        <div className='weather-info'>
          <div className="hour-card">
            <div className="hour-time">
              <p>09:00</p>
            </div>
            <div className="hour-condition">
              < BsCloud/>
            </div>
            <div className="hour-temp">
              <h2>10°C</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='side-section'>
        <div className="search-box">
          <FaLocationDot className='icon'/>
          <input type="text" placeholder='New-York' />
          <BiSearch />
          <div className="temp-info">
            <div className="forcast-days">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
