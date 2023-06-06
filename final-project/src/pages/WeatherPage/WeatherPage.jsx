import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/weatherInformation'
import { Link } from 'react-router-dom'
import './WeatherPage.css'
// import { searchCity } from '../../features/weatherInformation'

function WeatherPage() {
    const [city, setCity] = useState("Accra");

    const [inputOne, setInputOne] = useState('');
    const searchCity = ()=>{
	    setCity(inputOne)
        dispatch(fetchPosts(inputOne))
    }

    const dispatch = useDispatch()
    const humidity = useSelector((state) => state.postsReducer.humidity)
    const wind_speed = useSelector((state) => state.postsReducer.wind_speed)
    const pressure = useSelector((state) => state.postsReducer.pressure)
    const rain_probability = useSelector((state) => state.postsReducer.rain_probability)
    const temperature = useSelector((state) => state.postsReducer.temperature)
  useEffect(() => {
    dispatch(fetchPosts(city))
  }, [])
    return (
        <body>
            <div className='weatherPage'>
                <div className='weather-information'>
                    <div className='weather-information-location'>
                        <div className='weather-information-location-city'>
                            <img src="../../../public/locationVector.svg" alt="" />
                            <p>{city}</p>
                        </div>
                        <h3>Thur - Oct - 22</h3>
                        <div className='search_window'>
                            <input value={inputOne} 
                            onChange={(event) => setInputOne(event.target.value)} type="text" />
                            <button onClick={searchCity}>Поиск</button>
                        </div>
                    </div>
                    <div className='weather-information-temperature'>
                        <div className='weather-information-temperature-inf'>
                            <h1>{temperature}°</h1>
                            <h3>Real feel: {temperature}</h3>
                        </div>
                        <div className='weather-information-temperature-img'>
                            <img src="../../../public/cloudy.svg" alt="" />
                            <h2>Cloudy</h2>
                        </div>
                    </div>
                    <div className='weather-information-features'>
                        <h2>UV index</h2>
                        <table>
                            <tr>
                                <td>Humidity</td>
                                <td>{humidity}</td>
                            </tr>
                            <tr>
                                <td>Wind speed</td>
                                <td>{wind_speed}mph</td>
                            </tr>
                            <tr>
                                <td>Rain Probability</td>
                                <td>{rain_probability}%</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>{pressure} pa</td>
                            </tr>
                        </table>
                    </div>
                    <div className='weather-information-img'>
                        <Link to={'/weather'}><img className='one' src="../../../public/cloud.svg" alt="" /></Link>
                        <Link to={'/chart'}><img className='two' src="../../../public/group.svg" alt="" /></Link>
                        <Link to={'/'}><img className='three' src="../../../public/table.svg" alt="" /></Link>
                        <Link to={'/todolist'}><img className='four' src="../../../public/vector.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='weather-img'>
                    <img src="../../../public/farmer.png" alt="" />
                </div>
            </div>
        </body>
    );
}

export default WeatherPage;