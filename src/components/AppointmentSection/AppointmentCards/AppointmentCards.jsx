import React from 'react'
import AppointmentCard from './AppointmentCard'
import classes from './AppointmentCards.module.css'


const AppointmentCards = ({ data }) => {
    return (
        <div className={classes.cards}>
            {data.map((item) => <AppointmentCard title={item.title} price={item.price} time={item.time} />)}
        </div>)

}
export default AppointmentCards;