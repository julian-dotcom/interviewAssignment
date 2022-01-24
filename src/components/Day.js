import React, { useState, useEffect } from 'react'

const Day = ({ index, day }) => {
    const [iconUrl, setIconUrl] = useState('');
    const [weekday, setWeekday] = useState('');
    const [high, setHigh] = useState('');
    const [low, setLow] = useState('');
    useEffect(() => {
        const getIcon = () => {
            const iconId = day.weather[0].icon;
            setIconUrl(`http://openweathermap.org/img/wn/${iconId}@2x.png`);
            const weekday = (new Date(day.dt * 1000)).getDay();
            console.log(weekday);
            switch (weekday) {
                case 0:
                    setWeekday('Sun');
                    break;
                case 1:
                    setWeekday('Mon');
                    break
                case 2:
                    setWeekday('Tue');
                    break;
                case 3:
                    setWeekday('Wed');
                    break;
                case 4:
                    setWeekday('Thu');
                    break;
                case 5:
                    setWeekday('Fri');
                    break;
                case 6:
                    setWeekday('Sat');
                    break;
            }
            setHigh(day.temp.max);
            setLow(day.temp.min);
        }
        getIcon()
    }, [])

    const firstDay = index === 0 ? {backgroundColor: '#F8F8F8'} : {};
    return (
        <div style={firstDay}>
            <p style={{color: 'grey'}}  >{weekday}</p>
            <img src={iconUrl} alt='weather icon' />
            <p><span style={{paddingRight: 10}}><b>{high}</b></span><span style={{color: 'grey'}}>{low}</span></p>
        </div>
    )
}

export default Day;