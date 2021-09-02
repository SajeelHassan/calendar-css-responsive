import clsx from 'clsx';
import React from 'react'
import classes from './AppointmentCard.module.css'


const AppointmentCard = ({ title, price, time }) => {
    return (
        <div className={clsx('rounded', classes.card)}>
            <p className={classes.cardTitle}>{title}</p>
            <div className={classes.cardInfo}>
                <p className={classes.cardPriceTime}>{price} | {time}</p>

            </div>
        </div>
    )

}
export default AppointmentCard;