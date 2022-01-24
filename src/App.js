import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherIcons from './components/WeatherIcons';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
    const [daily, setDaily] = useState([]);
    useEffect(() => {
        const fetchWeather = async () => {
        try {
            const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&exclude=current,minutely,hourly,alerts&units=metric&appid=' + API_KEY;
            const response = await axios(url);
            setDaily(response.data.daily);
            } catch (err) {
              console.log("error", err);
        }
    }
    fetchWeather();
    }, [])

    return (
      <div className="App">
        <WeatherIcons daily={daily} />
      </div>
    );
}

export default App;
