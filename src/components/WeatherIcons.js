import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Day from './Day'

const WeatherIcons = ({ daily }) => {
    const styling = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        boxShadow: '1px 1px 10px 5px rgb(192 192 192 / 53%)'
    }
  
    return (
        <div style={styling}>
            <div style={{display: 'flex', boxShadow: '1px 1px 10px 5px rgb(192 192 192 / 53%)'}}>
            {daily.slice(0, 5).map((day, i) => {
                return (
                    <Day key={i} index={i} day={day} />
                )
            })}
            </div>
        </div>
    )
}

export default WeatherIcons;