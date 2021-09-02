import React from 'react'
import AppointmentCard from './AppointmentCard'
import classes from './AppointmentCards.module.css'


const AppointmentCards = ({ data }) => {
    return (
        <div className={classes.cards}>
            {data.map((item, index) => <AppointmentCard key={index} title={item.title} price={item.price} time={item.time} />)}
        </div>)

}
export default AppointmentCards;